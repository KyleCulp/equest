import carball
from carball.json_parser.game import Game
from carball.json_parser.player import Player
from carball.analysis.analysis_manager import AnalysisManager
from carball.generated.api.metadata.game_metadata_pb2 import GameScore
from carball.generated.api.player_id_pb2 import PlayerId
from carball.generated import api

import os
import numpy as np
import pandas as pd
import google
import uuid
import json

import logging
# Prevent carball API logging messages
logging.disable(logging.CRITICAL)


class RocketLeague:
    omitList = [
        "average_xy_distance", "variance_xy_distance", 
        "num_stolen_boosts", "wasted_big", "wasted_small", 
        "ball_hit_backward", "pass_", "passed", "dribble", "dribble_continuation",
        "shot", "goal", "assist", "assisted", "save", "aerial",
        "average_duration", "average_hits", "wasted_usage", 
        "time_closest_to_team_center", "time_behind_center_of_mass",
        "time_furthest_from_team_center", "time_in_front_of_center_of_mass", 
        "total_goals", "total_saves", "total_shots"
        ]

    nestedOmitted = [int, bool, str, float, np.float64]

    nestedFields = [api.metadata.game_metadata_pb2.GameScore,
                    api.player_id_pb2.PlayerId,
                    api.stats.player_stats_pb2.PlayerStats,
                    api.stats.player_stats_pb2.PlayerStats,
                    api.stats.player_stats_pb2.Boost,
                    api.stats.player_stats_pb2.Distance,
                    api.stats.stats_pb2.Possession,
                    api.stats.stats_pb2.PositionalTendencies,
                    api.stats.stats_pb2.Averages,
                    api.stats.stats_pb2.HitCounts,
                    api.stats.player_stats_pb2.Controller,
                    api.stats.stats_pb2.Speed,
                    api.stats.player_stats_pb2.RelativePositioning,
                    api.stats.per_possession_stats_pb2.PerPossessionStats,
                    api.stats.player_stats_pb2.CumulativeKickoffStats]

    recursiveResultDict = {}
    statsarr = []
    teamstatsarr = []
    meta_arr = []
    replay_id = {}
    buildteam = {}


    def __init__(self):
        self.meta = None
        self.team = None
        self.players = None
        self.Meta = None
        self.Stats = {}
        self.Teams = None
        self.team_list = []
        self.outputfile = None

    #  Initializes replays
    def processReplays(self, replay, outputfile):
        self.outputfile = outputfile

        _json = carball.decompile_replay(replay)
        game = Game()
        player = Player()

        # Initialize and perform default analysis
        game.initialize(loaded_json=_json)

        analysis = AnalysisManager(game)
        analysis.create_analysis()

        # Get protobuf data to analyze
        proto_game = analysis.get_protobuf_data()

        # Readability
        self.meta = proto_game.game_metadata
        self.team = proto_game.teams
        self.players = proto_game.players

        self.getMetaInfo()
        self.getPlayerInfo()
        self.getTeamInfo()
        self.outputJSON()

    def recursive(self, key, val):
        try:
            if type(val) == google.protobuf.internal.containers.RepeatedCompositeFieldContainer:
                for i in range(0,len(val)):
                    self.recursive(key, val[i])
            elif type(val) not in self.nestedOmitted:
                if key not in self.omitList:
                    for(k, v) in val.ListFields():
                        self.recursive(k.name, v)
            else:
                dc = {key: val}
                if key not in self.omitList:
                    self.recursiveResultDict.update(dc)
        except:
            pass

    def getMetaInfo(self):
        # Handle google.protobuf.descriptor.FieldDescriptor object
        self.recursiveResultDict = {}
        # Lists the fields associated with the Proto2 object
        metaFieldList = self.meta.ListFields()
        # Extract the name of the field, associated value into a list of tuples
        fieldNameValue = [(key.name, value) for key, value in metaFieldList]
        # Take our list of tuples and turn them into key value pairs
        fieldTupleToDict = dict([fieldTuple for fieldTuple in fieldNameValue])

        nestedFieldsList = []
        fieldNameToBeDeleted = ""

        # Some fields are nested within others.
        # Find those fields and replace them with their child dictionaries
        for (key, val) in fieldTupleToDict.items():
            self.recursive(key, val)

        self.Meta = self.recursiveResultDict


    def getPlayerInfo(self):
        self.recursiveResultDict = {}
        # Lists the fields associated with the Proto2 object
        playerContainerList = [p.ListFields() for p in self.players]
        for i in range(0,len(playerContainerList)):
            # Extract the name of the field, associated value into a list of tuples
            fieldNameValue = [(key.name, value) for key, value in playerContainerList[i]]
            # Take our list of tuples and turn them into key value pairs
            fieldTupleToDict = dict([fieldTuple for fieldTuple in fieldNameValue])

            nestedFieldsList = []

            for (key, val) in fieldTupleToDict.items():
                self.recursive(key, val)

            # self.recursiveResultDict.update(self.replay_id)
            self.statsarr.append(self.recursiveResultDict.copy())
            
    def getTeamInfo(self):
        self.recursiveResultDict = {}
        # Lists the fields associated with the Proto2 object
        teamContainerList = [t.ListFields() for t in self.team]
        for i in range(0,len(teamContainerList)):
            self.team_list = []
            for j in range(0, len(self.team[i].player_ids)):
                self.team_list.append(self.team[i].player_ids[j].id)
            self.buildteam["team_"+ str(i) + "_players"] = self.team_list

            # Extract the name of the field, associated value into a list of tuples
            fieldNameValue = [(key.name, value) for key, value in teamContainerList[i]]
            # Take our list of tuples and turn them into key value pairs
            fieldTupleToDict = dict([fieldTuple for fieldTuple in fieldNameValue])

            nestedFieldsList = []
            fieldNameToBeDeleted = ""

            for (key, val) in fieldTupleToDict.items():
                self.recursive(key, val)

            # self.recursiveResultDict.update(self.replay_id)
            self.buildteam["team_"+str(i)+"_stats"] = self.recursiveResultDict.copy()

    def outputJSON(self):
        stats = {"player_stats": [x for x in self.statsarr]}
        meta_stats = {**self.Meta, **stats}
        full = {**meta_stats, **self.buildteam}
        
        with open(self.outputfile, 'w') as fp:
            json.dump(full, fp)
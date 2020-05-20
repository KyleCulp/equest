#!/usr/bin/env python

import sys, argparse, os
from pathlib import Path
from dotenv import load_dotenv
import carball
from carball.json_parser.game import Game
from carball.json_parser.player import Player
from carball.analysis.analysis_manager import AnalysisManager
load_dotenv()

def create_arg_parser():
  parser = argparse.ArgumentParser(description='Read in files from a directory, and parse them.')
  parser.add_argument('--inputDir', type=Path, help='Path to the input directory.')
  parser.add_argument('--outputDir', type=Path, help='Path to the output directory.')
  return parser.parse_args()

def parseReplay(replay, outputDir):
  print("Starting replay: " + str(replay))
  _json = carball.decompile_replay(replay)
  game = Game()
  player = Player()

  # Initialize and perform default analysis
  game.initialize(loaded_json=_json)

  analysis = AnalysisManager(game)
  analysis.create_analysis(calculate_intensive_events=True)

  outputPath = os.path.join(outputDir, (os.path.basename(str(replay)) + ".json"))
  analysis.write_json_out_to_file(file=open(outputPath, "w+"))


# Is this like def main?
if __name__ == "__main__":
  args = create_arg_parser()
  inputDirectory = os.listdir(args.inputDir)

  # Cast iterator to list?
  replays = list(filter(lambda k: '.replay' in k, inputDirectory))

  # Loop through every replay in the directory
  for replay in replays:
    parseReplay(os.path.join(args.inputDir, replay), args.outputDir)


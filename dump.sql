--
-- PostgreSQL database dump
--

-- Dumped from database version 11.7 (Debian 11.7-1.pgdg90+1)
-- Dumped by pg_dump version 11.7 (Debian 11.7-1.pgdg90+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: game_jsonb; Type: TABLE; Schema: public; Owner: devadmin
--

CREATE TABLE public.game_jsonb (
    game jsonb
);


ALTER TABLE public.game_jsonb OWNER TO devadmin;

--
-- Name: meta; Type: TABLE; Schema: public; Owner: devadmin
--

CREATE TABLE public.meta (
    replay_date text NOT NULL,
    replay_id text NOT NULL,
    map_name text,
    server_name text,
    team_0_score integer,
    team_1_score integer,
    replay_length text
);


ALTER TABLE public.meta OWNER TO devadmin;

--
-- Name: player; Type: TABLE; Schema: public; Owner: devadmin
--

CREATE TABLE public.player (
    name text,
    id text NOT NULL,
    appears_in text
);


ALTER TABLE public.player OWNER TO devadmin;

--
-- Name: player_stats; Type: TABLE; Schema: public; Owner: devadmin
--

CREATE TABLE public.player_stats (
    replay_id text NOT NULL,
    player_name text NOT NULL,
    player_id text,
    score integer,
    goals integer,
    assists integer,
    saves integer,
    shots integer,
    boost_usage numeric,
    small_boosts numeric,
    large_boosts numeric,
    wasted_collection numeric,
    wasted_usage numeric,
    time_full_boost numeric,
    time_low_boost numeric,
    time_no_boost numeric,
    num_stolen_boosts integer,
    average_boost_level numeric,
    wasted_big numeric,
    wasted_small numeric,
    ball_hit_forward numeric,
    ball_hit_backward numeric,
    time_closest_to_ball numeric,
    time_close_to_ball numeric,
    time_closest_to_team_center numeric,
    possession_time numeric,
    turnovers numeric,
    turnovers_on_my_half numeric,
    turnovers_on_their_half numeric,
    time_low_in_air numeric,
    time_high_in_air numeric,
    time_in_defending_half numeric,
    time_in_attacking_half numeric,
    time_in_defending_third numeric,
    time_in_neutral_third numeric,
    time_in_attacking_third numeric,
    time_behind_ball numeric,
    time_in_front_ball numeric,
    time_near_wall numeric,
    time_in_corner numeric,
    average_speed numeric,
    average_hit_distance numeric,
    total_hits numeric,
    total_passes numeric,
    time_at_slow_speed numeric,
    time_at_super_sonic numeric,
    time_at_boost_speed numeric,
    time_most_forward_player numeric,
    time_most_back_player numeric,
    time_between_players numeric
);


ALTER TABLE public.player_stats OWNER TO devadmin;

--
-- Name: meta meta_pkey; Type: CONSTRAINT; Schema: public; Owner: devadmin
--

ALTER TABLE ONLY public.meta
    ADD CONSTRAINT meta_pkey PRIMARY KEY (replay_id);


--
-- Name: player player_pkey; Type: CONSTRAINT; Schema: public; Owner: devadmin
--

ALTER TABLE ONLY public.player
    ADD CONSTRAINT player_pkey PRIMARY KEY (id);


--
-- Name: player_stats player_stats_pkey; Type: CONSTRAINT; Schema: public; Owner: devadmin
--

ALTER TABLE ONLY public.player_stats
    ADD CONSTRAINT player_stats_pkey PRIMARY KEY (replay_id, player_name);


--
-- PostgreSQL database dump complete
--


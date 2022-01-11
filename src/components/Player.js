import "./Player.css";
import { useEffect, useRef, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { forwardsSvg, backwardsSvg, shuffleSvg } from "../svg";
import { setPlayerState, selectSongById } from "../actions";
import Progress from "./ProgressBar";
import SongTime from "./SongTime";

const Player = ({
    selectedSongId,
    defaultSong,
    playerState,
    songs,
    selectSongById,
    volume,
}) => {
    const dispatch = useDispatch();
    const [shuffled, setShuffled] = useState(false);
    const audioRef = useRef();
    let clicked = false;

    const spaceDownFunc = (event) => {
        if (event.keyCode === 32 && !clicked) {
            clicked = true;
            document.getElementsByClassName("main-control")[0].click();
        }
    };
    const spaceUpFunc = (event) => {
        if (event.keyCode === 32 && clicked) {
            clicked = false;
        }
    };

    useEffect(() => {
        document.addEventListener("keydown", spaceDownFunc);
        document.addEventListener("keyup", spaceUpFunc);
    }, []);

    if (selectedSongId < 0 || selectedSongId > songs.length - 1) {
        selectSongById(0);
    }

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume / 500;
        }
    }, [volume]);

    const onMusicPlay = (e) => {
        e.preventDefault();

        if (!playerState) {
            audioRef.current.play();
            dispatch({ type: "PLAYER_STATE_SELECTED", payload: 1 });
        } else {
            audioRef.current.pause();
            dispatch({ type: "PLAYER_STATE_SELECTED", payload: 0 });
        }
    };

    const onBackwardClick = () => {
        if (selectedSongId > 0) {
            selectSongById(selectedSongId - 1);
        }
    };
    const onForwardClick = () => {
        if (selectedSongId < songs.length - 1) {
            selectSongById(selectedSongId + 1);
        }
    };

    useEffect(() => {
        dispatch({ type: "PLAYER_STATE_SELECTED", payload: 1 });
        audioRef.current.play();
        // console.log(audioRef.current.duration);
        document.getElementById("focus-link").click();
        window.history.pushState({}, "", "/");
    }, [selectedSongId, dispatch]);
    useEffect(() => {
        dispatch({ type: "PLAYER_STATE_SELECTED", payload: 0 });
        audioRef.current.pause();
    }, [dispatch]);

    return (
        <div id="player">
            <SongTime />
            <div
                className="control"
                id={shuffled ? `active` : null}
                onClick={() => {
                    setShuffled(!shuffled);
                    // console.log("shuffle: " + !shuffled);
                }}
            >
                {shuffleSvg}
            </div>
            <div className="control" onClick={onBackwardClick}>
                {backwardsSvg}
            </div>
            <div className="main-control control" onClick={onMusicPlay}>
                <i
                    className={`fas fa-${
                        playerState ? "pause" : "play"
                    }-circle`}
                ></i>
            </div>
            <div className="control" onClick={onForwardClick}>
                {forwardsSvg}
            </div>
            <Progress />
            

            <audio
                id="main-track"
                controls
                src={songs[selectedSongId].url}
                preload="true"
                onEnded={() => {
                    selectSongById(
                        shuffled
                            ? Math.round(Math.random() * songs.length)
                            : selectedSongId + 1
                    );
                }}
                onLoadedMetadata={() => {
                    dispatch({
                        type: "SET_DURATION",
                        payload: audioRef.current.duration,
                    });

                    setInterval(() => {
                        dispatch({
                            type: "SET_CURRENT_LOCATION",
                            payload: audioRef.current.currentTime,
                        });
                    }, 1000);
                }}
                ref={audioRef}
                hidden
            >
                Your browser does not support the
                <code>audio</code> element.
            </audio>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        selectedSongId: state.selectedSongId,
        defaultSong: state.songs[0],
        playerState: state.playerState,
        songs: state.songs,
        volume: state.volume,
    };
};

export default connect(mapStateToProps, { setPlayerState, selectSongById })(
    Player
);

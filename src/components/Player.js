import "./Player.css";
import { useRef } from "react";
import { connect, useDispatch } from "react-redux";
import { forwardsSvg, backwardsSvg } from "../svg";
import { setPlayerState } from "../actions";

const Player = ({ selectedSong, defaultSong, playerState }) => {
    const dispatch = useDispatch();
    const audioRef = useRef();
    if (!selectedSong) {
        selectedSong = defaultSong;
    }
    const onMusicPlay = (e) => {
        e.preventDefault();
        if (!playerState) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
        dispatch({ type: "PLAYER_STATE_SELECTED" });
    };

    return (
        <div id="player">
            <div className="control">{backwardsSvg}</div>
            <div className="main-control" onClick={onMusicPlay}>
                <i
                    className={`fas fa-${
                        playerState ? "pause" : "play"
                    }-circle`}
                ></i>
            </div>
            <div className="control">{forwardsSvg}</div>
            <audio
                id="main-track"
                controls
                src={selectedSong.url}
                preload="true"
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
    console.log(state);
    return {
        selectedSong: state.selectedSong,
        defaultSong: state.songs[0],
        playerState: state.playerState,
    };
};

export default connect(mapStateToProps, { setPlayerState: setPlayerState })(
    Player
);

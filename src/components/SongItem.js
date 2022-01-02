import { useState } from "react";
import "./SongItem.css";
import { connect, useDispatch } from "react-redux";
import { selectSong } from "../actions";

const SongItem = ({ song, index, selectSong, selectedSongId, playerState }) => {
    const [, setHovered] = useState(false);
    const dispatch = useDispatch();

    const selector = () => {
        return (
            <a draggable="false" href={song.url}>
                <svg
                    role="img"
                    height="24"
                    width="24"
                    viewBox="0 0 24 24"
                    className="download-link"
                >
                    <path
                        d="M11.5 0C5.149 0 0 5.148 0 11.5 0 17.851 5.149 23 11.5 23S23 17.851 23 11.5C23 5.148 17.851 0 11.5 0zm0 22C5.71 22 1 17.29 1 11.5S5.71 1 11.5 1 22 5.71 22 11.5 17.29 22 11.5 22zm.499-6.842V5h-1v10.149l-3.418-3.975-.758.652 4.678 5.44 4.694-5.439-.757-.653-3.439 3.984z"
                        fill="currentColor"
                    ></path>
                </svg>
            </a>
        );
    };

    // Set song as active
    const now_selected = selectedSongId === song.id ? "active" : "";

    // set the gif
    const phaser = () => {
        if (selectedSongId === song.id && playerState) {
            return (
                <div className="index">
                    <img
                        alt=""
                        src="/playing.gif"
                        id="focused"
                        className="small-icon"
                    />
                </div>
            );
        } else {
            return <div className="index">{index + 1}</div>;
        }
    };
    return (
        <div
            className={`song-item`}
            id={now_selected}
            onMouseOver={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={() => {
                selectSong(song);
                dispatch({ type: "PLAYER_STATE_SELECTED", payload: 1 });
            }}
        >
            {phaser()}
            <div className="name">{song.name}</div>
            <div className="author">{song.author}</div>
            <div className="selector">{selector()}</div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        selectedSongId: state.selectedSongId,
        playerState: state.playerState,
    };
};

export default connect(mapStateToProps, { selectSong })(SongItem);

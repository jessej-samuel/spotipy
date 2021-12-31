import { useState } from "react";
import "./SongItem.css";
import { connect } from "react-redux";
import { selectSong } from "../actions";

const SongItem = ({ song, index, selectSong, selectedSong }) => {
    const [hovered, setHovered] = useState(false);

    const selector = () => {
        if (hovered) {
            if (selectedSong === song) {
                return (
                    // Pause icon on playing song
                    <div className="item-control">
                        <svg
                            height="32"
                            role="img"
                            width="32"
                            viewBox="0 0 24 24"
                            className="small-icon"
                        >
                            <rect
                                x="5"
                                y="3"
                                width="4"
                                height="18"
                                fill="currentColor"
                            ></rect>
                            <rect
                                x="15"
                                y="3"
                                width="4"
                                height="18"
                                fill="currentColor"
                            ></rect>
                        </svg>
                    </div>
                );
            }
            return (
                // Play icon
                <div>
                    <svg
                        height="32"
                        role="img"
                        width="32"
                        viewBox="0 0 24 24"
                        className="small-icon"
                    >
                        <polygon
                            points="21.57 12 5.98 3 5.98 21 21.57 12"
                            fill="currentColor"
                        ></polygon>
                    </svg>
                </div>
            );
        } else {
            return <a href={song.url}>Link</a>;
        }
    };

    // Set song as active
    const now_selected = selectedSong === song ? "active" : "";

    // set the gif
    const phaser = () => {
        if (selectedSong === song) {
            return (
                <div className="index">
                    <img alt="" src="/playing.gif" className="small-icon" />
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
            onClick={() => selectSong(song)}
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
        selectedSong: state.selectedSong,
    };
};

export default connect(mapStateToProps, { selectSong })(SongItem);

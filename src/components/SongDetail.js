import "./SongDetail.css";
import { connect } from "react-redux";
import { selectSong } from "../actions";

const SongDetail = ({
    selectedSongId = -1,
    defaultSong,
    selectSong,
    songs,
}) => {
    const songData = () => {
        if (selectedSongId >= 0) {
            return (
                <div className="now-playing">
                    <div id="active">
                        <strong>Now playing</strong>
                    </div>
                    <div className="header">{songs[selectedSongId].name}</div>
                </div>
            );
        } else {
            selectSong(defaultSong);
            return null;
        }
    };

    return <div className="song-detail">{songData()}</div>;
};

const mapStateToProps = (state) => {
    return {
        selectedSongId: state.selectedSongId,
        defaultSong: state.songs[0],
        songs: state.songs,
    };
};

export default connect(mapStateToProps, { selectSong: selectSong })(SongDetail);

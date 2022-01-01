import "./SongDetail.css";
import { connect } from "react-redux";
import { selectSong } from "../actions";

const SongDetail = ({ selectedSong = null, defaultSong, selectSong }) => {
    const songData = () => {
        if (selectedSong) {
            return (
                <>
                    <div className="now-playing">
                        <div id="active">
                            <strong>Now playing</strong>
                        </div>
                        <div className="header">{selectedSong.name}</div>
                    </div>
                </>
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
        selectedSong: state.selectedSong,
        defaultSong: state.songs[0],
    };
};

export default connect(mapStateToProps, { selectSong: selectSong })(SongDetail);

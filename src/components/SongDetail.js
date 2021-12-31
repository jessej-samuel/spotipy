import "./SongDetail.css";
import { connect } from "react-redux";
import { useEffect } from "react";

const SongDetail = ({ selectedSong = null }) => {
    useEffect(() => {});

    const songData = () => {
        if (selectedSong) {
            return (
                <>
                    <div className="banner-container">
                        Lol
                    </div>
                </>
            );
        } else {
            return null;
        }
    };

    return <div className="song-detail">{songData()}</div>;
};

const mapStateToProps = (state) => {
    return {
        selectedSong: state.selectedSong,
    };
};

export default connect(mapStateToProps)(SongDetail);

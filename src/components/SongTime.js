import { connect } from "react-redux";
import React from "react";

class SongTime extends React.Component {
    render() {
        return <div className="music-timer"></div>;
    }
}

const mapStateToProps = (state) => {
    return {
        duration: state.duration,
        currentLocation: state.duration,
    };
};

export default connect(mapStateToProps)(SongTime);

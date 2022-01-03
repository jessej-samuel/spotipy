import { connect } from "react-redux";
import React from "react";
import "./SongTime.css";

class SongTime extends React.Component {
    constructor(props) {
        super(props)
        // this.state = {}
        // setInterval(() => {
        //     this.setState({
        //         duration: this.props.duration,
        //         currentLocation: this.props.currentLocation
        //     })
        // }, 1000);
    }
    componentDidUpdate() {
        
    }
    render() {
        return (
            <div className="music-timer">
                <div
                    className="completed"
                    style={{
                        width: `${
                            (this.props.currentLocation / this.props.duration) *
                            100
                        }%`,
                    }}
                ></div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        duration: state.duration,
        currentLocation: state.currentLocation,
    };
};

export default connect(mapStateToProps)(SongTime);

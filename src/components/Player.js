import "./Player.css";

const Player = () => {
    return (
        <div id="player">
            <div className="control">
                <svg
                    role="img"
                    height="24"
                    width="24"
                    viewBox="0 0 16 16"
                    className=""
                >
                    <path
                        d="M13 2.5L5 7.119V3H3v10h2V8.881l8 4.619z"
                        fill="currentColor"
                    ></path>
                </svg>
            </div>
            <div className="control">
                <i className="fas fa-play-circle"></i>
            </div>
            <div className="control">
                <svg
                    role="img"
                    height="24"
                    width="24"
                    viewBox="0 0 16 16"
                    className=""
                >
                    <path
                        d="M11 3v4.119L3 2.5v11l8-4.619V13h2V3z"
                        fill="currentColor"
                    ></path>
                </svg>
            </div>
        </div>
    );
};

export default Player;

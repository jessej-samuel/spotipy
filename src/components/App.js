import React from "react";
import "./App.css";
import NavBar from "./NavBar";
import Player from "./Player";
import SongList from "./SongList";
import songs from "../data/songs.json";
import SongDetail from "./SongDetail";
import SongListHeader from "./SongListHeader";

for (let index = 0; index < songs.length; index++) {
    const song = songs[index];
    song.id = index;
}

const App = () => {
    return (
        <React.Fragment>
            <NavBar />
            <SongListHeader />
            <SongDetail />
            <SongList songs={songs} />
            <Player />
            <a href="#focused" id="focus-link" hidden>
                Go to playing element
            </a>
        </React.Fragment>
    );
};
export default App;

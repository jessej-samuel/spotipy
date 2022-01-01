import { combineReducers } from "redux";
import songs from "../data/songs.json";

const songsReducer = () => {
    return songs;
};

const selectedSongsReducer = (selectedSong = null, action) => {
    if (action.type === "SONG_SELECTED") {
        return action.payload;
    }
    return selectedSong;
};

const playerStateReducer = (playerState = 0, action) => {
    if (action.type === "PLAYER_STATE_SELECTED") {
        return (playerState + 1) % 2;
    }
    return playerState;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongsReducer,
    playerState: playerStateReducer,
});

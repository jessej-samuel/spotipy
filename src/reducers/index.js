import { combineReducers } from "redux";
import songs from "../data/songs.json";

const songsReducer = () => {
    return songs;
};

const selectedSongIdReducer = (selectedSongId = 0, action) => {
    if (action.type === "SONG_SELECTED") {
        return action.payload.id;
    }
    if (action.type === "SONG_SELECTED_BY_ID") {
        return action.payload;
    }
    return selectedSongId;
};

const playerStateReducer = (playerState = 0, action) => {
    if (action.type === "PLAYER_STATE_SELECTED" && !action.payload) {
        return (playerState + 1) % 2;
    } else if (action.type === "PLAYER_STATE_SELECTED" && action.payload) {
        return action.payload;
    }
    return playerState;
};

export default combineReducers({
    songs: songsReducer,
    selectedSongId: selectedSongIdReducer,
    playerState: playerStateReducer,
});

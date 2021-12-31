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

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongsReducer,
});

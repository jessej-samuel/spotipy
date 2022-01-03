export const selectSong = (song) => {
    return {
        type: "SONG_SELECTED",
        payload: song,
    };
};

export const selectSongById = (id) => {
    return {
        type: "SONG_SELECTED_BY_ID",
        payload: id,
    };
};

export const setPlayerState = (val) => {
    return {
        type: "PLAYER_STATE_SELECTED",
        payload: val,
    };
};

export const setVolume = (val) => {
    return {
        type: "SET_VOLUME",
        payload: val,
    };
};

export const setDuration = (val) => {
    return {
        type: "SET_DURATION",
        payload: val,
    };
};

export const setCurrentLocation = (val) => {
    return {
        type: "SET_CURRENT_LOCATION",
        payload: val,
    };
};

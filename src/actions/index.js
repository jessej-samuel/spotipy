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
        payload: val
    };
};

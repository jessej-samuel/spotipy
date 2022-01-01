export const selectSong = (song) => {
    return {
        type: "SONG_SELECTED",
        payload: song,
    };
};

export const setPlayerState = () => {
    return {
        type: "PLAYER_STATE_SELECTED",
    };
};

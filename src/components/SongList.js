import "./SongList.css";
import SongItem from "./SongItem";

const SongList = ({ songs = [] }) => {
    const songTags = songs.map((song, index) => {
        return <SongItem song={song} key={index} index={index} />;
    });
    return <div id="song-list">{songTags}</div>;
};

export default SongList;

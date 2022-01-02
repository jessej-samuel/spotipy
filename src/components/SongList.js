import "./SongList.css";
import SongItem from "./SongItem";
import { useDispatch } from "react-redux";

const SongList = ({ songs = [] }) => {
    const dispatch = useDispatch();
    const songTags = songs.map((song, index) => {
        return <SongItem song={song} key={index} index={index} />;
    });
    return (
        <div id="song-list">
            <div className="song-item header">
                <div className="index">#</div>
                <div className="name">Title</div>
                <div className="author">Author</div>
                <div className="selector">
                <i class="fas fa-chevron-down"></i>
                </div>
            </div>

            {songTags}
        </div>
    );
};

export default SongList;

import datas from "../data/songs.json"
import { Link } from "react-router-dom"

export const SongList = ({ title }) => {
  const songs = datas.songs;

  return (
    <div>
      <h1>{title}</h1>
      <ul className="songCard">
        {songs.map((song) => (
          <li key={song.rank}>
            <Link
              to={`/song/${song.title.toLocaleLowerCase().replace(/ /g, "-")}`}
            >
              {song.title} - {song.artist}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

//All the songs as a link. sth like <a href>, but <Link> is faster.
//when you click on {song.title} - {song.artist}, it will go to the page which URL is {`/song/${song.title.toLocaleLowerCase().replace(/ /g, "-")}`}
//so SongLink only need to export to home page. no need to export to router
//the Link's content is SongInfo. so in router, the path is same as the link. 
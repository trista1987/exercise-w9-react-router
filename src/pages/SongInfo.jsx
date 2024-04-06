// TODO: Import necessary modules and data
import "./songInfo.css";
import datas from "../data/songs.json"
import { useParams} from "react-router-dom";

// TODO: Destrcutrue props to receive information coming in from the parent comp
export const SongInfo =()=> {
  // TODO: Fetch the song title from the URL and find the corresponding song data and add a conditional to display some simple html if there is no song :)
  const {songTitle} = useParams()
  console.log(datas.songs)

  const info = datas.songs.find (
    (song) => song.title.toLowerCase().replace(/ /g,"-") === songTitle
  )

  if (!info) return <p>Song not found</p>

  return (
    <>
    <div>
        <h2>Song Information</h2>
        {/* TODO: Display song details or a "Song not found!" message */}
        <h4>Title</h4>
        <p>{info.title}</p>
        <h5>Artist</h5>
        <p>{info.artist}</p>
        <h5>Album</h5>
        <p>{info.album}</p>
        <h5>Year</h5>
        <p>{info.year}</p>
      </div>
    </>
  );
}



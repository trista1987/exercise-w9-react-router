// TODO: Import necessary modules and data
import { SongList } from "../components/SongList";


export const Home =() => {
  // TODO: Implement logic to display the list of songs
  return (
    <>
      <div>
        <h1>Rolling Stones 500 Greatest Songs of all Time</h1>
        {/* TODO: Display the list of songs with links */}
        <SongList />

      </div>
    </>
  );
}

//songList => all the songs as a link
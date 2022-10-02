import './App.css';
import {NavBar} from "./components/NavBar";
import MainPage from "./pages/MainPage";
import SongStore from "./store/SongStore";
import MusicContext from "./context/MusicContext";

function App() {

  return (
      <MusicContext.Provider value={
        {song: new SongStore()}
      }>
        <div>
          <NavBar/>
          <MainPage/>
        </div>
      </MusicContext.Provider>
  );
}

export default App;

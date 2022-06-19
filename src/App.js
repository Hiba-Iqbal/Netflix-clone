import "./App.css";
import Banner from "./Components/Banner";
import NavBar from "./Components/NavBar";
import Row from "./Components/Row";
import requests from "./requests";

// 62680097d191890562199d808a2e671c
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Row
        title="Netflix Original"
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow /*   by default isLargeRow={true}  */
      />
      <Row title="Trending Now" fetchURL={requests.fetchTrending} />
      <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchURL={requests.fetchDocumantaries} />
    </div>
  );
}

export default App;

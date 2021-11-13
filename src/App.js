import './App.css';
import Header from './components/Header/Header';
import Slider from './components/Slider';
import MovieSlider from './components/MovieSlider';
import CardSlider from './components/CardSlider';
import Premieres from './components/Premieres';
import OnlineEvents from './components/OnlineEvents';
import OutdoorEvents from './components/OutdoorEvents';
import LaughterTherapy from './components/LaughterTherapy';
import PopularEvents from './components/PopularEvents';
import TopGames from './components/TopGames';
import TrendingSearches from './components/TrendingSearches';
import FunActivities from './components/FunActivities';
import PrivacyPolicy from './components/PrivacyPolicy';
import AllMoviesFetch from './components/AllMoviesFetch';
import SingleMovieFetch from './components/SingleMovieFetch';
import Footer from './components/Footer/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Registration from './components/Registration';

function App() {
  return (
    <Router>
      <div>
        <Header />

        <Switch>
          {/* Movies Route */}
          <Route exact path="/movies">
            <MovieSlider />
            <AllMoviesFetch />
          </Route>

          {/* Register Route */}
          <Route exact path="/register">
            <Registration />
          </Route>

          <Route exact path="/:movid">
            <SingleMovieFetch />
          </Route>

          {/* Home Route */}
          <Route exact path="/">
            <Slider />
            <CardSlider />
            <Premieres />
            <OnlineEvents />
            <OutdoorEvents />
            <LaughterTherapy />
            <PopularEvents />
            <TopGames />
            <TrendingSearches />
            <FunActivities />
          </Route>
        </Switch>

        <PrivacyPolicy />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

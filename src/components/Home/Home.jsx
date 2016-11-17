// CSS/Assets
import './Home.scss';

// JS
import { connect }  from 'react-redux';

// Components
import CurrentMatches from '../CurrentMatches/CurrentMatches';
import Header         from '../Header/Header';
import PageTitle      from '../PageTitle/PageTitle';

const mapStateToProps = ({ matches }) => ({
  matches
});

export const Home = ({ matches }) =>
  <div>
    <Header />
    <PageTitle>
      <h1 className="Home-header">
        <span>Leaderboard.</span>
        The one place to follow the latest golf scores.
      </h1>
    </PageTitle>
    <div className="container">
      <div className="row">
        <CurrentMatches matches={matches} />
      </div>
    </div>
  </div>

export default connect(mapStateToProps)(Home);

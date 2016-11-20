// CSS/Assets
import './App.scss';

// Components
import React from 'react';
import Footer               from '../Footer/Footer';

const App = (props) =>
  <div className="App">
    <div id="site-contents">
      { props.children }
    </div>
    <Footer />
  </div>

App.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default App;

// CSS/Assets
import './PageTitle.scss';

// JS
import React from 'react';

export const PageTitle = (props) =>
  <div className="container border-bottom">
    <div className="row">
      <div className="column">
        <div className="section">
          { props.children }
        </div>
      </div>
    </div>
  </div>

PageTitle.propTypes = {
  children: React.PropTypes.element
}

export default PageTitle;

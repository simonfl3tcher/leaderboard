// CSS/Assets
import './PageTitle.scss';

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

export default PageTitle;

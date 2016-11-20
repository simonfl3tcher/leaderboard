// CSS/Assets
import './MatchRow.scss';

// JS
import React from 'react';
import { Link } from 'react-router';

const MatchRow = (props) =>
  <div className="section align-center section-grey push-top">
    <h4>{ props.data.title }</h4>
    <span>{ props.data.date } - { props.data.time }</span>
    <p className="lead push-top">
      <Link
        className="button button-large button-outline"
        to={`match/${props.data.id}`}>
        View Match!
      </Link>
    </p>
  </div>

MatchRow.propTypes = {
  data: React.PropTypes.shape({
    id: React.PropTypes.number,
    title: React.PropTypes.string.isRequired,
    date: React.PropTypes.string.isRequired,
    time: React.PropTypes.string.isRequired
  })
}

export default MatchRow;

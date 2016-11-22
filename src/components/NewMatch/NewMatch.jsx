// CSS/Assets
import './NewMatch.scss';

// JS
import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { addMatch } from '../../actions/MatchActions/MatchActions';

// Components
import Header from '../Header/Header';
import PageTitle from '../PageTitle/PageTitle';

const mapDispatchToProps = (dispatch) => ({
  onSave: (match) => dispatch(addMatch(match))
});

const mapStateToProps = () => ({
  match: {}
});

export class NewMatch extends Component {
  render() {
    let { match } = this.props;
    return (
      <div>
        <Header />
        <PageTitle>
          <h1 className='ViewMatch-header text-center'>
            Create Match!
          </h1>
        </PageTitle>
        <div className='container'>
          <div className='row'>
            <div
              className='NewMatch column column-50 column-offset-25 push-top'>
              <fieldset>
                <label> Title </label>
                <input
                  name='title'
                  ref='title'
                  type='text'
                  placeholder='Match Title'
                  defaultValue={match.title}
                  />
                <label> Date </label>
                <input
                  name='date'
                  ref='date'
                  type='text'
                  placeholder='Match Date'
                  defaultValue={match.date}
                  />
                <label> Time </label>
                <input
                  name='time'
                  ref='time'
                  type='text'
                  placeholder='Match Time'
                  defaultValue={match.time}
                  />
                <div className='text-left'>
                  <button
                    className='button-primary'
                    type='submit'
                    onClick={this.onSave.bind(this)}>Create!</button>
                </div>
                <div className='text-right'>
                  <Link className='btn' to={'/'}> Cancel </Link>
                </div>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    )
  }
  onSave() {
    var title = this.refs.title;
    var date  = this.refs.date;
    var time  = this.refs.time;

    this.props.onSave(Object.assign({}, this.props.match, {
      title: title.value,
      date:  date.value,
      time:  time.value
    }));

    browserHistory.push('/')
  }
}

NewMatch.propTypes = {
  match:  React.PropTypes.object.isRequired,
  onSave: React.PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(NewMatch);

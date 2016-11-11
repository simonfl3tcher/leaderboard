// CSS/Assets
import './NewMatch.scss';

// JS
import React, { Component } from 'react';

class NewMatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      date:  '',
      time:  '',
      invalidData: true
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault;
    console.log(this.state)
  }

  componentWillUpdate(nextProps, nextState) {
    nextState.invalidData = !(nextState.title && nextState.date && nextState.time);
  }

  handleChange(name, event) {
    let change = {};
    change[name] = event.target.value;
    this.setState(change);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="NewMatch column column-50 column-offset-25 push-top">
            <h1>Create Match!</h1>
            <fieldset>
              <label> Title </label>
              <input
                ref='title'
                type='text'
                placeholder='Match Title'
                defaultValue={this.state.title}
                onChange={this.handleChange.bind(this, 'title')}
                />
              <label> Date </label>
              <input
                ref='date'
                type='text'
                placeholder='Match Date'
                defaultValue={this.state.date}
                onChange={this.handleChange.bind(this, 'date')}
                />
              <label> Time </label>
              <input
                ref='date'
                type='text'
                placeholder='Match Time'
                defaultValue={this.state.time}
                onChange={this.handleChange.bind(this, 'time')}
                />
              <div className='text-center'>
                <button
                  className="button-primary"
                  type="submit"
                  onClick={this.handleSubmit}
                  disabled={this.state.invalidData}>Create!</button>
              </div>
            </fieldset>
          </div>
        </div>
      </div>
    )
  }
}

export default NewMatch;

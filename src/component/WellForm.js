import React from 'react';
import DisplayList from './DisplayList';
import './App.css';

class WellForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <h3></h3>
          <form onSubmit={this.handleSubmit}>
          <label>
            What needs to be done?
          </label>
           <input name="well" id="new" onChange={this.handleChange}
           value={this.state.text}
          />
          <button>
            submit
          </button>
        </form>
        <div>
        <DisplayList items={this.state.items} />
      </div>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
      text: ''
    }));
  }
}

export default WellForm;

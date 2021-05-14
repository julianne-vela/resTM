import React, { Component } from 'react';
import Form from '../components/controls/Form';
export default class RestellaContainer extends Component {
  state = {
    loading: false,
    method: '',
    url: '',
    json: '',
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    console.log('submitted!'); // TODO replace w/ API call
    this.setState({ loading: false });
  };

  handleInputChange = ({ target }) => {
    const value = target.value;
    this.setState({
      ...state,
      [target.name]: value,
    });
  };

  render() {
    const { url, json } = this.state;
    return (
      <Form
        onSubmit={this.handleFormSubmit}
        onInputChange={this.handleInputChange}
        url={url}
        json={json}
      />
    );
  }
}

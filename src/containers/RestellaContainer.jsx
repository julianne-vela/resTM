import React, { Component } from 'react';
import Form from '../components/controls/Form';
import { makeRequest } from '../services/apiUtils';
export default class RestellaContainer extends Component {
  state = {
    loading: false,
    method: '',
    urlValue: '',
    jsonValue: '',
    results: [],
  };

  handleFormSubmit = async (e) => {
    e.preventDefault();

    const { method, urlValue, jsonValue } = this.state;
    let results;

    this.setState({ loading: true });

    try {
      results = await makeRequest(method, urlValue, jsonValue);
    } catch (error) {
      results = `Oh no! Something went wrong: ${error.message}`;
    }

    this.setState({
      loading: false,
      results,
    });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { urlValue, jsonValue } = this.state;
    return (
      <Form
        onSubmit={this.handleFormSubmit}
        onInputChange={this.handleInputChange}
        url={urlValue}
        json={jsonValue}
      />
    );
  }
}

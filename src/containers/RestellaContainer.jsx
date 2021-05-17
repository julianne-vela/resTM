import React, { Component } from 'react';
import Form from '../components/controls/Form';
import Header from '../components/app/Header';
import { makeRequest } from '../services/apiUtils';
import HistoryList from '../components/history/HistoryList';
import JsonViewer from '../components/res-display/JsonViewer';

export default class RestellaContainer extends Component {
  state = {
    loading: false,
    methodValue: '',
    urlValue: '',
    jsonValue: '',
    history: [],
    response: '',
  };

  handleFormSubmit = async (e) => {
    e.preventDefault();

    const { methodValue, urlValue, jsonValue } = this.state;
    let results;

    this.setState({ loading: true });

    try {
      results = await makeRequest(methodValue, urlValue, jsonValue);
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
    const { urlValue, jsonValue, response, methodValue } = this.state;
    return (
      <>
        <Header />
        <Form
          onSubmit={this.handleFormSubmit}
          onInputChange={this.handleInputChange}
          methodValue={methodValue}
          url={urlValue}
          json={jsonValue}
        />
        <HistoryList />
        <JsonViewer srcJson={response} />
      </>
    );
  }
}

import React, { Component } from 'react';
import Form from '../components/controls/Form';
import Header from '../components/app/Header';
import { makeRequest } from '../services/apiUtils';
import HistoryList from '../components/history/HistoryList';
import Display from '../components/res-display/Display';

export default class RestellaContainer extends Component {
  state = {
    loading: false,
    methodValue: '',
    urlValue: '',
    jsonValue: '',
    history: [],
    response: [],
  };

  handleFormSubmit = async (e) => {
    e.preventDefault();

    const { methodValue, urlValue, jsonValue } = this.state;
    let response;

    this.setState({ loading: true });

    try {
      response = await makeRequest(methodValue, urlValue, jsonValue);
      console.log(response);
    } catch (error) {
      response = `Oh no! Something went wrong: ${error.message}`;
    }

    this.setState({
      loading: false,
      response,
    });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { urlValue, jsonValue, response, methodValue, history } = this.state;
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
        <HistoryList history={history} />
        <Display srcJson={response} />
      </>
    );
  }
}

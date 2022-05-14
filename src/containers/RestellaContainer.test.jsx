import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RestellaContainer from './RestellaContainer';

describe('RestellaContainer component testing', () => {
  afterEach(() => cleanup());

  it('should render the RestellaComponent main page', () => {
    render(<RestellaContainer />);

    /* Checking for page title */
    screen.getByText('restella');

    /* Checking for page sections */
    screen.getByRole('region', { name: 'request-history' });
    screen.getByRole('region', { name: 'request-form' });
    screen.getByRole('region', { name: 'results-display' });
  });
});

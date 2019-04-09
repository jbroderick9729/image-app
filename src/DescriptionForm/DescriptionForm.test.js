import React from 'react';
import ReactDOM from 'react-dom';
import DescriptionForm from './DescriptionForm';

describe('DescriptionForm', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DescriptionForm />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})

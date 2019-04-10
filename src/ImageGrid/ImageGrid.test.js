import React from 'react';
import ReactDOM from 'react-dom';
import ImageGrid from './ImageGrid';

describe('ImageGrid', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ImageGrid />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})

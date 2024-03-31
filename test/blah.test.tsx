import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Paginate } from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Paginate totalPages={10} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

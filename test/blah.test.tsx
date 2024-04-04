import React from 'react';
import renderer from 'react-test-renderer';
import { Paginate } from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const component = renderer.create(<Paginate totalPages={100} />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders with custom component', () => {
    const component = renderer.create(
      <Paginate totalPages={100} pageSize={20} />
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});

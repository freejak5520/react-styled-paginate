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
      <Paginate
        page={4}
        totalPages={10}
        containerComponent={({ children }) => (
          <div style={{ display: 'flex', justifyContent: 'start', gap: '4px' }}>
            {children}
          </div>
        )}
        pageButtonComponent={({ children, active, ...props }) => (
          <div
            {...props}
            style={{
              backgroundColor: active ? 'blue' : 'white',
              color: active ? 'white' : 'black',
              cursor: 'pointer',
              padding: '10px',
              border: '1px solid black',
              borderRadius: '5px',
            }}
          >
            {children}
          </div>
        )}
      />
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});

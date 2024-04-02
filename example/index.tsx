import * as React from 'react';
import 'react-app-polyfill/ie11';
import * as ReactDOM from 'react-dom';
import { Paginate } from '../.';

const App = () => {
  const [page, setPage] = React.useState(1);

  return (
    <div>
      <h2>Default</h2>
      <Paginate page={page} totalPages={10} onChange={setPage} />

      <h2>Custom Components</h2>
      <Paginate
        page={page}
        totalPages={10}
        onChange={setPage}
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
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

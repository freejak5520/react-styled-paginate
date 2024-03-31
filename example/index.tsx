import * as React from 'react';
import 'react-app-polyfill/ie11';
import * as ReactDOM from 'react-dom';
import { Paginate } from '../.';

const App = () => {
  const [page, setPage] = React.useState(1);

  return (
    <div>
      <Paginate page={page} totalPages={10} onChange={setPage} />
      <Paginate
        page={page}
        totalPages={10}
        onChange={setPage}
        containerComponent={({ children }) => (
          <div style={{ display: 'flex', backgroundColor: 'red' }}>
            {children}
          </div>
        )}
        pageButtonComponent={({ children, active, ...props }) => (
          <button
            {...props}
            style={{
              backgroundColor: active ? 'blue' : 'gray',
              color: active ? 'white' : 'black',
            }}
          >
            {children}
          </button>
        )}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

import * as React from 'react';
import 'react-app-polyfill/ie11';
import * as ReactDOM from 'react-dom';
import { Paginate } from '../.';

const App = () => {
  const [page, setPage] = React.useState(1);
  return (
    <div>
      <Paginate page={page} totalPages={10} onChange={setPage} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

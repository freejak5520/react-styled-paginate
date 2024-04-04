# Styled Paginate

## Install

## Usage

```tsx
// ...
import { Paginate } from '@jakelee/styled-paginate';

const Page = () => {
  const [page, setPage] = useState(1);

  return (
    <>
      <h2>Default</h2>
      <Paginate page={page} totalPages={10} onChange={setPage} />

      <h2>Custom Component</h2>
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
    </>
  );
};

export default Page;
```

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

      <Paginate currentPage={page} total={10} onClickPage={setPage} />

      <h2>Custom Component</h2>

      <Paginate
        currentPage={page}
        total={10}
        onClickPage={setPage}
        options={{
          containerComponent: ({ children }) => {
            return (
              <div
                style={{ display: 'flex', justifyContent: 'start', gap: '4px' }}
              >
                {children}
              </div>
            );
          },
          pageButtonComponent: ({ children, active, ...props }) => {
            return (
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
            );
          },
        }}
      />
    </>
  );
};

export default Page;
```

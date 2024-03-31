# styled-paginate

## Installation

```
#
```

## Usage

```tsx
import { Paginate } from 'styled-paginate';

const App = () => {
  return (
    <div>
      {/* s */}
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
```

## Props

#

| Name                | Type                                                                | Description |
| :------------------ | :------------------------------------------------------------------ | :---------- |
| page                | number                                                              |             |
| totalPages          | number                                                              |             |
| onChange            | (page: number) => void                                              |             |
| containerComponent  | React.ComponentType<{ children: React.ReactNode }>                  |             |
| pageButtonComponent | React.ComponentType<{ children: React.ReactNode; active: boolean }> |             |
| breakComponent      | React.ComponentType<{ children: React.ReactNode }>                  |             |
| previousComponent   | React.ComponentType<{ children: React.ReactNode }>                  |             |
| nextComponent       | React.ComponentType<{ children: React.ReactNode }>                  |             |

# Styled Paginate

기존 페이지네이션 컴포넌트 라이브러리를 사용하면 스타일을 적용할 때 css, className을 이용하거나 라이브러리에서 제공하는 커스터마이징 방식을 따라야 하는 불편함이 있었습니다.

이에 사용자가 직접 커스터마이징한 컴포넌트를 전달하여 페이지네이션을 생성해주는 라이브러리를 구현했습니다.

## Install

준비 중입니다.

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

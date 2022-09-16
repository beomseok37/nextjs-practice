# nextjs-practice

practice Next.js

# mytodolist

- useReducer와 useContext를 사용해 todolist를 만들어봄
- 라우팅이 한 페이지, 컴포넌트 당 2번씩 되는 문제가 생김,,,
- -> React 버전18부터 dev모드일 경우 컴포넌트가 두 번씩 그려지는 문제가 생김. deploy 모드일 경우일 경우에는 상관없으므로 신경쓰지 않아도 된다.
- dispatch를 통한 상태변화가 제대로 되고 있지 않다. (상태변화는 되나 컴포넌트에 적용되지는 않는다.) -> reducer함수에서 상태변화를 push->concat으로 바꾸니 상태변화가 되도록 수정됨

**-> Next 및 frontend 관련 공부 자료는 [beomseok_dev](https://github.com/beomseok37/dev)로 이전했습니다.**

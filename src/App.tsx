import { Provider } from 'react-redux';
import { VFC } from 'react';
import Counter from './counter';
import PostList from './post_list';
import store from './store'

const App: VFC = () => {
  return (
    <Provider store={store}>
      <Counter/>
      <PostList/>
    </Provider>
  );
}

export default App;

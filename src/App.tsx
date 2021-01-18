import { Provider } from 'react-redux';
import { VFC } from 'react';
import Counter from './counter';
import PostList from './post_list';
import SlideDown from './slide_down';
import store from './store'

const App: VFC = () => {
  return (
    <Provider store={store}>
      <Counter/>
      <PostList/>
      <SlideDown/>
    </Provider>
  );
}

export default App;

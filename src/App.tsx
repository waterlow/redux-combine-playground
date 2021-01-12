import { Provider } from 'react-redux';
import { VFC } from 'react';
import Counter from './counter';
import store from './store'

const App: VFC = () => {
  return (
    <Provider store={store}>
      <Counter/>
    </Provider>
  );
}

export default App;

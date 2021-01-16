import { VFC } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './store/counter/actions'

const Counter: VFC = () => {
  const count = useSelector(store => store.counter.num)
  const count2 = useSelector(store => store.counterTwo.numTwo)
  const dispatch = useDispatch();
  return (
    <>
      <div>
        {`count:${count}`}
      </div>
      <button onClick={() => { dispatch(increment()) }}>+</button>
      <br/>
      <button onClick={() => { dispatch(decrement()) }}>-</button>
      <div>
        {`count2:${count2}`}
      </div>
      <button onClick={() => { dispatch(increment()) }}>+</button>
      <br/>
      <button onClick={() => { dispatch(decrement()) }}>-</button>
    </>
  );
}

export default Counter

import { VFC } from 'react';
import { useSelector, useDispatch } from 'react-redux'

const Counter: VFC = () => {
  const count = useSelector(store => store.counter.num)
  const count2 = useSelector(store => store.counterTwo.numTwo)
  const dispatch = useDispatch();
  return (
    <>
      <div>
        {`count:${count}`}
      </div>
      <button onClick={() => { dispatch({type: "increment"}) }}>+</button>
      <br/>
      <button onClick={() => { dispatch({type: "decrement"}) }}>-</button>
      <div>
        {`count2:${count2}`}
      </div>
      <button onClick={() => { dispatch({type: "increment"}) }}>+</button>
      <br/>
      <button onClick={() => { dispatch({type: "decrement"}) }}>-</button>
    </>
  );
}

export default Counter

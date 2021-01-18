import { VFC } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './store/counter/actions'
import { plusThree,
minusThree,
jump,
showMessage } from './store/counter_three/actions'

const Counter: VFC = () => {
  const count = useSelector(store => store.counter.num)
  const count2 = useSelector(store => store.counterTwo.numTwo)
  const count3 = useSelector(store => store.counterThree.count)
  const message = useSelector(store => store.counterThree.message)
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

      <div>
        {`count3:${count3}`}
        </div>
      <div>
        {`message:${message}`}
      </div>
      <button onClick={() => { dispatch(plusThree()) }}>+</button>
      <br/>
      <button onClick={() => { dispatch(minusThree()) }}>-</button>
      <br/>
      <button onClick={() => { dispatch(jump({count: 100})) }}>jump to 100</button>
      <br/>
      <button onClick={() => { dispatch(showMessage({message: 'hello'})) }}>hello</button>
    </>
  );
}

export default Counter

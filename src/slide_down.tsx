import { useState, VFC } from 'react';

const SlideDown: VFC = () => {
  const [visibility, setVisibility] = useState(false)
  return(
    <>
      <button onClick={() => { setVisibility(true) }}>表示</button>
      <div className={`menu${visibility ? ' menu-show' : ''}`}>
        メニュー
      </div>
    </>
  )
}

export default SlideDown

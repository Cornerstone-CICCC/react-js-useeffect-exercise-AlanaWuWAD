import { useState, useEffect,useRef } from "react";

const App =()=>{

const [message, setMessage] = useState<string>('hello from react')
const handleMessage = ()=>{
  setMessage('change message')
}
useEffect(()=>{
  console.log(message)
},[message])

const [like, setLike] = useState<number>(1)
const isFirstRender = useRef(true); 
const handleLike = ()=>{
  setLike(prevLike => prevLike + 1)
}
useEffect(()=>{
  if (isFirstRender.current){
    isFirstRender.current = false
    return;
  }
  alert(`Like updated to ${like}`)
},[like])

const [color, setColor] = useState<string>('red')
const handleColor = ()=>{
  if (color === 'red') {
    setColor('blue')
  } else {
    setColor ('red')
  }
}

  return (
    <div>
      <h2>Message Logger </h2>
      <h2>{message}</h2>
      <button onClick={handleMessage}>Send Message</button>
  
      <h2>Like Counter</h2>
      <button onClick={handleLike}>Like</button>
  
      <h2>Color Box</h2>
      <button onClick={handleColor}>Change Color</button>
      <div style={{ width: 100, height: 100, color:color }}>Color Box</div>
    </div>
  );
}
export default App;
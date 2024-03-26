// import React, { useReducer } from "react";

// let initialstate = {count:0}
// let reducer=(state, action) =>{
//   switch(action.type){
//     case 'increment':
//       return {count:state.count+1}
//     case 'decrement':
//       return {count:state.count-1}
//     default:
//       return 'no'
//   }
// }

// const App=()=> {
//   let [state,dispatch] = useReducer(reducer,initialstate);
//   return(
//     <>
//     <h1>Count:{state.count}</h1>
//     <button onClick={()=>{dispatch({type:'increment'})}}>+</button>
//     <button onClick={()=>{dispatch({type:'decrement'})}}>-</button>
//     </>
//   )
// }
// export default App;

import React,{useReducer} from "react";

const initialstate={count:0}

const reducer=(state,action)=>{
  switch(action.type){
    case 'incre':
      return {count:state.count+1}
    case 'decre':
      return {count:state.count-1}
    default:
      return 'nothing'
  }
}

const App=()=>{
  let [state,dispatch] = useReducer(reducer,initialstate);
  return (
    <>
    <h2>value{state.count}</h2>
    <button onClick={()=>{dispatch({type:'incre'})}}>+</button>
    <button onClick={()=>{dispatch({type:'decre'})}}>-</button>
    </>
  )
}
export default App;
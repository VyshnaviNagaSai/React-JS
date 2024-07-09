import React,{useState} from 'react'
function Sample() {
    const[first,setFirst]=useState(0);
    const[second,setSecond]=useState(0);
    let[result,setResult]=useState(0);
    const handleAdd=()=>{
        result=first+second
        setResult(result)
        console.log(result)
    }
    const handleSub=()=>{
        result=first-second
        setResult(result)
        console.log(result)
    }
    const handleMul=()=>{
        result=first*second
        setResult(result)
        console.log(result)
    }
    const handleDiv=()=>{
        result=first/second
        setResult(result)
        console.log(result)
    }
  return (
    <div className='calc'>
        <h1>Calculator</h1>
        <input type='text' onChange={(e)=>setFirst(parseInt(e.target.value))} /><br></br>
        <input type='text' onChange={(e)=>setSecond(parseInt(e.target.value))} /><br></br>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleSub}>Sub</button>
        <br></br>
        <button onClick={handleMul}>Mul</button>
        <button onClick={handleDiv}>Div</button>
        <p>{result}</p>
    </div>
  )
}

export default Sample

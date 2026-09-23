import React, { useEffect, useState } from 'react'

const UseEffect = () => {

    useEffect( ()=> {
        console.log("hello world")
    },[])

    // syntax 
    // useEffect( fn, []=> dependency array)

    const [number, setNumber] = useState(0);

    const increaseNumber = () => {
        setNumber(number + 1)
    }

    useEffect( ()=> {
      console.log("useeffect triggered")  
    }, [number])


    useEffect(()=>{
        console.log("type 3 triggered")
    })


  return (
    <>

    <p>count:{number}</p>
    <button onClick={increaseNumber}>+</button>



    </>
  )
}

export default UseEffect
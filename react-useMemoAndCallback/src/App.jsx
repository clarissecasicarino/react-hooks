import { useState, useMemo, useCallback } from 'react'
import './App.css'

//this is a Function component that accepts a property of list
function SortedList({ list, sortFunc}) {
  console.log("Sortedlist render");
  
  const sortedList = useMemo(() => {
    console.log("Running sort"); 
    return [...list].sort();
  }, [list, sortFunc]);

  return(
    <div>
      {sortedList.join(", ")}
    </div>
  )
}

function App() {
  const [numbers] = useState([10, 20, 30]);

  // useMemo -> is kind of like useCalculatedValue and takes an array as dependency
    // you use useMemo when you have an expensive calculation to do
    // it results in an object/array
  const total = useMemo(() => 
    numbers.reduce((acc, number) => acc + number, 0),
    [numbers]
  );

  const [names] = useState(["John", "Paul", "George", "Ringo"])

  // const sortedNames = useMemo(() => [...names].sort(), [names]);

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  // const countTotal = useMemo(() => 
  //   count1 + count2, 
  // [count1, count2])

  const countTotal = count1 + count2;

  /* 
    1. You should use useCallback if the callback you're creating is going into a nested component.
    2. You can use useCallback is you are creating a custom hook.
  */
  const sortFunc = useCallback((a, b) => a.localeCompare(b) * -1, []);

  return (
    <>
      <div> Total: {total} </div>
      <div> Names: {names.join(", ")} </div>
      <SortedList list={names} sortFunc={sortFunc}/>
      <button onClick={() => setCount1(count1 + 1)}> Count1: {count1}</button>
      <button onClick={() => setCount2(count2 + 1)}> Count2: {count2}</button>
      <div>Total: {countTotal}</div>
    </>
  )
}

export default App

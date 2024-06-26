import { useState } from "react";

type ChildProps = {
  handleClick: () => void;
};

const Child = (props: ChildProps) => {
  console.log("render Child");
  return <button onClick={props.handleClick}>Child</button>;
};

export default function App() {
  console.log("render App");
  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log("click");
  };

  return (
    <>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment count</button>
      <Child handleClick={handleClick} />
    </>
  );
}

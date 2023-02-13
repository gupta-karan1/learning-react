import { useState } from "react";

const Content = () => {
  const [name, setName] = useState("Karan");

  const [count, setCount] = useState(0);

  const handleNameChange = () => {
    const names = ["John", "Paul", "George", "Ringo"];
    const int = Math.floor(Math.random() * names.length);
    setName(names[int]);
  };

  const handleClick = () => {
    setCount(count + 1);
    console.log(count);
  };
  const handleClick2 = (name) => {
    console.log(`${name} was clicked`);
  };
  const handleClick3 = (e) => {
    console.log(e.target.innerText);
  };

  return (
    <main>
      <p onDoubleClick={handleClick}>Hello {name}!</p>
      <button onClick={handleNameChange}>Change Name</button>
      <button onClick={handleClick}>Increment</button>
      <button onClick={(e) => handleClick3(e)}>Click Here Next</button>
    </main>
  );
};

export default Content;

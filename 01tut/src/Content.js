const Content = () => {
  const handleNameChange = () => {
    const names = ["John", "Paul", "George", "Ringo"];
    const int = Math.floor(Math.random() * names.length);
    return names[int];
  };

  const handleClick = () => {
    console.log("You clicked");
  };
  const handleClick2 = (name) => {
    console.log(`${name} was clicked`);
  };
  const handleClick3 = (e) => {
    console.log(e.target.innerText);
  };

  return (
    <main>
      <p onDoubleClick={handleClick}>Hello {handleNameChange()}!</p>
      <button onClick={handleClick}>Click Here</button>
      <button onClick={() => handleClick2("Karan")}>Click Here</button>
      <button onClick={(e) => handleClick3(e)}>Click Here Next</button>
    </main>
  );
};

export default Content;

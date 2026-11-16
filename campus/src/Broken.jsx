function Card() {
  const name = "Asfia Fahad";
  return (
    <div className="card">
      <b>{name}</b>
    </div>
  );
}

function Broken() {
  return (
    <div>
        <h1>Campus Card</h1>
        <Card /> 
    </div>
  );
}

export default Broken;
// The image was not saved in the folder
// JSX expression must have one parent element.
// Broken() returns <h1>Campus Card</h1> and <Card/> side-by-side without a single wrapper tag.
// <div class="card"> uses class instead of className.

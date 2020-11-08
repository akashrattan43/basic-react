import "./App.css";
// import Tweet from './Tweet'
function App() {
  const sayHelloHandler = () => {
    console.log(`Hello there`)
  }
  return (
    <div>
      <button onClick={sayHelloHandler}>Click</button>
    </div>
  );
}

export default App;

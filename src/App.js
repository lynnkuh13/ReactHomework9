import './App.css';
import Counter from './Counter';
import Form from './Form';

function App() {

  return (
    <div className="counter">
      <Counter startingCount={0} />
      <Form />
    </div>
  );
}

export default App;

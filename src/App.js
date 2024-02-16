import './App.css';
import Counter from './Counter';

function App() {
  return (
    <div className="App">
      <Counter cname={'india'} start={200} incst={5}/>
      <Counter cname={'Australia'} start={5} incst={12}/>
   
    </div>
  );
}

export default App;

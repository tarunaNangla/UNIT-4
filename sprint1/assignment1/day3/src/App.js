import logo from './logo.svg';
import './App.css';
import Todo from './problem2/Todo';
import Payment from './problem3/payment'
import AppleData from './problem3/othercomponent'
function App() {
  return (
    <div className="App">
     {/* < Todo/> */}

     <Payment/>
     <Payment/>


     <AppleData/>
    </div>
  );
}

export default App;

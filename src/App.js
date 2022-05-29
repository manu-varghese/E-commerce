import './App.css';
import axios from 'axios'

function App() {
  return (
    <div className="App">
      <button onClick={()=>{
        axios.get('https://flask-item-rest-api.herokuapp.com/items/array').then((response)=>{
          console.log(response.data)
        })
      }}>Click</button>
    </div>
  );
}

export default App;

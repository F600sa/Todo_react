import './App.css';
import {Component} from 'react';

class App extends Component{

add = ()=>{
  let taskjs = document.getElementById("id");
  const ul = document.getElementById("list");
            const li = document.createElement("li");
            li.appendChild(document.createTextNode(taskjs.value));
            ul.appendChild(li);
            

}
  render(){
    return(
      <div id="app">
        <div className='container' >
        
      <h2 >ToDo Task app</h2>
      <input id="id" type="text"/>
      <button id="add" onClick={this.add} type="button">Add</button>

      
     <ul id="list"></ul>
    
     </div>
      </div>
    )
  }
}


export default App;
import logo from './logo.svg';
import './App.css';

function App() {
  const nameList=['Mikat','Syed','Gaziul','Haque']
  var person = {
    name:"Mikat Syed",
    profession: "(web Developer)"
  }
  var style ={
    color:'red',
    backgroundColor:'cyan'
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit Done <code>src/App.js</code> and save to reload.
        </p>
        <h2 className="" style={style}>My First React Paragraph</h2>
        <p>The value of the equation is : {(5+2+297)*75}</p>
        <h4 style={{color:'green',
    backgroundColor:'black  '}}>My Idendity : {person.name +" " + person.profession}</h4
        >
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Person name={nameList[0 ]}></Person>
        <Person name="Brenden Eich"></Person>
        <Person name="Jordan Walke"></Person>
        
      </header>
    </div>
  );
}

function Person(props){
  const styleDiv={
    border:'2px solid red',
    margin:'10px',
  color:'cyan'
  }
  return(
  <div style={styleDiv}>
     <h3>Name: {props.name}</h3>
  <p>Full-Stack-Webdeveloper</p>
 </div>     
  )
}

export default App;

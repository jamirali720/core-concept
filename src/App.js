import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const products = [
    {name : 'laptop', price : '5000', warranty :'2 Years'},
    {name : 'computer', price : '5500', warranty: '3 years'},
    {name : 'mobile', price : '7500', warranty: '6 Years' }
  ]
// const ItemsName = products.map(product => product.name)

 
  var person = {
    name :"jamir ali",
    job : "sarkar"
  }
  var student = {
    firstName : 'masud ',
    lastName : 'rana', 
    occupation : 'foreigner',
    phone : '01343352'
  }
  var style = {
    color :'green',
    backgroundColor : 'tomato',
  }
  var names = ['Jamir Ali', 'Akramul Islam', 'Ashraful Islam',  'Bashirul Islam', 'Nasir uddin', 'Adam ali', 'Ibrahim ', 'Elias nabi']
  
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit done <code>src/App.js</code> and save to reload.
    //     </p>
    //     <h1 style={{backgroundColor : 'green', color : 'red'}}>I am ready to start React </h1>
    //   <p style={style} >This is my first React paragraph</p>
    //   <p>This sum is : {(20*5)*4}</p>
    //   <p>{person.name + ' '+ person.job} </p>
    //   <h3> { student.firstName + ' '  + student.lastName +', Phone :' + student.phone}</h3>
     
    //  <Person name = 'jamir ali' job= "gov" phone= "233654852"></Person>
    //   <Person name = 'kamal uddin' job= "Private" phone= "2335436952"></Person>
    //   <Person name = 'sarafat ali' job= "Ngo" phone= "2301253352"></Person> 
     
    //   <Students name={names[0]} roll ="1" address ="kadamtaly"></Students>
    //   <Students name={names[1]} roll ="2" address ="kadamtaly"></Students>
    //   <Students name={names[2]} roll ="3" address ="kadamtaly"></Students>
    //   <Students name={names[3]} roll ="4" address ="kadamtaly"></Students>
    //  <Product product = {products[0]}></Product>
    //  <Product product = {products[1]}></Product>
    //  <Product product = {products[2]}></Product>

    //   </header>
    // </div>

        //  <div>                  
        //     <ul>
        //       {
        //         names.map(name => <li>{name}</li>)
        //       }  
        //       <br/>    
        //       {
        //          products.map(product => 
        //          <div><li>{product.name}</li>
        //          <li>{product.price}</li>
        //          </div>)
               
        //       }
        //       {
        //         products.map(pd => <Product product = {pd}></Product>)
        //       }
        //     </ul>
        // </div>
        // <Counter></Counter>
        // <Number></Number>
        // <Users></Users>
        <CollectInfo></CollectInfo>


  );
}
// this is second fetch 

function  CollectInfo() {
  const [countries, setUsers] = useState([]);
  useEffect(() =>{
    fetch ('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then (data => setUsers(data))
    
  }, [])
  return(
    <div>
      <h2> Country Name : {countries.length}</h2>
     <ul>
       {
         console.log(countries)
       }
       {
         countries.map(country => <div>
           <h1>{country.name}</h1>
           <h4>{country.capital}</h4>
         </div>)
       }
     </ul>
    </div>
  )
}


//This is first fetch

// function Users () {
//   const [users,  setUsers] = useState([]);
//     useEffect(() => {
//       fetch('https://jsonplaceholder.typicode.com/users')
//       .then(res => res.json())
//       .then(data => setUsers(data))
    
//     }, [])
//     return(
//       <div>
//         <h3>Dynamical Users : {users.length}</h3>
//         <ul>
//           {console.log(users)}
//           {
//             users.map(user => <div>
//               <h3>{user.name}</h3>
//               <h4>{user.email}</h4>
//               <h4>{user.phone}</h4>
//               <h4>{user.address.city}</h4>
//             </div>)
//           }
//         </ul>
//       </div>
//     )
// } 

// useState 3

// function Number (){
//   const [count, setCount] = useState(0);
//   return (
//    <div>
//       <h1>Count : {count}</h1>
//     <button></button>
//     <button onClick={ () => setCount (count + 1) }>Increase</button>
//     <button onClick={() =>  setCount (count - 1) }>Decrease</button>
//    </div>
//   )
// }



// use state 2

// function Counter () {
//   const [count, setCount] = useState(0);
  
//   return(
//     <div>
//       <h1>Count : { count}</h1>
//       <button onClick={() => setCount(count + 1)}>Decrease </button>
//       <button  onClick={() => setCount (count +1)}>Increase </button>
//     </div>
//   )
// }

// use State 1 

// function Counter (){
//   const [count, setCount] = useState(10);
//   const handlerIncrease = () => {
//     const newCount = count +1;
//     setCount (newCount)
//   }
//   return(
//     <div>
//       <h1>Count : {count} </h1>
   
//       <button onClick= {handlerIncrease}>Click me</button>
//     </div>
//   )
// }

// function Product (props){
//   const pDesign = {
//     width: "300px",
//     height: '250px',
//     border : "2px solid tomato",
//     borderRadius : '10px',
//     margin : '20px',
//     backgroundColor :' #005533'
//   } 
  
// const {name, price, warranty} = props.product

//     return (

//       <div className="productNames" style= {pDesign} >
//         <h1>{name}</h1>
//         <h2>{price}</h2>
//         <h2>{ warranty}</h2>
//       </div>
//     )
// }
// function Person (props) {
//   const paraStyle = {
//     width: '400px',                   // firstly checked  in  index.css file 
//     height:' 200px',                  //this is second step to apply css property
//     border: '2px solid #c1c1c1',        
//     margin: '40px',
//     padding: '30px',
//     borderRadius : '20px',
//     backgroundColor : 'violet'
      
//   }
//   return (
//     <div className="main" style ={paraStyle}>
//         <h4>Ya Rasulallah  Ya Habiballah </h4>
//         <h5>{props.name}</h5>
//         <h5>{props.job}</h5>
//         <h5>{props.phone}</h5>
//         <p>This is my first Logo</p>
//     </div>
//   )
// }


// function Students (props) {
//   return (
//     <div className="SInfo">
//       <h2>Student Name : {props.name}</h2>
//       <h3>Student Roll : {props.roll}</h3>
//       <h4>Student Address : {props.address}</h4>
//     </div>
//   )
// }


export default App;

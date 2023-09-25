import React from "react";

// function App(){
    
// function increase(){
//     count++;
//     console.log(count);
//     ReactDOM.render(
//       <div className='container'>
//         <h1>{count}</h1>
//         <button onClick={increase} >+</button>
//       </div>,
//       document.getElementById("root")
//     )
//   }
  
  
//   return(
//     <div className='container'>
//       <h1>{count}</h1>
//       <button onClick={increase} >+</button>
//     </div>
//   );
// }

// export default App;

// import React from "react";


function App(){
   
    const [count, setCount] = React.useState(0);


    function increase(){
        setCount(count + 1);
        //console.log(count);
    
    }

    function subs(){
        setCount(count - 1);
        //console.log(count);
    
    }
  
  
  return (
    <div className='container'>
      <h1>{count}</h1>
      <button onClick={increase} >+</button>
      {/* //<button onClick={subs} >-</button> */}
    </div>
  );
}

export default App;
import React, { useState } from "react";

function App(){

    const [name, setName] = useState("");
    // --> 7
    const [nameHeading, setNameHeading] = useState();

    //event -> 3
  function handleChange(event){
    // 2
    //console.log("Changed");

    //4
    // console.log(event.target.value);
    // console.log(event.target.placeholder);
    // console.log(event.target.type);

    //--> 5
    //console.log(event.target.value);
    setName(event.target.value);

  }

  // --> 8
  //11-> passing **event** parameter
  function handleClick(event){
    setNameHeading(name);


    //12 -> this method basically prevents the default next of the event 
    // which in our case coming from the form's onClick here
    event.preventDefault();
  }

    return(
        <div className="container">
            {/* <h1>Hello {nam}</h1> */}
            {/* ->9 */}
            <h1>Hello {nameHeading}</h1>

            {/* --> adding <form></form> -> 10 */}
            <form>
            {/* 1 */}
            <input onChange= {handleChange} type="text" placeholder="What's your name" />
            {/* 6 */}
            {/* 10 added type inside button */}
            <button type= "submit" onClick={handleClick}>Submit</button>
            </form>
        </div>
    )
}

export default App;


//this code will also work the same above code is working 

// <form onSubmit={handleClick}>
//             {/* 1 */}
//             <input onChange= {handleChange} type="text" placeholder="What's your name" />
//             {/* 6 */}
//             {/* 10 added type inside button */}
//             <button type= "submit" >Submit</button>
//             </form>
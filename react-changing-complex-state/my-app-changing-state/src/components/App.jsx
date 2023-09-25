import React, { useState } from "react";

function App() {
const [fullName, setfullName] = useState({
    fName: "",
    lName: ""
})

function handleChange(event){

// optimize 2 --> more prefferable -> by destructuring
const {value, name} = event.target;

setfullName(preValue => {
    if(name === "f_Name"){
        return {
            fName: value,
            lName: preValue.lName
        }
    }else if(name === "l_Name"){
        return{
            fName: preValue.fName,
            lName: value
        }
    }
});

//end of optimize 2

    //use this with optimize 1
// const newValue = event.target.value;
// const inputName = event.target.name;

// console.log(newValue);
// console.log(inputName);

//here fName will delete the lName and lName will delete the fName
//  if(inputName === "f_Name"){
//     setfullName({fName: newValue});
//  }else if(inputName === "l_Name"){
//     setfullName({lName: newValue});
//  }

// optimize  -->>>  1//
// setfullName(preValue => {
//     if(inputName === "f_Name"){
//         return {
//             fName: newValue,
//             lName: preValue.lName
//         }
//     }else if(inputName === "l_Name"){
//         return{
//             fName: preValue.fName,
//             lName: newValue
//         }
//     }
// })
}

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          name="f_Name"
          onChange={handleChange}
          type="text"
          placeholder="First Name"
          value={fullName.fName}
        />
        <input
          name="l_Name"
          onChange={handleChange}
          type="text"
          placeholder="Last Name"
          value={fullName.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;

// ************ Above code is optimized ****************

// import React, { useState } from "react";

// function App(){

// const [changeFName, setFName] = useState("");
// const [changeLName, setLName] = useState("");

// function handleFChange(event){
//    setFName(event.target.value);
//    //event.preventDefault();
// }

// function handleLChange(event){
//     setLName(event.target.value);
//     //event.preventDefault();
//  }

//     return(
//         <div className="container">
//             <h1>Hello {changeFName} {changeLName}</h1>
//             <form >
//             <input name = "FName" onChange = {handleFChange} type="text" placeholder="First Name" />
//             <input name = "LName" onChange = {handleLChange} type="text" placeholder="Last Name" />
//             <button >Submit</button>
//             </form>
//         </div>
//     );
// }

// export default App;

import React, { useState } from "react";

function App(){

    const [contact, setContact] = useState({
        fName: "",
        lName: "",
        email: ""
    })

    function handleHeading(event){
      const {value, name} = event.target;

      setContact(preValue => {
        return {
            ...preValue,
            [name]: value
        }

        //above code is a concept of spread operator in Js
        // if(name === "f_Name"){
        //     return{
        //         fName: value,
        //         lName: preValue.lName,
        //         email: preValue.email
        //     }
        // }else if(name === "l_Name"){
        //     return{
        //         fName: preValue.fName,
        //         lName: value,
        //         email: preValue.email
        //     }
        // }
        // else if(name === "E_Mail"){
        //     return{
        //         fName: preValue.fName,
        //         lName: preValue.lName,
        //         email: value
        //     }
        // }
    })
}

return(
    <div className="container">
        <h1>Hello {contact.fName} {contact.lName}</h1>
        <form>
            <input name="f_Name" onChange={handleHeading} type="text" placeholder="First Name" />
            <input name="l_Name" onChange={handleHeading} type="text" placeholder="Last Name" />
            <input name="E_Mail" onChange={handleHeading} type="email" placeholder="Email" />
            <button>Submit</button>
        </form>
    </div>
)
}
export default App;
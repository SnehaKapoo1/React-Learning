// import React from "react";
// import ReactDOM from "react-dom";

// ReactDOM.render(
//     <div>
//         <h1>My Favourite Foods</h1>
//         <ul>
//             <li>Bacon</li>
//             <li>Jamon</li>
//             <li>Noodles</li>
//         </ul>
//     </div>,
//     document.getElementById("root")
// );

//JSX Attributes and Styling (forked)
import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading">My Favourite Foods</h1>
    {/* <ul>
      <li>Bacon</li>
      <li>Jamon</li>
      <li>Noodles</li>
    </ul> */}

    <div>
      <img
        className="food-img"
        alt=""
        src="https://b3067249.smushcdn.com/3067249/wp-content/uploads/2021/09/Chicken-Chow-Mein-1-848x477.jpg?lossy=0&strip=1&webp=1"
      />
      <img
        className="food-img"
        alt=""
        src="https://data.thefeedfeed.com/static/2022/06/16/165541332362ab9a4b21be9.webp"
      />
      <img
        className="food-img"
        alt=""
        src="https://www.saltandlavender.com/wp-content/uploads/2022/07/chicken-and-noodles-1-720x1059.jpg"
      />
      <img src={img} alt="" />
    </div>
  </div>,
  document.getElementById("root")
);

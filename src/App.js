import React from "react";
import LeftOne from "./components/LeftOne";
import RightOne from "./components/RightOne";
import "./components/styles/styles.css"

function App() {
 return (
     <div className="container">
         <div className="left">
             <LeftOne/>
         </div>
         <div className="right">
             <RightOne/>
         </div>
     </div>
 );
}
 export default App;


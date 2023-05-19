
import { useState } from "react";

import Practice from "./practice";
import Login from "./login"
function App() {
  const[isPractice,setIsPractice]=useState(true)
  const isLogin=()=>{
    setIsPractice(false)
  }
  

 
  return (
    <div className="App">
      {isPractice?<Practice isLogin={isLogin} />:(<Login/>)}
    </div>
  );
}

export default App;

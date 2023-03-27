import Bootstrap from "./components/bootstrap";
import FetchData from "./components/FetchData";
import "./App.css"
import { Route, Routes } from "react-router-dom";
/*
function App(){
    return(
       <div>
            <Bootstrap></Bootstrap>
            <FetchData></FetchData>
       </div>
    );
}*/
function App(){
    return <Routes>
        <Route path="/Home" element={Bootstrap}>

        </Route>
    </Routes>
   
    
}
export default App;
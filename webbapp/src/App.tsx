import { useState, useEffect } from "react";
import React from "react";
import Bootstrap from "./components/bootstrap";


function App(){
    const [products, setProducts] = useState([])


    useEffect(() => {
        fetch('http://localhost:5000/products')
        .then(response => response.json())
        .then(res => console.log(res))
    }, [])
    return(
       <div>
          <Bootstrap></Bootstrap>
       </div>
    );
}
export default App;
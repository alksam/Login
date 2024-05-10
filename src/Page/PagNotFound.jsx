import {useNavigate} from "react-router-dom";
import React from 'react';


function PagNotFound () {
    const navigate = useNavigate();
     return(
       <>
        <h1>Page Not Found</h1>
        <button onClick={() => navigate("/")}>Go Home</button>
        
        </>
     )
   }

   export default PagNotFound;


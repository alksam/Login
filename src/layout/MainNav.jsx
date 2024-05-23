import { NavLink } from "react-router-dom";
import styled from 'styled-components';


 

function MainNav () {
    return(
      
  
    
     
       
    
     
      <header>
        
           <li><NavLink to="/home">Home</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/Contact">Contact</NavLink></li>
      <li><NavLink to="/posts">posts</NavLink></li>
<li><NavLink to = "/Products">Products</NavLink></li>
        <li>  <NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/register">Register</NavLink></li>
        <li><NavLink to = "/Calendar">Calender</NavLink></li>
        
        
      </header>
    
    
    )
  }

  export default MainNav;
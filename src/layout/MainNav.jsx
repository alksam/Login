import { NavLink } from "react-router-dom";



 

function MainNav () {
    return(
      
  
    
     
       
    
     
      <header>
        
           <li><NavLink to="/home">Home</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/Contact">Contact</NavLink></li>
      <li><NavLink to="/posts">posts</NavLink></li>
  
        <li>  <NavLink to="/Loginserver ">Login </NavLink></li>
        <li><NavLink to="/register">Register</NavLink></li>
        <li><NavLink to = "/Calendar">Calender</NavLink></li>
        <li><NavLink to = "/CarManager">CarManager</NavLink></li>
       
       


       
        
     
        
        
      </header>
    
    
    )
  }

  export default MainNav;
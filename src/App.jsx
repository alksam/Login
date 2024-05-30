import { BrowserRouter, NavLink, } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useParams ,Navigate} from 'react-router-dom';
import Home from "./Page/Home";
import PagNotFound from "./Page/PagNotFound";
import AppLayout from "./layout/AppLayout";
import Loginserver  from "./Page/Loginserver ";
import Register from "./Page/Register";
import Calendar from "./Page/Calendar";
import Contact from "./Page/Contact";
import About from "./Page/About";
import CarManager from "./Page/CarManager";
import Cart from "./Page/Cart";
import Favorites from "./Page/Favorites";


function Posts () {
  return (
    <>
   
  <h1>Posts</h1>
  <Outlet/>
  
  </>
  )
}

function Post () {
  let params = useParams();
  return(
    <>
    
     <h1>Post: {params.postId}</h1>
     
     </>
  )
}




function App() {

 // const [ isAuthenticated, setIsAuthenticated ] = useState(false);
  //const [user , setUser] = useState({isLoading: false  ,error : null, user: {username:"", roles: []}});
 //<Route element={
   //   <ProtectedRoute isAuthenticated={isAuthenticated}><AppLayout setIsAuthenticated={isAuthenticated} roles={user.user.roles} /></ProtectedRoute>}></Route>
  return (
    <>
    <BrowserRouter>
    <Routes>
     

      <Route element={<AppLayout/>}>
      <Route index element={<Navigate to="Home"/>} />
    <Route path="home" element={<Home/> } />
    <Route path="/About" element={<About/>} />
    <Route path="/Contact" element={<Contact/>} />
    <Route path="posts" element={<Posts/> } >
      <Route index element={<h1>New Posts</h1> } />
      <Route path=":postId" element={<Post/> } />
    </Route>
    <Route path="Loginserver" element={<Loginserver /> } />
    <Route path="Register" element={<Register/> } />
<Route path="*" element={<PagNotFound/> } />
    </Route>
    <Route path="Calendar" element={<Calendar/> } />
    <Route path="CarManager" element={<CarManager/> } />
    <Route path="Cart" element={<Cart/> } />
    <Route path="Favorites" element={<Favorites/> } />

    
    </Routes> 
    </BrowserRouter>
    
    
    
    </>
  )
}

export default App
import { BrowserRouter, NavLink } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useParams,useNavigate ,Navigate} from 'react-router-dom';
import Home from "./Page/Home";
import PagNotFound from "./Page/PagNotFound";
import AppLayout from "./layout/AppLayout";
import Login from "./Page/Login";
import Register from "./Page/Register";






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
    <Route path="/about" element={<h1>About</h1> } />
    <Route path="/contact" element={<h1>Contact</h1> } />
    <Route path="posts" element={<Posts/> } >
      <Route index element={<h1>New Posts</h1> } />
      <Route path=":postId" element={<Post/> } />
    </Route>

    <Route path="Login" element={<Login/> } />
    <Route path="Register" element={<Register/> } />
<Route path="*" element={<PagNotFound/> } />
    </Route>
    </Routes> 
    </BrowserRouter>
    
    
    
    </>
  )
}

export default App
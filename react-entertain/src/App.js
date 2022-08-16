import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route,Link,Navigate} from 'react-router-dom';
import {Register} from './pages/register'
import {SignUp} from './pages/login'
import Home from './pages/home'
import Navbar from './components/navbar'
import {UploadForm} from './pages/upload'
import Musicplayer from './pages/musicpage';
import Card from './components/card';
import Account from './components/account';
import {useSelector,useDispatch} from 'react-redux'
import {getUserDetails} from './redux/userSlice'
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state)=>state.user);
  let email = data.userDetails.email;
  console.log(email)
  console.log(typeof(email))
  let getUserId = localStorage.getItem('id');
   useEffect( ()=> {
    if(!data.userDetails.id && getUserId){
      dispatch(getUserDetails())
    }
   },[])
  
    
  // useEffect(()=>{
  //   console.log(localStorage.getItem("info"))
  //   let ls = JSON.parse(localStorage.getItem("info"));
  //   if(ls){
  //     console.log(ls);
  //     setuserdetails(ls);
  //   }
  // },[])
  return (
    <>
      
    <Router>
      
            <Routes>
             
              <Route path="/sign-up" element={<Register />} />
              <Route exact path="/" element={localStorage.getItem('email') == '' ? <SignUp />: <Navigate to="/account"/>}></Route>
              <Route path="/home" element={localStorage.getItem('email') != '' || email ? <Home /> : <Navigate to="/"/> }/>
              <Route path='/upload' element={localStorage.getItem('email') != '' || email ? <UploadForm /> : <Navigate to="/" />}/>
              <Route path='/music' element={localStorage.getItem('email') != '' || email ? <Musicplayer /> : <Navigate to="/" />}/>
              <Route path='/account' element={localStorage.getItem('email') != '' || email? <Account/> : <Navigate to="/" />}/>
              
            </Routes>
    </Router>
    </>
  );
}

export default App;

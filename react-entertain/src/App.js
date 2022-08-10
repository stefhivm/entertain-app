import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import {Register} from './pages/register'
import {SignUp} from './pages/login'
import {Home} from './pages/home'
import Navbar from './components/navbar'
import {UploadForm} from './pages/upload'
import Musicplayer from './pages/musicpage';
import Card from './components/card';
import Account from './components/account';



function App() {

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
      {/* <usercontext.Provider value={{userdetails,setuserdetails}}> */}
    <Router>
      
            <Routes>
             
              <Route path="/sign-up" element={<Register />} />
              <Route path="/" element={<SignUp />}></Route>
             <Route path="/home" element={<Home />}/>
              <Route path='/upload' element={<UploadForm/>}/>
              <Route path='/music' element={<Musicplayer/>}/>
              <Route path='/card' element={<Card/>}/>
              <Route path='/account' element={<Account/>}/>
              
            </Routes>
          {/* </div>
        </div>
      </div> */}
    </Router>
    {/* </usercontext.Provider> */}
    </>
  );
}

export default App;

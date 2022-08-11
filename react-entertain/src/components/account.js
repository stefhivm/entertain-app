import './../cssfiles/home.css'
import {useNavigate} from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import {setUserDetails} from '../redux/userSlice'


function Account(){

  const navigate=useNavigate(); 

  const dispatch = useDispatch();

  const data = useSelector((state)=>state.user);

  const logout=(e)=>{
    e.preventDefault();
    localStorage.setItem('id','');
    localStorage.setItem('name','');
    localStorage.setItem('email','');
    localStorage.setItem('token','');
    dispatch(setUserDetails( {
        id:'',
        email:'',
        name:'',
        token:''
    }))
} 

    

   
    return(
        
<header>
  <nav class="navbar navbar-expand-lg navbar-dark navbar-absolute bg-transparent shadow-none">
    <div class="container">
      <a class="navbar-brand text-white" href="javascript:;"></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-header-2" aria-controls="navbar-header-2" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbar-header-2">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item">
            <a class="nav-link text-white" href="javascript:;">
              
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="javascript:;">
              
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="javascript:;">
              
            </a>
          </li>
        </ul>

        <ul class="nav navbar-nav">
         
          <li class="nav-item">
            <a class="nav-link text-white" onClick={(e)=>logout(e)}>
              <i class="fa-solid fa-arrow-right-from-bracket"></i> Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="page-header min-vh-100"  loading="lazy">
    <span class="mask bg-gradient-dark opacity-5"></span>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-7 d-flex justify-content-center flex-column">
          <h1 class="text-white mb-4 accountname">Welcome {data.userDetails.name}</h1>
          <p class="text-white opacity-8 lead pe-5 me-5">Entertainment is a sacred pursuit when done well. When done well, it raises the quality of human life. </p>
          <div class="buttons">
            <button type="button" onClick={()=>(navigate('/home'))} class="btn btn-danger mt-4">Get Started</button>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</header>

    )
    
   
}
export default Account;
import './../cssfiles/home.css'
import {useNavigate} from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';

import {getUserDetails} from '../redux/userSlice'

function Account(){

  const navigate=useNavigate(); 

  const dispatch = useDispatch();

  const data = useSelector((state)=>state.user);

    let getUserId = localStorage.getItem('id');

    if(!data.userDetails.id && getUserId){
      dispatch(getUserDetails())
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
          {/* <li class="nav-item">
            <a class="nav-link text-white" href="https://twitter.com/CreativeTim">
              <i class="fab fa-twitter"></i>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white mx-2" href="https://www.facebook.com/CreativeTim">
              <i class="fab fa-facebook"></i>
            </a>
          </li> */}
          <li class="nav-item">
            <a class="nav-link text-white" href="https://www.instagram.com/CreativeTimOfficial">
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
          <p class="text-white opacity-8 lead pe-5 me-5">The time is now for it be okay to be great. People in this world shun people for being nice. </p>
          <div class="buttons">
            <button type="button" onClick={()=>(navigate('/home'))} class="btn btn-danger mt-4">Get Started</button>
            {/* <button type="button" class="btn text-white shadow-none mt-4">Read more</button> */}
          </div>
        </div>
      </div>
    </div>
  </div>
</header>

    )
    
   
}
export default Account;
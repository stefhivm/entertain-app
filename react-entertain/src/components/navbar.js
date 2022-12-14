import './../assets/css/app.css'
import './../assets/css/app.min.css'
import './../cssfiles/register.css';
import avatar from './../assets/images/users/avatar-1.jpg'
import {useNavigate,Link} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux'
import {setUserDetails} from '../redux/userSlice'

function Navbar(){

    const data = useSelector((state)=>state.user);
    const dispatch=useDispatch();
    const navigate=useNavigate();

    const styles={position: 'absolute',
         willChange: 'transform',
          top: 0,
           left: 0,
           transform: 'translate3d(10px, 70px, 0px)'
            }

    const Logout=(e)=>{
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
                     

    return(<>
        
        
        <div class="navbar-custom">
        
                               <ul class="list-unstyled topbar-right-menu float-right mb-0"> 
                      
                              

                            

                              <li class="dropdown notification-list">
                              <div class="dropdown">
  
                          <a class=" dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                          <span class="account-user-avatar"> 
                                        <img src={require("./../assets/images/users/avatar-1.jpg")} alt="user-image" class="rounded-circle mt-2" style={{width:47+'px'}}/>
                                    </span>
                             </a>
                           <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                             <li><Link class="dropdown-item" to="/account"><i class="fa-solid fa-user"></i> My Account</Link></li>
                              <li><a class="dropdown-item" onClick={(e)=>Logout(e)}><i class="fa-solid fa-arrow-right-from-bracket"></i> Logout</a></li>
                             
                               </ul>
                             </div>
                            </li>

                        </ul>
                        <button class="button-menu-mobile open-left disable-btn">
                            <i class="mdi mdi-menu"></i>
                        </button>
                        {/* <div class="app-search">
                            <form>
                                <div class="input-group">
                                    <input type="text" class="form-control" placeholder="Search..."/>
                                    <span class="mdi mdi-magnify"></span>
                                    <div class="input-group-append">
                                        <button class="btn btn-danger" type="submit">Search</button>
                                    </div>
                                </div>
                            </form>
                        </div> */}
                    </div>
    </>)

}

export default Navbar;
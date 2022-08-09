import './../assets/css/app.css'
import './../assets/css/app.min.css'
import './../cssfiles/register.css';
import avatar from './../assets/images/users/avatar-1.jpg'
import {useNavigate} from 'react-router-dom';


function Navbar(){
    const navigate=useNavigate();
    return(<>
        
        
        <div class="navbar-custom">
        
                               <ul class="list-unstyled topbar-right-menu float-right mb-0"> 
                      
                              

                             <li class="dropdown notification-list">
                                
                                    <span class="account-user-avatar"> 
                                        <button className='btn btn-danger mt-2 ml-1' onClick={()=>(navigate('/account'))}><i class="fa-solid fa-user"></i></button>
                                    </span>
                                    
                                
                                <div class="dropdown-menu dropdown-menu-right dropdown-menu-animated topbar-dropdown-menu profile-dropdown" x-placement="bottom-end" style={{position:'absolute', willChange: 'transform', top: 0 +'px', left: 0+'px'}}>
                                    
                                    <div class=" dropdown-header noti-title">
                                        <h6 class="text-overflow m-0">Welcome !</h6>
                                    </div>

                                    
                                    <a href="javascript:void(0);" class="dropdown-item notify-item">
                                        <i class="mdi mdi-account-circle mr-1"></i>
                                        <span>My Account</span>
                                    </a>

                        
                                    <a href="javascript:void(0);" class="dropdown-item notify-item">
                                        <i class="mdi mdi-account-edit mr-1"></i>
                                        <span>Settings</span>
                                    </a>

                                    
                                    <a href="javascript:void(0);" class="dropdown-item notify-item">
                                        <i class="mdi mdi-lifebuoy mr-1"></i>
                                        <span>Support</span>
                                    </a>

                            
                                    <a href="javascript:void(0);" class="dropdown-item notify-item">
                                        <i class="mdi mdi-lock-outline mr-1"></i>
                                        <span>Lock Screen</span>
                                    </a>

                                    
                                    <a href="javascript:void(0);" class="dropdown-item notify-item">
                                        <i class="mdi mdi-logout mr-1"></i>
                                        <span>Logout</span>
                                    </a>

                                </div>
                            </li>

                        </ul>
                        <button class="button-menu-mobile open-left disable-btn">
                            <i class="mdi mdi-menu"></i>
                        </button>
                        <div class="app-search">
                            <form>
                                <div class="input-group">
                                    <input type="text" class="form-control" placeholder="Search..."/>
                                    <span class="mdi mdi-magnify"></span>
                                    <div class="input-group-append">
                                        <button class="btn btn-danger" type="submit">Search</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
    </>)

}

export default Navbar;
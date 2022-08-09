import './../cssfiles/home.css'
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
function Sidebar(){

    const navigate=useNavigate();
    return(<>
    
    <div class="left-side-menu bg-color">
        <div className='logos mt-2 '>Myamuse</div>

                <div class="slimscroll-menu" id="left-side-menu-container">

                
                    <a href="index.html" class="logo text-center mt-5">
                        {/* <span class="logo-lg">
                            <img src="./assets/images/logo.png" alt="" height="16"/>
                        </span> */}
                        <span class="logo-sm">
                            <img src="assets/images/logo_sm.png" alt="" height="16"/>
                        </span>
                    </a>

                    
                    <ul class="metismenu side-nav">

                        

                        <li class="side-nav-item">
                            <a href="javascript: void(0);" class="side-nav-link">
                                <i class="dripicons-meter"></i>
                            
                                <span> Categories </span>
                            </a>
                            <ul class="side-nav-second-level" aria-expanded="false">
                                <li>
                                    <a href="index.html"><i class="fa-solid fa-globe"></i> All</a>
                                </li>
                                <li>
                                    <a href="dashboard-crm.html"><i class="fa-solid fa-music"></i> Song</a>
                                </li>
                                <li>
                                    <a href="dashboard-projects.html"><i class="fa-solid fa-masks-theater"></i> Comedy</a>
                                </li>
                                <li>
                                    <a href="dashboard-projects.html"><i class="fa-solid fa-skull"></i> Thriller</a>
                                </li>
                                <li>
                                    <a href="dashboard-projects.html"><i class="fa-solid fa-snowman"></i> Cartoon</a>
                                </li>
                                <li>
                                    <a href="dashboard-projects.html"><i class="fa-solid fa-baseball-bat-ball"></i> Sports</a>
                                </li>
                                <li>
                                    <a href="dashboard-projects.html"><i class="fa-solid fa-heart"></i> Liked Videos
                                     </a>
                                </li>
                            </ul>
                        </li>

                     </ul>
                     
                    
                   <div className='text-center white'>Click here to Upload </div>
                  
                   <div><Link to="/upload"><a className='btn btn-danger ml-5 mt-3'> <img src={require('./../assets/images/icons8-upload-to-cloud-50.png')}></img></a></Link></div>
                

                    <div class="clearfix"></div>
                    <button onClick={()=>navigate('/music')} className='btn btn-danger mt-5 ml-3 mr-3'><div className='music '> <img src={require('./../assets/images/icons8-music-32.png')}></img>    Switch to Music Player</div></button>
                </div>
            

            </div>
            </>
            
    )
}
export default Sidebar;
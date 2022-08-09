import './../cssfiles/home.css'
import {useNavigate} from 'react-router-dom'
import Sidebar from '../components/sidebar';
import Navbar from '../components/navbar';
import Card from '../components/card'

function Home(){
   
     const Logout=()=>{

        
      }
     return(<>
    
    <Sidebar/>
    <Navbar/>
    <Card/>
    
    
    
    </>);
}



export {Home};
import './../cssfiles/home.css'
import {useNavigate} from 'react-router-dom'
import Sidebar from '../components/sidebar';
import Navbar from '../components/navbar';
import Card from '../components/card'
import { useEffect, useState } from 'react';
import axios from 'axios';

function Home(){
   
    const [list,setlist]=useState({
        request:'stefhi_video_lists',
        token:localStorage.getItem('token')
    })

    useEffect( async()=>{
        console.log(list)
       let response =  await axios.post('https://karka.academy/api/',JSON.stringify(list));
       let listvideo=response.data.data;
       listvideo.map()
    },[])
     return(<>
    
    <Sidebar/>
    <Navbar/>
    <Card/>
    
    
    
    </>);
}



export {Home};
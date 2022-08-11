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

    const [video,setvideo]=useState([]);
   


    

   const [update,setUpdate]=useState({
    token:localStorage.getItem('token'),
    request:'stefhi_video_update',
     video_id:'',
     content:'',
     category:'',
     id:'',
     user_id:localStorage.getItem('id') 
    });
    console.log(update)

   const handleInput=(e,key)=>{
        
    if(key == 'video_id' ){
      var video_id = e.target.value.split('v=')[1];
      setUpdate({...update,[key]:video_id})
    }
    else{
      setUpdate({...update,[key]:e.target.value})
    }
} 

const handleOption=(e,key)=>{
 
    setUpdate({...update,[key]:e.target.value})
   } 

   const videoUpdate=()=>{}

    useEffect(()=> async() => {
        
       let response =  await axios.post('https://karka.academy/api/',JSON.stringify(list));
       let listvideo=response.data.data;
       setvideo(listvideo);
       
    },[])
     return(
    <>
    <Sidebar/>
    <Navbar/>
    <div className='row videorow'>
    {video.map((v,k) =>
    <div className='col-4'>
    <div class="card searchs mt-3" style={{width: 18 +"rem"}}>



<a  data-toggle="modal"  data-target="#exampleModalCenter">
<img src={require('./../assets/images/small/small-1.jpg')}  style={{width:288,height:164}}/>
</a>


<div class="modal fade" id="exampleModalCenter"  tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitlee">{v.content}</h5>
        <button type="button" class="close" data-dismiss="modal"  aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <iframe  src={`https://www.youtube.com/embed/${v.video_id}`} style={{width:470,height:317}}> 
              </iframe>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal">Like</button>
        <button type="button" class="btn btn-danger">Share</button>
      </div>
    </div>
  </div>
</div>
<div className='text-center'>name</div>
{localStorage.getItem('id')===v.user_id?
<>

<div class="dropdown">
                        <button class="btn right" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded>
                        <i class="fa-solid fa-pen"></i>
                        </button>
                        
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" >
                          <li><div class="form-group mar">
                          <label for="exampleInputEmail1">Video URL</label>
                          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Url" onChange={(e)=>handleInput(e,'video_id')}/>
                          </div></li>
                          <li><div class="mb-3 register-div">
                            <label for="exampleFormControlInput1" class="form-label">Content</label>
                            <input type="text" class="form-control" name="startdate" id="pillstartdate" onChange={(e)=>{handleInput(e,'content');}} placeholder="Content" required/>
                          </div></li>
                          <li><div class="mb-3 register-div">
                            <label for="example-select" class="form-label">Category</label>
                            <select class=" form-control mb-3" id="example-select" onChange={(e)=>handleOption(e,'category')} >
                            <option value="1">Select category </option>
                            <option value="cartoon">Cartoon</option>
                            <option value="sports">Sports</option>
                            <option value="thriller">Thriller</option>
                            <option value="songs">Songs</option>
                            <option value="comedy">Comedy</option>
                            </select>
                          </div></li>
                            
                          <li><div class="add-button"><button type="button"  class="btn btn-danger" onClick={videoUpdate}>Save</button></div></li>
                        </ul>
                      
                      </div>
 </>


:<p></p>}

 </div>
 </div>)}
</div>
    
    
    
    </>)
}



export default Home;
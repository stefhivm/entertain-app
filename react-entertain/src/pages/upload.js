import React,{ useState } from 'react'
import './../cssfiles/home.css'
import Sidebar from '../components/sidebar';
import Navbar from '../components/navbar';
import axios from 'axios';
import {useDispatch,useSelector} from 'react-redux';
import {videoAction} from '../redux/videoSlice'
import { Navigate, useNavigate } from 'react-router-dom';


function UploadForm(){
 const navigate=useNavigate();
  const dispatch = useDispatch();

    const data = useSelector((state)=>state.user);

    const Uploaddata = async() => {
      let status = await dispatch(videoAction(upload))
    
      if(status)
      {navigate('/home')}
      else{navigate('/upload')}
    }

      
     


    const [upload,setUpload]=useState({
    token:localStorage.getItem('token'),
    request:'stefhi_video_upload',
     video_id:'',
     content:'',
     category:'',
     user_id:localStorage.getItem('id') 
    });


    const handleInput=(e,key)=>{
        
        if(key == 'video_id' ){
          var video_id = e.target.value.split('v=')[1];
          setUpload({...upload,[key]:video_id})
        }
        else{
          setUpload({...upload,[key]:e.target.value})
        }
    } 

    const handleOption=(e,key)=>{
     
        setUpload({...upload,[key]:e.target.value})
       } 

    //  console.log(upload);  
    return(
        <>
        <Navbar/>
        <Sidebar/>
        <div className='uploadhead text-center mt-3'>Upload Your Video Here</div>
        <div className='outerdiv mt-3'>
        <form>
            <p>.</p>
  <div className="form-group mar ">
    <label for="exampleInputEmail1">Video URL</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Url" onChange={(e)=>handleInput(e,'video_id')}/>
    
  </div>

  <div className="form-group mar">
    <label for="exampleInputPassword1">Name</label>
    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter content name" onChange={(e)=>handleInput(e,'content')}/>
  </div>

  <div className="form-group mar">
    <label for="example-select">Category </label>
    {/* <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter category" onChange={(e)=>handleInput(e,'category')}/> */}
    
                <select class=" form-control mb-3" id="example-select" onChange={(e)=>handleOption(e,'category')} >
                  <option value="1">Select category </option>
                  <option value="cartoon">Cartoon</option>
                  <option value="sports">Sports</option>
                  <option value="thriller">Thriller</option>
                  <option value="songs">Songs</option>
                  <option value="comedy">Comedy</option>
                  </select>
  </div>

 

 
  
  <button type="button" className="btn btn-danger mar" onClick={Uploaddata}>Upload</button>

</form>
</div>
        </>
    )
}

  
export{UploadForm};
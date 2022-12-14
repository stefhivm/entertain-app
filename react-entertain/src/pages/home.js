import './../cssfiles/home.css'
import {useNavigate} from 'react-router-dom'
import Sidebar from '../components/sidebar';
import Navbar from '../components/navbar';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { setvideoUpdate, videoUpdateAction } from '../redux/updateSlice';
import {useDispatch,useSelector} from 'react-redux'
import { videoListAction } from '../redux/listSlice';
import {videoDeleteAction} from '../redux/updateSlice'

function Home(){
   
    const [list,setlist]=useState({
        request:'stefhi_video_lists',
        token:localStorage.getItem('token')
    })

    const [video,setvideo]=useState([]);
   
    const data=useSelector((state)=>state.uservideoupdate)

    const dispatch=useDispatch();


   const [update,setUpdate]=useState({
    token:localStorage.getItem('token'),
    request:'stefhi_video_update',
     video_id:'',
     content:'',
     category:'',
     id:''
    });
    
   

   const handleInput=(e,key,id)=>{
        
    if(key == 'video_id' ){
      var video_id = e.target.value.split('v=')[1];
      setUpdate({...update,video_id:video_id, id: id})
      
     
    }
    else{
      setUpdate({...update,[key]:e.target.value})
    }
} 

const handleOption=(e,key)=>{
 
    setUpdate({...update,[key]:e.target.value})
   } 

   
console.log(update);
    const videoUpdate = async(id)=>{
      
     
     let status = await dispatch(videoUpdateAction(update));
     
     }

const videoDelete = async(id)=>{
  let trash={
    request:'stefhi_video_delete',
    token:localStorage.getItem('token'),
    id:id
  }
     let status = await dispatch(videoDeleteAction(trash));
     
     }

     

    useEffect(()=> async() => {
        
       let status = await dispatch(videoListAction(list));
       let listvideo=status.data.data;
       setvideo(listvideo);
       
    },[data])


     return(
    <>
    <Sidebar/>
    <Navbar/>
    <div className='row videorow'>
    {video && video.map((v,k) =>
    <div className='col-3'>
    <div class="card searchs mt-3" style={{width: 18.5 +"rem"}}>



<a  data-toggle="modal"  data-target={`#exampleModalCenter${k}`}>
<img className='thumbnail' src={(`https://i3.ytimg.com/vi/${v.video_id}/maxresdefault.jpg`)}  style={{width:297,height:164}}/>
</a>


<div class="modal fade" id={`exampleModalCenter${k}`}  tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title textstyle" id="exampleModalLongTitlee">{v.content}</h5>
        <button type="button" class="close" data-dismiss="modal"  aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <iframe  src={`https://www.youtube.com/embed/${v.video_id}`} style={{width:470,height:317}}> 
              </iframe>
      </div>
      {/* <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal">Like</button>
        <button type="button" class="btn btn-danger">Share</button>
      </div> */}

{localStorage.getItem('id')===v.user_id?
<>

<div class="dropdown ">
                        <button class="btn btn-danger arrange"  type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded>
                        <i class="fa-solid fa-pen "></i>
                        </button>

                        {localStorage.getItem('id')===v.user_id?<div class="ib"><button class="btn btn-danger" data-inline="true" onClick={()=>videoDelete(v.id)} type="button" >
                     <i class="fa-solid fa-trash "></i>
                        </button></div>:<p></p>}
                        
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" >
                          <li><div class="form-group mar">
                          <label for="exampleInputEmail1">Video URL</label>
                        <input type="text" className="form-control"  aria-describedby="emailHelp" placeholder="Enter Url" defaultValue={`www.youtube.com/watch?v=${v.video_id}`}  onChange={(e)=>handleInput(e,'video_id', v.id )}/>
                          </div></li>
                          <li><div class=" form-group mar">
                            <label class="form-label">Content</label>
                            <input type="text" class="form-control"  placeholder="Content" defaultValue={v.content} onChange={(e)=>{handleInput(e,'content','');}}/>
                          </div></li>
                          <li><div class="mar form-group">
                            <label for="example-select" class="form-label">Category</label>
                            <select class=" form-control mb-3" id="example-select"  onChange={(e)=>handleOption(e,'category')} >
                            <option defaultValue={v.category}>Select Category </option>
                            <option value="cartoon">Cartoon</option>
                            <option value="sports">Sports</option>
                            <option value="thriller">Thriller</option>
                            <option value="songs">Songs</option>
                            <option value="comedy">Comedy</option>
                            </select>
                          </div></li>
                            
                          <li><div class="add-button"><button type="button"  class="btn btn-danger" onClick={()=>videoUpdate(v.id)}><i class="fa-solid fa-check"></i></button></div></li>
                        </ul>
                      
                      </div>
 </>:<p></p>}

    </div>
  </div>
</div>


 </div>
<div className='text-justify white  textstyle'>{v.content}</div>

 </div>)}
</div>
    
    
    
    </>)
}



export default Home;
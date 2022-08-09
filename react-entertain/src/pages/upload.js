import React,{ useState } from 'react'
import './../cssfiles/home.css'
import Sidebar from '../components/sidebar';
import Navbar from '../components/navbar';


function UploadForm(){

    const [upload,setUpload]=useState({});

    const handleInput=(e,key)=>{
        setUpload({...upload,[key]:e.target.value})
       } 

    const handleOption=(e,key)=>{
        setUpload({...upload,[key]:e.target.value})
       } 
         

    const handleImage=(event,key)=>{
      setUpload({...upload,[key]:URL.createObjectURL(event.target.files[0])});
    }    

    console.log(upload);  

    const Uploaddata=()=>{fetch(`https://karka.academy/api/action.php?request=upload_video&url=${upload.url}&content=${upload.content}&category=${upload.category}&image=${upload.image}`)
  .then((response)=>response.json())}   


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
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Url" onChange={(e)=>handleInput(e,'url')}/>
    {/* <video width="750" height="500" controls >
      <source src={`${upload.url}`} type="video/mp4"/>
     </video> */}
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

 

  <div className="form-group mar">
    <label for="exampleInputPassword1">Thumbnail</label>
    <input type="file" className="form-control-file" onChange={(e)=>handleImage(e,'image')}/>
    <div className='mt-2'><img className='uploadimage' src={`${upload.image}`}></img></div>
  </div>
  
  <button type="button" className="btn btn-danger mar" onClick={Uploaddata}>Upload</button>

</form>
</div>
        </>
    )
}

  
export{UploadForm};
import React,{ useState } from 'react'
import './../cssfiles/home.css'


function UploadForm(){

    const [upload,setUpload]=useState({});

    const handleInput=(e,key)=>{
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
        
        <div className='uploadhead text-center'>Upload Your Video Here</div>
        <div className='outerdiv mt-5'>
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
    <label for="exampleInputPassword1">Category</label>
    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter category" onChange={(e)=>handleInput(e,'category')}/>
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

  function GetYouTubeVideoId(url) {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    let a=(match && match[7].length == 11) ? match[7] : false;
    console.log(a);
  
  GetYouTubeVideoId("https://www.youtube.com/watch?v=iD1oXpYONmg");
}
export{UploadForm,GetYouTubeVideoId};
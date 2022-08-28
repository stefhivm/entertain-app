import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    
    videoUpdate : {
        id:null,
        video_id:null,
        content:null,
        category:null
    }
};


export const updateSlice = createSlice({
    name: 'uservideoupdate',
    initialState,
    reducers:{
        
        setvideoUpdate : (state,action) =>{
            state.videoUpdate = action.payload
        }
    }
})

export const videoUpdateAction = (update) => async (dispatch) =>{
    
   
    let response= await axios.post('https://karka.academy/api/',JSON.stringify(update));
    console.log('upload', response)
    if(response.data.status==='success'){
         dispatch(setvideoUpdate({id:update.id,
                                  video_id:update.video_id,
                                  content:update.content,
                                  category:update.category
                                  }))
    }
    else{return false;}

}


export const videoDeleteAction = (trash) => async (dispatch) =>{
    
   
    let response= await axios.post('https://karka.academy/api/',JSON.stringify(trash));
    console.log('upload', trash)
    console.log(response);
    if(response.data.status==='success'){
         dispatch(setvideoUpdate({id:trash.id,
                                  video_id:trash.video_id,
                                  content:trash.content,
                                  category:trash.category
                                  }))
    }
    else{return false;}

}


export const {setvideoUpdate} =updateSlice.actions;
export default updateSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    
    videoList : {
        id:null,
        email:null,
        name:null,
        token:null
    }
};


export const listSlice = createSlice({
    name: 'uservideolist',
    initialState,
    reducers:{
        
        videoList : (state,action) =>{
            state.videoList = action.payload
        }
    }
})

export const videoListAction = (list) => async (dispatch) =>{
    
   
    let response= await axios.post('https://karka.academy/api/',JSON.stringify(list));
    
    if(response.data.status==='success'){
         return response;
    }
    else{return false;}

}



export default listSlice.reducer;
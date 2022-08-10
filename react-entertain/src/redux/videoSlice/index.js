import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';


const initialState = {
    
    videoDetails : {
        id:null,
        email:null,
        name:null,
        token:null
    }
};


export const videoSlice = createSlice({
    name: 'uservideo',
    initialState,
    reducers:{
        
        videoDetails : (state,action) =>{
            state.userDetails = action.payload
        }
    }
})

export const videoAction = (upload) => async (dispatch) =>{
    
   
    let response= await axios.post('https://karka.academy/api/', JSON.stringify(upload))
    if(response.data.status==='success'){
         return true;
    }
    else{return false;}

}



export default videoSlice.reducer;
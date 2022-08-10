import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    value : 0,
    userDetails : {
        id:null,
        email:null,
        name:null,
        token:null
    }
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        setValue : (state)=>{
            state.value = state.value+1;
        },
        setUserDetails : (state,action) =>{
            state.userDetails = action.payload
        }
    }
})


export const loginAction = (loginCredential) => async (dispatch) =>{
    console.log(loginCredential);
    let response= await axios.post('https://karka.academy/api/', JSON.stringify(loginCredential))
    console.log(response.data.data);
    let resdata=response.data.data;
                         localStorage.setItem('id',resdata.id);
                         localStorage.setItem('name',resdata.name);
                         localStorage.setItem('email',resdata.email);
                         localStorage.setItem('token',resdata.token);
                         dispatch(setUserDetails( {
                               id:resdata.id,
                               email:resdata.email,
                               name:resdata.name,
                               token:resdata.token
                           }))
                   
                        
                 if(resdata.id){
                    return true;
                 }
                 else{
                    return false;
                 }
      
   
    


      
}


export const getUserDetails = () => async (dispatch) =>{
    
    

      dispatch(setUserDetails( {
            id:localStorage.getItem('id'),
            email:localStorage.getItem('email'),
            name:localStorage.getItem('name'),
            token:localStorage.getItem('token')
        }))

      
}

export const {setValue,setUserDetails} = userSlice.actions;

export default userSlice.reducer;
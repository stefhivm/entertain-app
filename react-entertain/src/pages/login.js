import './../cssfiles/register.css';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import axios from 'axios';
import {useDispatch,useSelector} from 'react-redux'
import {setValue,loginAction} from '../redux/userSlice'

function SignUp(){
const navigate=useNavigate()
const dispatch = useDispatch();

    const data = useSelector((state)=>state.user);
    
    // const [login, setLogin] = useState({
    //   request:'stefhi_login',
    //   email:'',
    //   password:''
    // });

    const [loginCredential,setLoginCredential] = useState({
      request:"stefhi_login",
      email:'',
      password: ''
  })
  

    const getLogin = async() => {
      let status = await dispatch(loginAction(loginCredential))

      if(status){
        navigate('/account')
      }
    }


    const handleInput=(e,key)=>{
        setLoginCredential({...loginCredential,[key]:e.target.value})}
    return (
          <div className="App">
            <div className="outer">
          <div className="inner">
          <form >
            <h3>Sign In</h3>
            <div className="mb-3 mar-bo">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                onChange={(e)=>handleInput(e,'email')}
              />
            </div>
            <div className="mt-3 mb-4 mar-bo">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                onChange={(e)=>handleInput(e,'password')}
                

              />
            </div>
            
            <div className="d-grid">
            <button type="button" className="btn btn-danger btn-lg btn-block btn-register" onClick={getLogin} >Submit</button>
            </div>
            <p className="forgot-password text-right">
              Don't have an account? <a href="/sign-up">Sign-up</a>
            </p>
          </form>
          </div>
          </div>
          </div>
        )
      }
    

export {SignUp};
import './../cssfiles/register.css';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import axios from 'axios';

function SignUp(){
const navigate=useNavigate()
    
    const [login, setLogin] = useState({
      request:'stefhi_login',
      email:'',
      password:''
    });

    const handleInput=(e,key)=>{
        setLogin({...login,[key]:e.target.value})}

        console.log(login);

        // const getLogin=()=> {fetch(`https://karka.academy/api/action.php?request=stefhi_login&email=${login.email}&password=${login.password}`)
        // .then((response)=>response.json())
        // .then((response)=>{let datas=response.status;
        //   let dataa=response.data;
        //   console.log(dataa);
            
        //       if(datas == 'success'){
        //         localStorage.setItem('userDetails',JSON.stringify(dataa))
        //         navigate('/account')
        //     }else{
        //       alert('invalid password or email')
        //     }
            
            
        //     console.log(datas);
        //      })}

        const getLogin=()=>{axios.get('https://karka.academy/api/action.php',login)
                           .then((response)=>console.log(response))};
    
        return (
          <div className="App">
            <div className="outer">
          <div className="inner">
          <form>
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
            <div className="mt-3 mb-5 mar-bo">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                onChange={(e)=>handleInput(e,'password')}
                

              />
            </div>
            {/* <div className="mb-3">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Remember me
                </label>
              </div>
            </div> */}
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
import './../cssfiles/register.css'
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
function Register(){
    const [data, setData] = useState({});
    const navigate=useNavigate()

    const handleInput=(e,key)=>{
        setData({...data,[key]:e.target.value})}

        const getStatus=()=> {fetch(`https://karka.academy/api/action.php?request=user_register&name=${data.name}&email=${data.email}&password=${data.password}`)
        .then((response)=>response.json())
        .then((response)=>{let datas=response.status;
            if(datas==='success'){
                navigate('/')
            }
            console.log(datas);
             })}
    
        return (
            <div className="App">
            <div className="outer">
          <div className="inner">
            <form>
                <h3>Register</h3>

                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="Enter Name" onChange={(e)=>handleInput(e,'name')} />
                </div>

               
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" onChange={(e)=>handleInput(e,'email')} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" onChange={(e)=>handleInput(e,'password')}/>
                </div>

                <button type="button" className="btn btn-danger btn-lg btn-block btn-register" onClick={getStatus}>Register</button>
                <p className="forgot-password text-right">
                    Already registered <a href="/">log in?</a>
                </p>
            </form>
            </div>
            </div>
            </div>
        );
    }
    

    

export {Register};
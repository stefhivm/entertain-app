import './../cssfiles/register.css'
import {useState} from 'react';
import { useNavigate ,Link} from 'react-router-dom';
import axios from 'axios';



function Register(){
    const [data, setData] = useState({
        request:'stefhi_user_register',
        name:'',
        email:'',
        password:''
    });

    const [show,setShow]=useState('hide');
    console.log(data);
    const navigate=useNavigate()

    const handleInput=(e,key)=>{
        setData({...data,[key]:e.target.value})}

    const validation=()=>  {
        if((data.name||data.email||data.password)===''){
           setShow('show');
           
        }
        else{
            setShow('hide');
              getStatus();
        }
    } 

        const getStatus=()=> {fetch(`https://karka.academy/api/action.php?request=user_register&name=${data.name}&email=${data.email}&password=${data.password}`)
        .then((response)=>response.json())
        .then((res)=>{let datas=res.status;
            if(datas==='success'){
                navigate('/');
            }
           console.log(res.status);
             })}

    //    const getStatus=()=>{axios.get('https://karka.academy/api/action.php',data)
    //                        .then((response)=>console.log(response))};
    
        return (
            <div className="App">
            <div className="outer">
          <div className="inner">
            <form  method="post">
                <h3>Register</h3>

               

                <div className="form-group">
                    <label>Name</label>
                    <input type="text" name="fname" className="form-control" placeholder="Enter Name" onChange={(e)=>handleInput(e,'name')} required />
                  
                </div>

               
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" onChange={(e)=>handleInput(e,'email')} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" onChange={(e)=>handleInput(e,'password')}/>
                </div>

                <button type="button" value="Submit" className="btn btn-danger btn-lg btn-block btn-register" onClick={validation}>Register</button>
                {show ==='show'? <p className="text-center valid">Fill all field</p>:<p></p>} {console.log(show)}
                
                <p className="forgot-password text-right">
                    Already registered <Link to="/">log in?</Link>
                </p>
            </form>
            </div>
            </div>
            </div>
        );
    }
    

    

export {Register};
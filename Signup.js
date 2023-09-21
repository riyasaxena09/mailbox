import { useRef, useState } from "react";
import LoginSlice from "../Redux/loginredux";
import { useDispatch } from "react-redux";
function SignUp(){
    const [change,setchange] =useState(false);
    function ChangeHandler(e){
e.preventDefault();
setchange(!change);
    }
const dispatch=useDispatch();
    const Iemail=useRef();
    const Ipass=useRef();
   function submithandler(e){
        const mail=Iemail.current.value;

        const pass=Ipass.current.value;
      
        e.preventDefault();
        let url;
        if(change){
url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBr8QUNIcET_N7fAjDUsO-MOeRg0Ntc8zc';
        }else{
            url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBr8QUNIcET_N7fAjDUsO-MOeRg0Ntc8zc';
        }
        fetch(url,{
            method:'POST',
            body:JSON.stringify({
                email:mail,
                password:pass,
                returnSecureToken:true,
            }),
            headers:{
                'Content-type':'aplication/json',
            },
        }).then((res)=>{
            if(res.ok){
return res.json();

            }else{
                return res.json().then((data)=>{
                    let errormsg="Authentication fault";
                  
                   throw new Error(errormsg);
                });
            }
        }).then((data)=>{

            console.log(data.idToken);
        
            localStorage.setItem("token",data.idToken);
           
        })
.catch((err)=>{
    alert(err.message);
})        
    }

    return(
        <>
        <h1 className="head">Welcome to the Expense Tracker</h1>
        <form className="form" onSubmit={submithandler}>
            {change ?<h1 className="he">Login</h1>:<h1 className="he">SignUp</h1>}
       
            <div><label>Email:</label>
            <input className='In' ref={Iemail}></input></div>
            <div><label>Password:</label>
            <input className='In' ref={Ipass}></input></div>
            <div>{change?<button  className="enter">Login</button>:<button className="enter">SignUp</button>}</div>
            <div>{change && <button className='par'>Forget password</button>}</div>
            <button onClick={ChangeHandler}  className='para'>{change?<p>Don't have an account?SignUp</p>:<p>already have an account ? Login</p>}</button>
        </form>
        </>
    )
}
export default SignUp;
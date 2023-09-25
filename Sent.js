import './Sent.css';
import { LoginActions } from '../Redux/loginredux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router';
function Sent(){
    const nav=useNavigate();
    const [right,setright]=useState(true);
    const dispatch=useDispatch();
    const mail=useSelector(state=>state.com1.mail)
    const {load,setload}=useState([]);
   const data=useSelector(state=>state.com1.des);

  function compose(){
    nav('/wel');
  }
    let e=[];
 console.log(mail);
   console.log(data)
    function Get(){
   
        fetch('https://mail1-173c9-default-rtdb.firebaseio.com/riya.json',{
         method:'GET',
            headers:{
                'Content-type':'application/json',
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
           console.log(data)

           for(const key in data){
            console.log(data[key].email)
           
            if(data[key].email===localStorage.getItem('mail'))
           {
         e.push({

            email:data[key].email,
            text:data[key].text,
           
        id:key,
         })
           }

        }
        
       setright(false);
        console.log(e);
        dispatch(LoginActions.add(e));
     
        })
        .catch((err)=>{
        alert(err.message);
        })    

        }
      
        useEffect(()=>{
            if(right===true){
            Get();
            }
          
        })
      
    return(
<>
<div className='search'>
    <div>
Search:<input></input>
</div>
<div className="flex">
    <div>
<button onClick={compose}>Compose</button>
<div>Unread</div>
<div>Unread</div>
<div>Unread</div>
<div>Unread</div>
    </div>
   <div>sent box
    {
        data.map(item=>{
            return(<li>{item.email}  {item.text}<br></br></li>)
        })
    }
  


   </div>
</div>

</div>

</>
    )
}
export default Sent;
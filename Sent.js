import './Sent.css';
import { LoginActions } from '../Redux/loginredux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router';
function Sent(){
   let m=[];
   
    const nav=useNavigate();
    const [right,setright]=useState(true);
    localStorage.setItem("right",true);
    const dispatch=useDispatch();
    const mail=useSelector(state=>state.com1.mail);
    const {load,setload}=useState([]);
   const data=useSelector(state=>state.com1.des);
   const [count,setcount]=useState(0);
 console.log(data.length)
function show(ans){
console.log(a);
dispatch(LoginActions.showmail(ans));
fetch(`https://bluedot-9ccd2-default-rtdb.firebaseio.com/riya/${a}.json`,{
        method:'DELETE',
        headers:{
            'Content-type':'application/json',
        },
    }).then((res)=>{
        if(res.ok){
    return res.json();
    }else{
            return res.json().then((data)=>{
                let errormsg="not a valid email";
               throw new Error(errormsg);
            });
        }
    }).then((data)=>{
        console.log(data);
        dispatch(LoginActions.deleteItem());
     setright(!right)
    })
 
dispatch(LoginActions.deleteItem());

nav('/see');
}
function Delete(id){
    console.log(id);
    fetch(`https://mail1-173c9-default-rtdb.firebaseio.com/riya/${id}.json`,{
        method:'DELETE',
        headers:{
            'Content-type':'application/json',
        },
    }).then((res)=>{
        if(res.ok){
    return res.json();
    }else{
            return res.json().then((data)=>{
                let errormsg="not a valid email";
               throw new Error(errormsg);
            });
        }
    }).then((data)=>{
        console.log(data);
        dispatch(LoginActions.deleteItem());
     setright(!right)
    })
    
}
  function compose(){
    dispatch(LoginActions.deleteItem());
    console.log(data)
    nav('/wel');
  }
    let e=[];
 console.log(mail);
  
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
            console.log(key)
           
            if(data[key].email===localStorage.getItem('mail'))
           {
         e.push({

            email:data[key].email,
            text:data[key].text, 
        id:key,
         })


           }
        }
        
setcount(data.length)
console.log(e)
       dispatch(LoginActions.add(e));
      })
    }
      console.log(data)
   
        useEffect(()=>{
          
            Get();
           
          
        },[right])
     var a;
      var c;
    return(
<>
<div className='search'>
    <div className='first'>
<label className='lab'>Search:</label><input className='inp'></input>
</div>
<div className="flex">
    <div className='side'>
<button onClick={compose} className='compose'>Compose</button>
<div>Inbox<sup>{count}</sup></div>
<div>Outbox</div>
<div>Unread</div>
<div>Unread</div>
    </div>
   <div className='sent'><div className='mail'>Mails</div>
   
    {

  data.map(item=>{
    fetch('https://bluedot-9ccd2-default-rtdb.firebaseio.com/riya.json',{
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
          

          for(const key in data){
           
       
        if(item.id===data[key]){
   
           localStorage.setItem(item.id,"blue-dot")
           a=key;
          
        
        }else{
            localStorage.setItem(item.id,"a")
            a="";
        }
       }
       console.log(a);
    })

        return(<div><div onClick={()=>show(item)}><span className={localStorage.getItem(item.id)}></span>{item.email}{item.text}</div><button onClick={()=>Delete(item.id)}>Delete</button></div>)
       })
    }
   </div>
</div>

</div>

</>
    )
}
export default Sent;
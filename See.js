import { useDispatch } from "react-redux";
import { LoginActions } from "../Redux/loginredux";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import { useNavigate } from "react-router";
function See(){
    const nav=useNavigate();
    const showmail=useSelector(state=>state.com1.ans);
    function compose(){
        nav('/wel');
      }
      function back(){
        nav('/sent')
      }
    return (
        <>
<div className='search'>
    <div className='first'>
<label className='lab'>Search:</label><input className='inp'></input>
</div>
<div className="flex">
    <div className='side'>
<button onClick={compose} className='compose'>Compose</button>
<div>Inbox</div>
<div>Outbox</div>
<div>Unread</div>
<div>Unread</div>
    </div>
    
   <div className='sent'>
   <button onClick={back}>back</button>
  {<div><h1>{showmail.email}</h1>
  {showmail.text}</div>

}

   </div>
</div>

</div>

        </>
    )
}
export default See;
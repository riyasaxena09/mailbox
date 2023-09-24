import './Welcome.css';
import React, { useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import { ContentState, convertFromHTML } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { useRef } from 'react';

function Welcome(){
  const mailid=useRef();
const msg=useRef();
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
function submithandler(e){
  e.preventDefault();
const email=mailid.current.value;
const contentState = editorState.getCurrentContent();
const text = contentState.getPlainText('\n');

console.log(email);
console.log(text);
const obj={
  email:email,
  text:text
}

fetch('https://mail1-173c9-default-rtdb.firebaseio.com/riya.json', 
{
     method:'POST',
body:JSON.stringify(obj),
headers:{
    'Content-type':'application/json',
},
}).then((res)=>{
if(res.ok){
return res.json();
}else{
    return res.json().then((data)=>{
        let errormsg="not a valid email";
       // if(data && data.error && data.error.message){
         //   errormsg=data.error.message;
       // }
       throw new Error(errormsg);
    });
}
}).then((data)=>{
console.log(data)

})

}

  const onEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState);
  };
    return(
        <>
    <h1>welcome to mail box client</h1>
      <div className=' main'>
        <form onSubmit={submithandler}>
        <div>
        <label>To:</label>
        <input ref={mailid}></input>
        </div>
        <hr></hr>
        <div>
          <label>Test mail</label>
          <input></input>
        </div>
        <hr></hr>
        <div>
          <div className='edi'>  <Editor 
          ref={msg}
        editorState={editorState}
        onEditorStateChange={onEditorStateChange}
      />
     </div>
          <button className='send'>Send</button>
        </div>
        </form>
      </div>
    
</>
    )
}
export default Welcome;
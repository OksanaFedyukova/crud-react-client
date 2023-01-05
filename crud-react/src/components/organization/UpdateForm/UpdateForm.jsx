
import '../CreateForm/CreateForme.scss';

import React ,{Link, useState, useEffect }from "react";
import { useNavigate, useParams} from 'react-router-dom';
import axios from "axios";

function UpdateForm()
{ 
const [actualizar, setActualizar]= useState({ fecha:"",
technology:"",
coder:"",
comments:""});
const [msg, setMsg]= useState('');
const navigate= useNavigate();
const {id} = useParams();

useEffect( ()=>{
  const edituserid = async()=>{
      const reqdata= await fetch(`http://localhost/citas/update:app/${id}`);
      const res = await reqdata.json();
      setActualizar(await res);
  }
  edituserid();
}, [id]); 


const handleEdit =(e)=>{
  setActualizar({...actualizar, [e.target.name]:e.target.value});  

}

const handleUserupdate= async (e)=>{
    e.preventDefault();
    const response= await axios.post(`http://localhost/citas/update:app/${id}`, actualizar);
    setMsg(response.data.msg);
    
    setTimeout( ()=>{
        navigate.push("/");
    }, 2000);

}

return (
    <div>
      <h3>Update Your Appointment</h3>
      <p className="text-danger"> { msg }</p>
    <div id="registration-form">
    <div className='fieldset'>
    <form onSubmit={ handleUserupdate } >
    <div clasName='row'>
        <label>Select Time</label>
        <input type="datetime-local" name="fecha" onChange={(e)=>handleEdit(e)}value={actualizar.fecha} id="fecha" placeholder="time"/>
    </div>
    <div className='row'>
        <label for='firstname'>Technology</label>
        <input type="text" name='technology' onChange={(e)=>handleEdit(e)} value={actualizar.technology} id='technology' placeholder="technology"/>
    </div>
    <div className='row'>
        <label for='firstname'>coder</label>
        <input type="text" name='coder' onChange={(e)=>handleEdit(e)} value={actualizar.coder} id='coder' placeholder="coder"/>
    </div>
    <div className='row'>
        <label> Any Additional Info </label>
        <input type="text" name="comments" onChange={(e)=>handleEdit(e)} value={actualizar.comments} id="comments" placeholder="comments"/>
    </div> 
      <button type="submit" className='btn btnSubmit'>Submit</button>
      <Link to={"/"} className='btn btnCancel'>Cancel</Link>
    </form>
  </div>
</div>
    </div>
  );
}
export default UpdateForm;
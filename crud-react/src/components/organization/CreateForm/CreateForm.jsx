import React from 'react';
/* import SelectInput from '../SelectInput/SelectInput'; */
import '../CreateForm/CreateForme.scss';
import { Link } from 'react-router-dom';


class CreateForm extends React.Component {
  constructor(props) {

    super(props);
    this.state = {
      fecha:"",
      technology:"",
      coder:"",
      comments:""
    }    
  }
     

  cambioValor = (e) => {

      const state=this.state;
      state[e.target.name]= e.target.value;
      this.setState({state});
  }
  
  enviarDatos =(e) =>{ 
    
     e.preventDefault();
        const{fecha,technology,coder,comments}=this.state;
    console.log(fecha)
    console.log(technology)
    console.log(coder)
    console.log(comments)

    var datosEnviar = {fecha:fecha, technology:technology, coder:coder, comments:comments}

    fetch("http://localhost/citas/?insertar=1",{
      method:"POST",
      body:JSON.stringify(datosEnviar)

    })
    .then(respuesta=>respuesta.json())
    .then((datosRespuesta)=>{
      console.log(datosRespuesta);
      
     
    })
    .catch(console.log)


}

  render(){
     const{fecha,technology,coder,comments}=this.state;
     

  return (
    <div>
      <h3>Create New Appointment</h3>
    <div id="registration-form">
    <div className='fieldset'>
    <form onSubmit={this.enviarDatos}>
    <div clasName='row'>
        <label>Select Time</label>
        <input type="datetime-local" name="fecha" onChange={this.cambioValor} value={fecha} id="fecha" placeholder="time"/>
    </div>
    <div className='row'>
        <label for='firstname'>Technology</label>
        <input type="text" name='technology' onChange={this.cambioValor} value={technology} id='technology' placeholder="technology"/>
    </div>
    <div className='row'>
        <label for='firstname'>coder</label>
        <input type="text" name='coder' onChange={this.cambioValor} value={coder} id='coder' placeholder="coder"/>
    </div>
    <div className='row'>
        <label> Any Additional Info </label>
        <input type="text" name="comments" onChange={this.cambioValor} value={comments} id="comments" placeholder="comments"/>
    </div> 
     
    
      <button type="submit" className='btn btnSubmit'>Submit</button>
      <Link to={"/"} className='btn btnCancel'>Cancel</Link>
    </form>
  </div>
</div>

    </div>
  );
} 
}
export default CreateForm;
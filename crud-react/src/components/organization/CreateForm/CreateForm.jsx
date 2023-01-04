import React from 'react';
import SelectInput from '../SelectInput/SelectInput';
import '../CreateForm/CreateForme.scss';


function CreateForm() {
  
  return (
    <div>
      <h3>Create New Appointment</h3>
    <div id="registration-form">
    <div class='fieldset'>
    <form>
    <div class='row'>
        <label>Select Time</label>
        <input type="datetime-local" name="time" id="time" placeholder="time"/>
    </div>
    <div class='row'>
        <label for='firstname'>Technology</label>
        <input type="text" name='firstname' id='' placeholder="technology"/>
    </div>
    <div class='row'>
        <label> Any Additional Info </label>
        <input type="undefined" placeholder="description" />
    </div> 
     <div class='row'>
    <SelectInput/>
      </div>
      {/* <input type="submit" value="Submit"/> */}
      <button className='btn btnSubmit'>Submit</button>
      <button className='btn btnCancel'>Cancel</button>
    </form>
  </div>
</div>

    </div>
  );
} 

export default CreateForm;
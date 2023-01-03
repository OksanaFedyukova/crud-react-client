
import CitasTables from '../../components/organization/CitasTable/CitasTable';
import Navbar from '../../components/navigation/Navbar/Navbar';


function Citas() {
    return (
        <>
        <Navbar/>
   
      <div className='container'>
      <h2>Modern Problems Require Modern Solutions</h2>
       <CitasTables/>
       </div>
       </>
 );
}

export default Citas;
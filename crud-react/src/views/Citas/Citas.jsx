
import CitasTables from '../../components/organization/CitasTable/CitasTable';
import Navbar from '../../components/navigation/Navbar/Navbar';
import Footer from '../../components/navigation/Footer/Footer';


function Citas() {
    return (
        <>
        <Navbar/>
   
      <div className='container'>
      <h2>Modern Problems Require Modern Solutions</h2>
       <CitasTables/>
       </div>
       <Footer/>
       </>
 );
}

export default Citas;
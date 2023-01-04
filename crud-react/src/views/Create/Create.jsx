
import Navbar from '../../components/navigation/Navbar/Navbar';
import CreateForm from '../../components/organization/CreateForm/CreateForm';
import Footer  from '../../components/navigation/Footer/Footer';

function Create() {
    return (
        <>
    <Navbar/>
      <div className='container'>
      <h2>Modern Problems Require Modern Solutions</h2>
       <CreateForm/>
       </div>
       <Footer/>
       </>
 );
}

export default Create;
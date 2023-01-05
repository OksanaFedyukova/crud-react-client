
import Navbar from '../../components/navigation/Navbar/Navbar';
import UpdateForm from '../../components/organization/UpdateForm/UpdateForm';
import Footer from '../../components/navigation/Footer/Footer';


function Update() {
    return (
        <>
       <Navbar/>
      <div className='container'>
      <h2>Modern Problems Require Modern Solutions</h2>
       <UpdateForm/>
       </div>
       <Footer/>
       </>
 );
}

export default Update;
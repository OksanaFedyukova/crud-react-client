
import Navbar from '../../components/navigation/Navbar/Navbar';
import UpdateForm from '../../components/organization/UpdateForm/UpdateForm';

function Update() {
    return (
        <>
       <Navbar/>
      <div className='container'>
      <h2>Modern Problems Require Modern Solutions</h2>
       <UpdateForm/>
       </div>
       </>
 );
}

export default Update;
import Nav from './nav';
import Footer from './footer';
import { Link } from 'react-router-dom';

const LoginAndSecurity = () => {
    return ( 
        <div className="logSecComponent">
{/* START NAV  */}
<Nav></Nav>
{/* END NAV */}




{/* START FOOTER  */}
<Footer></Footer>
{/* END FOOTER */}
        </div>
     );
}
 
export default LoginAndSecurity;
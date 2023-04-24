import { useNavigate } from 'react-router-dom'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Header() {
  let user=JSON.parse(localStorage.getItem('user-info'))
  const navigate = useNavigate();
function logout(){
  localStorage.clear();
  navigate('/register');
  
}
  return (
    <div>
       <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className='me-auto navbar_warapper'>
          {
            localStorage.getItem('user-info')?
            <>
             
<Link to="/addproduct" >add product</Link>
            <Link to="/update" >Updateproduct</Link>
            </>
            :
            <>
           <Link to="/login" >login</Link>
            <Link to="/register" >register</Link>
            </>
            
          }
           </Nav>
           {
            localStorage.getItem('user-info')?
           <Nav>
            <NavDropdown title={user && user.name}>
              <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
            </NavDropdown>
           </Nav>
           :null
}
       </Navbar>
       
    </div>
  )
}

export default Header
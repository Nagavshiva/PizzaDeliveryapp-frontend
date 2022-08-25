import { useSelector} from "react-redux";
// import {Link} from "react-router-dom";
import {Navbar,Container,Nav} from 'react-bootstrap';
import './main.css';

const Main = () => {
	const cartstate = useSelector((state) => state.cartReducer);
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
		<>
		<Navbar bg="dark" variant="dark" className="navbar-container">
        <Container>
          <Navbar.Brand href="#home">Pizza Hunt</Navbar.Brand>
          <Nav className="">
            <Nav.Link href="/cart">Cart{cartstate.cartItems.length}</Nav.Link>
            <Nav.Link href="#features" onClick={handleLogout}>logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
		
		</>
		
	);
};

export default Main;




{/* <div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>PIZZA HUNT</h1>
				<img   src={"https://www.tasteofhome.com/wp-content/uploads/2018/01/Homemade-Pizza_EXPS_HCA20_376_E07_09_2b-2.jpg"} style={{width:"86px",borderRadius:'30px',backgroundColor:'none',height:'60px',marginLeft:'2px'}} alt=""/>
				<Link to="/cart">
				<p className={styles.cart_length}> Cart</p>
				</Link>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
				
			</nav>
		</div> */}
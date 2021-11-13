import './Header.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

function Header() {
    return (
        <div>
        <div className="navigation">
            <Navbar className="py-1 my-0" expand="lg" variant="dark" style={{ backgroundColor: "#333545" }}>
                <Container>
                    <Navbar.Brand href="/"><img src="assets/bmslogo.png" width="100rem" alt="Logo"></img> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Form className="d-flex search-box">
                            <FormControl
                                type="search"
                                placeholder="Search for Movies, Events, Plays, Sports and Activities"
                                className="me-2"
                                aria-label="Search"
                            />
                        </Form>
                        <div className="end-con">
                        <Nav
                            className="my-1 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll>
                            <NavDropdown className="mx-4" title="Mumbai" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                            <a href="/register">
                            <Button className="signin" variant="danger">Sign In</Button></a>
                        </Nav>
                        </div>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div style={{ background: "#222539", color: "white" }}>
            <Container className="below-nav d-flex" style={{ background: "#222539", color: "white" }}>
                <a className="linktab" href="/movies">Movies</a>
                <a className="linktab" href="/">Stream</a>
                <a className="linktab" href="/">Events</a>
                <a className="linktab" href="/">Plays</a>
                <a className="linktab" href="/">Activities</a>
                <a className="linktab" href="/">Buzz</a>
                <div className="end-con b-nav">
                <a className="linktab" href="/">ListYourShow</a>
                <a className="linktab" href="/">Corporates</a>
                <a className="linktab" href="/">Offers</a>
                <a className="linktab" href="/">Gift Cards</a>
                </div>
                </Container>
            </div>
        </div>
        </div>
    );
}

export default Header;

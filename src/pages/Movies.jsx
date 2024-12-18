import React from 'react'
import './Movies.css'
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { useNavigate } from 'react-router'

function Movies() {
    const navigate=useNavigate()
    const handlemovieinfo=()=>{
        debugger
        navigate('/booking')
    }
  return (
    <>
    <Navbar id='nav1' expand="lg" className="bg-dark">
      <Container fluid>
        <Navbar.Brand href="#"><b className="text-light">TicketNest</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> 
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className="row" style={{height:'100vh'}}>
        <div className="col-2 nnav">
            <ul>
                <li><i class="fa-solid fa-house text-light"></i> Home</li>
                <li><i class="fa-solid fa-film text-light"></i>Movies</li>
                <li><i class="fa-solid fa-earth-oceania text-light"></i>Concert</li>
                <li><i class="fa-solid fa-right-from-bracket text-light"></i>Logout</li>
            </ul>
        </div>
        <div className="col-10 rest">
            <div onClick={handlemovieinfo} className="banner d-flex justify-content-center align-items-end pb-3">
                <h4 className='movietitle text-light'><b>Lord of <br />Queens</b></h4>
            </div>
            <div className="movielist">
                <div className="ms-2 m1">
                    <h5 className="text-light mt-3">
                        Recommended for you
                    </h5>
                    <div className="cards">
                    <div className="card1 d-flex justify-content-center align-items-end pb-3">  
                        <h3 className="moviename text-light" >
                            Movie NAme
                        </h3>
                    </div>
                    <div className="card2 d-flex justify-content-center align-items-end pb-3">
                    <h3 className="moviename text-light" >
                            Movie NAme
                        </h3>
                    </div>
                    <div className="card3 d-flex justify-content-center align-items-end pb-3">
                    <h3 className="moviename text-light" >
                            Movie NAme
                        </h3>
                    </div>
                    <div className="card4 d-flex justify-content-center align-items-end pb-3">
                    <h3 className="moviename text-light" >
                            Movie NAme
                        </h3>
                    </div>
                    <div className="card5 d-flex justify-content-center align-items-end pb-3">
                    <h3 className="moviename text-light" >
                            Movie NAme
                        </h3>
                    </div>
                    <div className="card6 d-flex justify-content-center align-items-end pb-3">
                    <h3 className="moviename text-light" >
                            Movie NAme
                        </h3>
                    </div>
                    <div className="card7 d-flex justify-content-center align-items-end pb-3">
                    <h3 className="moviename text-light" >
                            Movie NAme
                        </h3>
                    </div>
                    </div>
                </div>
                <div className=" ms-2 m1">
                    <h5 className="text-light mt-3">
                        Choose by Genre:
                    </h5>
                    <div className="cards">
                    <div className="card1 d-flex justify-content-center align-items-end pb-3">  
                        <h3 className="moviename text-light" >
                            Movie NAme
                        </h3>
                    </div>
                    <div className="card2 d-flex justify-content-center align-items-end pb-3">
                    <h3 className="moviename text-light" >
                            Movie NAme
                        </h3>
                    </div>
                    <div className="card3 d-flex justify-content-center align-items-end pb-3">
                    <h3 className="moviename text-light" >
                            Movie NAme
                        </h3>
                    </div>
                    <div className="card4 d-flex justify-content-center align-items-end pb-3">
                    <h3 className="moviename text-light" >
                            Movie NAme
                        </h3>
                    </div>
                    <div className="card5 d-flex justify-content-center align-items-end pb-3">
                    <h3 className="moviename text-light" >
                            Movie NAme
                        </h3>
                    </div>
                    <div className="card4 d-flex justify-content-center align-items-end pb-3">
                    <h3 className="moviename text-light" >
                            Movie NAme
                        </h3>
                    </div>
                    <div className="card5 d-flex justify-content-center align-items-end pb-3">
                    <h3 className="moviename text-light" >
                            Movie NAme
                        </h3>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Movies
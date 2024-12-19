import React, { useEffect, useState } from 'react';
import { Button, Container, Navbar } from 'react-bootstrap';
import '../pages/Booking.css';
import { getSeatAvailabilityAPI, markedSeatAPI } from '../services/allAPI';

function Bookinng() {
    // State for seat status: false - available, "selected" - user selected, "booked" - confirmed booking
    const [seats, setSeats] = useState(Array(74).fill(false));
    const seatPrice = 125;

    useEffect(() => {
        
        const fetchSeatAvailability = async () => {
            try {
                let moviename="got"
                const response = await getSeatAvailabilityAPI(moviename); 
                console.log(response)
                if (response.success) {
                    setSeats(response.seats); // Set the seat states based on the API response
                } else {
                    console.error('Failed to fetch seat availability');
                }
            } catch (error) {
                console.error('Error fetching seat availability:', error);
            }
        };

        fetchSeatAvailability();
    }, []); // Runs once when the component mounts

    const toggleSeatSelection = (index) => {
        if (seats[index] === "booked") return; // Do nothing if the seat is already booked
        const updatedSeats = [...seats];
        updatedSeats[index] = updatedSeats[index] === "selected" ? false : "selected"; // Toggle between selected and available
        setSeats(updatedSeats);
    };

    const bookSeats = async () => {
        const updatedSeats = seats.map(seat => (seat === "selected" ? "booked" : seat)); // Mark selected seats as booked
        setSeats(updatedSeats);

        try {
            
            let email1 = sessionStorage.getItem('email'); // Get email from session storage
            email1="john@gmail.com"
            for(let i=0;i<updatedSeats.length;i++){
                if(updatedSeats[i]=="booked"){
                    let y=i
                    debugger
                    let reqBody={}
                reqBody.emailid=email1;
                reqBody.seatnumber=y;
                reqBody.movie_name="got"
            const response = await markedSeatAPI(reqBody); // Send booking request to the API
            if (response.data.success) {
                alert("Seats successfully booked!");
            } else {
                alert("Booking failed. Please try again.");
            }
        }
    }
    
        } catch (error) {
            console.error('Error booking seats:', error);
            alert("An error occurred during booking. Please try again.");
        }
    };

    const selectedSeatCount = seats.filter(seat => seat === "selected").length;

    return (
        <>
            <div className="fullbdy" style={{ backgroundColor: 'black', height: '100vh', color: 'white' }}>
                <Navbar expand="lg" className="bg-danger">
                    <Container fluid>
                        <Navbar.Brand href="#"><b className="text-light">TicketNest</b></Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                    </Container>
                </Navbar>

                <div className="siteinfo">
                    <div className="info">
                        <span className="na"></span><span>N/A</span>
                        <span className="booked"></span><span>Booked</span>
                        <span className="notbooked"></span><span>Selected</span>
                    </div>
                    <div className="screen"></div>
                    <div className="seatdata ms-5 mt-3">
                        <div className="row">
                            {seats.map((status, index) => (
                                <div
                                    key={index}
                                    className={`seat ${status}`}
                                    onClick={() => toggleSeatSelection(index)}
                                    style={{
                                        backgroundColor: status === "booked" 
                                            ? 'gray' 
                                            : status === "selected" 
                                                ? 'red' 
                                                : 'white',
                                        margin: '5px',
                                        width: '30px',
                                        height: '30px',
                                        display: 'inline-block',
                                        cursor: status === "booked" ? 'not-allowed' : 'pointer'
                                    }}
                                ></div>
                            ))}
                        </div>
                    </div>
                    <button 
                        className='btn btn-danger text-center mt-5' 
                        onClick={bookSeats} 
                        disabled={selectedSeatCount === 0}
                    >
                        Book Ticket {selectedSeatCount > 0 ? `for ₹${selectedSeatCount * seatPrice}/-` : ""}
                    </button>
                </div>
            </div>
        </>
    );
}

export default Bookinng;

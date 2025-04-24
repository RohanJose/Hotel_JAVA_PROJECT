import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [roomType, setRoomType] = useState('Single');
    const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const reservationData = {
            name,
            email,
            roomType,
            checkInDate,
            checkOutDate,
        };

        axios
            .post('http://localhost:8080/your-servlet-path', reservationData)
            .then((response) => {
                setMessage('Reservation made successfully!');
            })
            .catch((error) => {
                setMessage('There was an error making the reservation.');
            });
    };

    return (
        <div className="App">
            <h1>Hotel Reservation</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Full Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />

                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <label htmlFor="roomType">Room Type:</label>
                <select
                    id="roomType"
                    name="roomType"
                    value={roomType}
                    onChange={(e) => setRoomType(e.target.value)}
                    required
                >
                    <option value="Single">Single</option>
                    <option value="Double">Double</option>
                    <option value="Suite">Suite</option>
                </select>

                <label htmlFor="checkInDate">Check-In Date:</label>
                <input
                    type="date"
                    id="checkInDate"
                    name="checkInDate"
                    value={checkInDate}
                    onChange={(e) => setCheckInDate(e.target.value)}
                    required
                />

                <label htmlFor="checkOutDate">Check-Out Date:</label>
                <input
                    type="date"
                    id="checkOutDate"
                    name="checkOutDate"
                    value={checkOutDate}
                    onChange={(e) => setCheckOutDate(e.target.value)}
                    required
                />

                <button type="submit">Make Reservation</button>
            </form>
            <div>{message}</div>
        </div>
    );
}

export default App;

import { Container, Grid, Alert } from '@mui/material';
import React, { useState } from 'react';
import Booking from '../Booking/Booking/Booking';

const bookings = [
    {
        id: 1,
        img: "https://i.ibb.co/hmTqLmQ/u-4.jpg",
        name: "Flourish Pottery",
        price: "$93",
        description: "Pottery is the process and the products of forming vessels and other objects with clay and other ceramic materials, which are fired at high temperatures to give them a hard, durable form."
    },
    {
        id: 2,
        img: "https://i.ibb.co/BPRMshs/unnamed.jpg",
        name: "Flourish Pottery",
        price: "$99",
        description: "Pottery is the process and the products of forming vessels and other objects with clay and other ceramic materials, which are fired at high temperatures to give them a hard, durable form."
    },
    {
        id: 3,
        img: "https://i.ibb.co/p3s4r12/images.jpg",
        name: "Flourish Pottery",
        price: "$96",
        description: "Pottery is the process and the products of forming vessels and other objects with clay and other ceramic materials, which are fired at high temperatures to give them a hard, durable form."
    },
    {
        id: 4,
        img: "https://i.ibb.co/b5bRytR/stylish-ceramic-pot-500x500.jpg",
        name: "Flourish Pottery",
        price: "$95",
        description: "Pottery is the process and the products of forming vessels and other objects with clay and other ceramic materials, which are fired at high temperatures to give them a hard, durable form."
    },
    {
        id: 5,
        img: "https://i.ibb.co/KFBVgnk/u-2.jpg",
        name: "Flourish Pottery",
        price: "$88",
        description: "Pottery is the process and the products of forming vessels and other objects with clay and other ceramic materials, which are fired at high temperatures to give them a hard, durable form."
    },
    {
        id: 6,
        img: "https://i.ibb.co/zrd6Zch/u-3.jpg",
        name: "Flourish Pottery",
        price: "$89",
        description: "Pottery is the process and the products of forming vessels and other objects with clay and other ceramic materials, which are fired at high temperatures to give them a hard, durable form."
    },
    {
        id: 7,
        img: "https://i.ibb.co/BPRMshs/unnamed.jpg",
        name: "Flourish Pottery",
        price: "$90",
        description: "Pottery is the process and the products of forming vessels and other objects with clay and other ceramic materials, which are fired at high temperatures to give them a hard, durable form."
    },
    {
        id: 8,
        img: "https://i.ibb.co/hmTqLmQ/u-4.jpg",
        name: "Flourish Pottery",
        price: "$46",
        description: "Pottery is the process and the products of forming vessels and other objects with clay and other ceramic materials, which are fired at high temperatures to give them a hard, durable form."
    },
    {
        id: 9,
        img: "https://i.ibb.co/Lk0wsw7/2.jpg",
        name: "Flourish Pottery",
        price: "$86",
        description: "Pottery is the process and the products of forming vessels and other objects with clay and other ceramic materials, which are fired at high temperatures to give them a hard, durable form."
    },
    {
        id: 10,
        img: "https://i.ibb.co/p3s4r12/images.jpg",
        name: "Flourish Pottery",
        price: "$91",
        description: "Pottery is the process and the products of forming vessels and other objects with clay and other ceramic materials, which are fired at high temperatures to give them a hard, durable form."
    },
    {
        id: 11,
        img: "https://i.ibb.co/b5bRytR/stylish-ceramic-pot-500x500.jpg",
        name: "Flourish Pottery",
        price: "$68",
        description: "Pottery is the process and the products of forming vessels and other objects with clay and other ceramic materials, which are fired at high temperatures to give them a hard, durable form."
    },
    {
        id: 12,
        img: "https://i.ibb.co/KFBVgnk/u-2.jpg",
        name: "Flourish Pottery",
        price: "$65",
        description: "Pottery is the process and the products of forming vessels and other objects with clay and other ceramic materials, which are fired at high temperatures to give them a hard, durable form."
    },
    {
        id: 13,
        img: "https://i.ibb.co/zrd6Zch/u-3.jpg",
        name: "Flourish Pottery",
        price: "$53",
        description: "Pottery is the process and the products of forming vessels and other objects with clay and other ceramic materials, which are fired at high temperatures to give them a hard, durable form."
    },
    {
        id: 14,
        img: "https://i.ibb.co/BPRMshs/unnamed.jpg",
        name: "Flourish Pottery",
        price: "$86",
        description: "Pottery is the process and the products of forming vessels and other objects with clay and other ceramic materials, which are fired at high temperatures to give them a hard, durable form."
    },
    {
        id: 15,
        img: "https://i.ibb.co/hmTqLmQ/u-4.jpg",
        name: "Flourish Pottery",
        price: "$96",
        description: "Pottery is the process and the products of forming vessels and other objects with clay and other ceramic materials, which are fired at high temperatures to give them a hard, durable form."
    },
    {
        id: 16,
        img: "https://i.ibb.co/Lk0wsw7/2.jpg",
        name: "Flourish Pottery",
        price: "$82",
        description: "Pottery is the process and the products of forming vessels and other objects with clay and other ceramic materials, which are fired at high temperatures to give them a hard, durable form."
    },
    {
        id: 17,
        img: "https://i.ibb.co/p3s4r12/images.jpg",
        name: "Flourish Pottery",
        price: "$87",
        description: "Pottery is the process and the products of forming vessels and other objects with clay and other ceramic materials, which are fired at high temperatures to give them a hard, durable form."
    },
    {
        id: 18,
        img: "https://i.ibb.co/hmTqLmQ/u-4.jpg",
        name: "Flourish Pottery",
        price: "$93",
        description: "Pottery is the process and the products of forming vessels and other objects with clay and other ceramic materials, which are fired at high temperatures to give them a hard, durable form."
    },
    {
        id: 19,
        img: "https://i.ibb.co/KFBVgnk/u-2.jpg",
        name: "Flourish Pottery",
        price: "$97",
        description: "Pottery is the process and the products of forming vessels and other objects with clay and other ceramic materials, which are fired at high temperatures to give them a hard, durable form."
    },
    {
        id: 20,
        img: "https://i.ibb.co/p3s4r12/images.jpg",
        name: "Flourish Pottery",
        price: "$95",
        description: "Pottery is the process and the products of forming vessels and other objects with clay and other ceramic materials, which are fired at high temperatures to give them a hard, durable form."
    }
]

const Explore = () => {
    const [bookingSuccess, setBookingSuccess] = useState(false);
    return (
        <Container>
            <h1 className="text-center text-title mt-3 mb-3 py-4">Our All Pottery Is Here</h1>
            {bookingSuccess && <Alert severity="success">Your Order Placed Successfully</Alert>} <br />
            <Grid container spacing={2}>
                {
                    bookings.map(booking=><Booking
                        key={booking.id}
                        booking={booking}
                        setBookingSuccess={setBookingSuccess}
                    ></Booking>)
                }
            </Grid>
        </Container>
    );
};

export default Explore;
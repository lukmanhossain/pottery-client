import { Container, Grid } from '@mui/material';
import React from 'react';
import Booking from '../Booking/Booking/Booking';

const bookings = [
    {
        id: 1,
        img: "https://i.ibb.co/hmTqLmQ/u-4.jpg",
        name: "Flourish Pottery",
        price: "$95",
        description: "Pottery is the process and the products of forming vessels and other objects with clay and other ceramic materials, which are fired at high temperatures to give them a hard, durable form."
    },
    {
        id: 2,
        img: "https://i.ibb.co/hmTqLmQ/u-4.jpg",
        name: "Flourish Pottery",
        price: "$95",
        description: "Pottery is the process and the products of forming vessels and other objects with clay and other ceramic materials, which are fired at high temperatures to give them a hard, durable form."
    },
    {
        id: 3,
        img: "https://i.ibb.co/hmTqLmQ/u-4.jpg",
        name: "Flourish Pottery",
        price: "$95",
        description: "Pottery is the process and the products of forming vessels and other objects with clay and other ceramic materials, which are fired at high temperatures to give them a hard, durable form."
    },
    {
        id: 4,
        img: "https://i.ibb.co/hmTqLmQ/u-4.jpg",
        name: "Flourish Pottery",
        price: "$95",
        description: "Pottery is the process and the products of forming vessels and other objects with clay and other ceramic materials, which are fired at high temperatures to give them a hard, durable form."
    },
    {
        id: 5,
        img: "https://i.ibb.co/hmTqLmQ/u-4.jpg",
        name: "Flourish Pottery",
        price: "$95",
        description: "Pottery is the process and the products of forming vessels and other objects with clay and other ceramic materials, which are fired at high temperatures to give them a hard, durable form."
    },
    {
        id: 6,
        img: "https://i.ibb.co/hmTqLmQ/u-4.jpg",
        name: "Flourish Pottery",
        price: "$95",
        description: "Pottery is the process and the products of forming vessels and other objects with clay and other ceramic materials, which are fired at high temperatures to give them a hard, durable form."
    },
    {
        id: 7,
        img: "https://i.ibb.co/hmTqLmQ/u-4.jpg",
        name: "Flourish Pottery",
        price: "$95",
        description: "Pottery is the process and the products of forming vessels and other objects with clay and other ceramic materials, which are fired at high temperatures to give them a hard, durable form."
    },
    {
        id: 8,
        img: "https://i.ibb.co/hmTqLmQ/u-4.jpg",
        name: "Flourish Pottery",
        price: "$95",
        description: "Pottery is the process and the products of forming vessels and other objects with clay and other ceramic materials, which are fired at high temperatures to give them a hard, durable form."
    },
    {
        id: 9,
        img: "https://i.ibb.co/hmTqLmQ/u-4.jpg",
        name: "Flourish Pottery",
        price: "$95",
        description: "Pottery is the process and the products of forming vessels and other objects with clay and other ceramic materials, which are fired at high temperatures to give them a hard, durable form."
    },
    {
        id: 10,
        img: "https://i.ibb.co/hmTqLmQ/u-4.jpg",
        name: "Flourish Pottery",
        price: "$95",
        description: "Pottery is the process and the products of forming vessels and other objects with clay and other ceramic materials, which are fired at high temperatures to give them a hard, durable form."
    },
    {
        id: 11,
        img: "https://i.ibb.co/hmTqLmQ/u-4.jpg",
        name: "Flourish Pottery",
        price: "$95",
        description: "Pottery is the process and the products of forming vessels and other objects with clay and other ceramic materials, which are fired at high temperatures to give them a hard, durable form."
    },
    {
        id: 12,
        img: "https://i.ibb.co/hmTqLmQ/u-4.jpg",
        name: "Flourish Pottery",
        price: "$95",
        description: "Pottery is the process and the products of forming vessels and other objects with clay and other ceramic materials, which are fired at high temperatures to give them a hard, durable form."
    },
    {
        id: 13,
        img: "https://i.ibb.co/hmTqLmQ/u-4.jpg",
        name: "Flourish Pottery",
        price: "$95",
        description: "Pottery is the process and the products of forming vessels and other objects with clay and other ceramic materials, which are fired at high temperatures to give them a hard, durable form."
    },
    {
        id: 14,
        img: "https://i.ibb.co/hmTqLmQ/u-4.jpg",
        name: "Flourish Pottery",
        price: "$95",
        description: "Pottery is the process and the products of forming vessels and other objects with clay and other ceramic materials, which are fired at high temperatures to give them a hard, durable form."
    },
    {
        id: 15,
        img: "https://i.ibb.co/hmTqLmQ/u-4.jpg",
        name: "Flourish Pottery",
        price: "$95",
        description: "Pottery is the process and the products of forming vessels and other objects with clay and other ceramic materials, which are fired at high temperatures to give them a hard, durable form."
    },
    {
        id: 16,
        img: "https://i.ibb.co/hmTqLmQ/u-4.jpg",
        name: "Flourish Pottery",
        price: "$95",
        description: "Pottery is the process and the products of forming vessels and other objects with clay and other ceramic materials, which are fired at high temperatures to give them a hard, durable form."
    },
    {
        id: 17,
        img: "https://i.ibb.co/hmTqLmQ/u-4.jpg",
        name: "Flourish Pottery",
        price: "$95",
        description: "Pottery is the process and the products of forming vessels and other objects with clay and other ceramic materials, which are fired at high temperatures to give them a hard, durable form."
    },
    {
        id: 18,
        img: "https://i.ibb.co/hmTqLmQ/u-4.jpg",
        name: "Flourish Pottery",
        price: "$95",
        description: "Pottery is the process and the products of forming vessels and other objects with clay and other ceramic materials, which are fired at high temperatures to give them a hard, durable form."
    },
    {
        id: 19,
        img: "https://i.ibb.co/hmTqLmQ/u-4.jpg",
        name: "Flourish Pottery",
        price: "$95",
        description: "Pottery is the process and the products of forming vessels and other objects with clay and other ceramic materials, which are fired at high temperatures to give them a hard, durable form."
    },
    {
        id: 20,
        img: "https://i.ibb.co/hmTqLmQ/u-4.jpg",
        name: "Flourish Pottery",
        price: "$95",
        description: "Pottery is the process and the products of forming vessels and other objects with clay and other ceramic materials, which are fired at high temperatures to give them a hard, durable form."
    }
]

const Explore = () => {
    return (
        <Container>
            <h1 className="text-center text-title mt-3 mb-3 py-4">Our All Pottery Is Here</h1>
            <Grid container spacing={2}>
                {
                    bookings.map(booking=><Booking
                        key={booking.id}
                        booking={booking}
                    ></Booking>)
                }
            </Grid>
        </Container>
    );
};

export default Explore;
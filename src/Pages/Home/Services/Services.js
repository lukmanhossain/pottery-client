import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Service from '../Service/Service';


const services = [
    {
        // img: "https://i.ibb.co/1bK1gtB/8.jpg",
        img: "https://i.ibb.co/x1YWY27/download-2.jpg",
        name: "Banding Wheel",
        price:"$87",
        description: "Pottery is the process and the products of forming vessels and other objects with clay and other ceramic materials, which are fired at high temperatures to give them a hard, durable form."
    },
    {
        img: "https://i.ibb.co/x1YWY27/download-2.jpg",
        name: "Banding Wheel",
        price:"$95",
        description: "Pottery is the process and the products of forming vessels and other objects with clay and other ceramic materials, which are fired at high temperatures to give them a hard, durable form."
    },
    {
        img: "https://i.ibb.co/x1YWY27/download-2.jpg",
        name: "Banding Wheel",
        price:"$84",
        description: "Pottery is the process and the products of forming vessels and other objects with clay and other ceramic materials, which are fired at high temperatures to give them a hard, durable form."
    },
    {
        img: "https://i.ibb.co/x1YWY27/download-2.jpg",
        name: "Banding Wheel",
        price:"$93",
        description: "Pottery is the process and the products of forming vessels and other objects with clay and other ceramic materials, which are fired at high temperatures to give them a hard, durable form."
    },
    {
        img: "https://i.ibb.co/x1YWY27/download-2.jpg",
        name: "Banding Wheel",
        price:"$80",
        description: "Pottery is the process and the products of forming vessels and other objects with clay and other ceramic materials, which are fired at high temperatures to give them a hard, durable form."
    }
]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
             <h2 className="text-center text-title mt-4 mb-4 py-2">New Arrivals Pottery</h2>
            <Container>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service
                            key={service.name}
                            service={service}
                        ></Service>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;
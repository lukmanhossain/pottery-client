import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import New from '../New/New';


const news = [
    {
        img: "https://i.ibb.co/1bK1gtB/8.jpg",
        name: "Vase Pottery",
        price: "$87",
        description: "Pottery is the process and the products of forming vessels and other objects with clay and other ceramic materials."
    },
    {
        img: "https://i.ibb.co/KFBVgnk/u-2.jpg",
        name: "Fine Glazes",
        price: "$96",
        description: "Pottery is the process and the products of forming vessels and other objects with clay and other ceramic materials."
    },
    {
        img: "https://i.ibb.co/zrd6Zch/u-3.jpg",
        name: "Clay Art ",
        price: "$85",
        description: "Pottery is the process and the products of forming vessels and other objects with clay and other ceramic materials."
    },
    {
        img: "https://i.ibb.co/BPRMshs/unnamed.jpg",
        name: "Flourish Pottery",
        price: "$98",
        description: "Pottery is the process and the products of forming vessels and other objects with clay and other ceramic materials."
    },
    {
        img: "https://i.ibb.co/p3s4r12/images.jpg",
        name: "Clay Works",
        price: "$93",
        description: "Pottery is the process and the products of forming vessels and other objects with clay and other ceramic materials."
    },
    {
        img: "https://i.ibb.co/Lk0wsw7/2.jpg",
        name: "Fine Glazy",
        price: "$97",
        description: "Pottery is the process and the products of forming vessels and other objects with clay and other ceramic materials."
    }
]

const News = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
            <h2 className="text-center text-title mt-4 mb-4 py-2">Upcoming Popular Pottery</h2>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        news.map(news => <New
                            key={news.name}
                            new={news}
                        ></New>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default News;
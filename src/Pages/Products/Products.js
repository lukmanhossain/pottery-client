import React from 'react';
// , { useState }
import Grid from '@mui/material/Grid';
import { Alert, Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import BuyNow from '../BuyNow/BuyNow/BuyNow';

const buys = [
    {
        id: 1,
        img: "https://i.ibb.co/NLRCR0z/1.jpg",
        name: "CALFEE BAMBOO BICYCLE FRAMES",
        price: "$100.00",
        description: "an interval of time during which a sequence of a recurring succession of events or phenomena is completed"
    },
    {
        id: 2,
        img: "https://i.ibb.co/0rdrVFP/2.jpg",
        name: "CANONDALE MOUNTAIN SPORT BIKE",
        price: "$580.00",
        description: "an interval of time during which a sequence of a recurring succession of events or phenomena is completed"
    },
    {
        id: 3,
        img: "https://i.ibb.co/JKLLL3Y/3.jpg",
        name: "LIFECYCLE MOUNTAIN SPORT ELECTRIC BIKE",
        price: "$490.00",
        description: "an interval of time during which a sequence of a recurring succession of events or phenomena is completed"
    },
    {
        id: 4,
        img: "https://i.ibb.co/HV6t7r9/4.jpg",
        name: "LIFECYCLE STREET SPORT ELECTRIC BIKE",
        price: "$210.00",
        description: "an interval of time during which a sequence of a recurring succession of events or phenomena is completed"
    },
    {
        id: 5,
        img: "https://i.ibb.co/Nmn1Mxg/5.jpg",
        name: "FELT B14 2012",
        price: "$310.00",
        description: "an interval of time during which a sequence of a recurring succession of events or phenomena is completed. A bicycle rider is called a cyclist, or bicyclist."
    },
    {
        id: 6,
        img: "https://i.ibb.co/44KH8f7/6.jpg",
        name: "MANTIS ORCHID FULL SUSPENSION",
        price: "$390.00",
        description: "an interval of time during which a sequence of a recurring succession of events or phenomena is completed"
    },
    {
        id: 7,
        img: "https://i.ibb.co/YtZCFx9/7.jpg",
        name: "MERAX FINISS 26 ALUMINUM 21 SPEED",
        price: "$180.00",
        description: "an interval of time during which a sequence of a recurring succession of events or phenomena is completed"
    },
    {
        id: 8,
        img: "https://i.ibb.co/4dKH5H6/8.jpg",
        name: "MONGOOSE MEN'S STATUS 2.2",
        price: "$350.00",
        description: "an interval of time during which a sequence of a recurring succession of events or phenomena is completed"
    },
    {
        id: 9,
        img: "https://i.ibb.co/GvC1X31/9.jpg",
        name: "THE RANGER 3.0",
        price: "$520.00",
        description: "an interval of time during which a sequence of a recurring succession of events or phenomena is completed. A bicycle rider is called a cyclist, or bicyclist."
    },
    {
        id: 10,
        img: "https://i.ibb.co/PcHFVHK/10.jpg",
        name: "FELT B14 2013",
        price: "$480.00",
        description: "an interval of time during which a sequence of a recurring succession of events or phenomena is completed"
    },
    {
        id: 11,
        img: "https://i.ibb.co/GvC1X31/9.jpg",
        name: "THE RANGER 2.0",
        price: "$390.00",
        description: "an interval of time during which a sequence of a recurring succession of events or phenomena is completed"
    },
    {
        id: 12,
        img: "https://i.ibb.co/PcHFVHK/10.jpg",
        name: "MONGOOSE MEN'S STATUS 2.2",
        price: "$550.00",
        description: "an interval of time during which a sequence of a recurring succession of events or phenomena is completed"
    },
    {
        id: 13,
        img: "https://i.ibb.co/GvC1X31/9.jpg",
        name: "CANONDALE MOUNTAIN BIKE",
        price: "$250.00",
        description: "an interval of time during which a sequence of a recurring succession of events or phenomena is completed"
    },
    {
        id: 14,
        img: "https://i.ibb.co/PcHFVHK/10.jpg",
        name: "Tune-ups & Builds",
        price: "$290.00",
        description: "an interval of time during which a sequence of a recurring succession of events or phenomena is completed"
    },
    {
        id: 15,
        img: "https://i.ibb.co/GvC1X31/9.jpg",
        name: "FELT B14 2014",
        price: "$490.00",
        description: "an interval of time during which a sequence of a recurring succession of events or phenomena is completed"
    },
    {
        id: 16,
        img: "https://i.ibb.co/4dKH5H6/8.jpg",
        name: "FELT B14 2014",
        price: "$470.00",
        description: "an interval of time during which a sequence of a recurring succession of events or phenomena is completed"
    },
    {
        id: 17,
        img: "https://i.ibb.co/HV6t7r9/4.jpg",
        name: "FELT B14 2014",
        price: "$450.00",
        description: "an interval of time during which a sequence of a recurring succession of events or phenomena is completed"
    },
    {
        id: 18,
        img: "https://i.ibb.co/4dKH5H6/8.jpg",
        name: "FELT B14 2014",
        price: "$530.00",
        description: "an interval of time during which a sequence of a recurring succession of events or phenomena is completed"
    },
    {
        id: 19,
        img: "https://i.ibb.co/GvC1X31/9.jpg",
        name: "FELT B14 2014",
        price: "$580.00",
        description: "an interval of time during which a sequence of a recurring succession of events or phenomena is completed"
    },
    {
        id: 20,
        img: "https://i.ibb.co/4dKH5H6/8.jpg",
        name: "FELT B14 2014",
        price: "$365.00",
        description: "an interval of time during which a sequence of a recurring succession of events or phenomena is completed"
    }
]

const Products = () => {
    // const [buySuccess, setBuySuccess] = useState(false);
    return (
        <Container>
            <Typography sx={{ fontWeight: 500, m: 3 }} variant="h4" component="div">
                Popular Products In Store
            </Typography>
            {/* {buySuccess && <Alert severity="success">Your Order Placed Successfully</Alert>} <br /> */}
            <Grid container spacing={2}>
                {
                    buys.map(buynow => <BuyNow
                        key={buynow.id}
                        buynow={buynow}
                        // setBuySuccess={setBuySuccess}
                    ></BuyNow>)
                }
            </Grid>
        </Container>
    );
};

export default Products;
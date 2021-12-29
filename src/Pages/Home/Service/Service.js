import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button } from '@mui/material';


const Service = (props) => {
    const { name, img, description, price } = props.service;
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 275, border: 1, borderColor: 'grey.500', borderRadius: 1, boxShadow: 3 }}>
                <CardMedia
                    component="img"
                    style={{ width: '190px', height: '200px', margin: '0 auto' }}
                    image={img}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography sx={{ color: 'success.main' }} variant="h6" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" sx={{textAlign: "left", pl:"3"}}>
                        {description}
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-around', borderTop: "1px solid #ddd", pt: 2 }}>
                    <Typography variant="h5" component="div" >
                        {price}
                    </Typography>
                    <Box style={{ textDecoration: 'none' }}><Button sx={{ color: 'success.main' }} variant="text">Explore More</Button></Box>
                    </Box>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default Service;
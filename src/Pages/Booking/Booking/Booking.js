import { Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import BookingModdal from '../BookingModal/BookingModdal';

const Booking = ({booking}) => {
    const { name, img, price, description} = booking;
    const [openBooking, setBookingOpen] = React.useState(false);
    const handleBookingOpen = () => setBookingOpen(true);
    const handleBookingClose = () => setBookingOpen(false);
    return (
        <>
           <Grid item xs={12} sm={6} md={4} >
                <Card sx={{ minWidth: 275, borderRadius: 1 }}>
                    <CardMedia
                        component="img"
                        style={{ width: '310px', height: '310px', margin: '0 auto' }}
                        image={img}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography sx={{ color: 'success.main' }} variant="h6" component="div">
                            {name}
                        </Typography>
                        <Typography sx={{ color: 'text.secondary' }} variant="h6" component="div">
                            Price: {price}
                        </Typography>
                        <Typography variant="body2">
                            {description}
                        </Typography> 
                        <Button onClick={handleBookingOpen} sx={{ mt: 1 }} variant="contained">Buy Now</Button>
                    </CardContent>
                </Card>
            </Grid> 
            <BookingModdal
                booking={booking}
                openBooking={openBooking}
                handleBookingClose={handleBookingClose}
                // setBuySuccess={setBuySuccess}
            ></BookingModdal>
        </>
    );
};

export default Booking;
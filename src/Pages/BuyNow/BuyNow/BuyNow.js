import React from 'react';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import BuyNowModal from '../BuyNowModal/BuyNowModal';

const BuyNow = ({ buynow, setBuySuccess }) => {
    const { name, img, price, description } = buynow;
    const [openBuyNow, setBuyNowOpen] = React.useState(false);
    const handleBuyNowOpen = () => setBuyNowOpen(true);
    const handleBuyNowClose = () => setBuyNowOpen(false);

    return (
        <>
            <Grid item xs={12} sm={6} md={4} >
                <Card sx={{ minWidth: 275, borderRadius: 1 }}>
                    <CardMedia
                        component="img"
                        style={{ width: '310px', height: '165px', margin: '0 auto' }}
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
                        <Button onClick={handleBuyNowOpen} sx={{ mt: 1 }} variant="contained">Buy Now</Button>
                    </CardContent>
                </Card>
            </Grid>
            <BuyNowModal
                buynow={buynow}
                openBuyNow={openBuyNow}
                handleBuyNowClose={handleBuyNowClose}
                setBuySuccess={setBuySuccess}
            ></BuyNowModal>
        </>
    );
};

export default BuyNow;
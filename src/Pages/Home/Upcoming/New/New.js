import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const New = (props) => {
    const { name, img, price, description } = props.new;
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 275, border: 1, borderColor: 'grey.500', borderRadius: 1 }}>
                <CardMedia
                    component="img"
                    style={{ width: '350px', height: '335px', margin: '0 auto' }}
                    image={img}
                    alt="green iguana"
                />
                <CardContent>
                <Typography sx={{ color: 'success.main', fontWeight: 'bold' }} variant="h6" component="div">
                        {name}
                    </Typography>
                    <Typography sx={{ color: 'black' }} variant="h6" component="div">
                        Price: {price}
                    </Typography>
                    <Typography variant="body2">
                        {description}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default New;
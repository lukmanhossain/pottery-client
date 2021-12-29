import React from 'react';
import './Banner.css'
import Box from '@mui/material/Box';
import { Grid, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <Box className="banner">
      <Container>
        <Grid container spacing={2}>
          <Grid item sx={{ width: "50%", textAlign: "left" }}>
            <Typography variant="h6" >
              World Best Quality
            </Typography>
            <Typography sx={{ fontFamily: 'Shizuru', fontWeight: "550", pb: 0 }} variant="h2" >
              Pottery Is Here
            </Typography>
            <Typography sx={{ fontSize: "20px", fontFamily: 'Raleway', lineHeight: "20px", pb: 0 }} >
            Pottery is the process and the products of forming vessels and other objects with clay and other ceramic materials, which are fired at high temperatures to give them a hard, durable form. Major types include earthenware, stoneware and porcelain.
            </Typography>
            <Link to="/">
              <div className="custom-btn btn-one">
                <span>Shop Now</span>
              </div>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Banner;
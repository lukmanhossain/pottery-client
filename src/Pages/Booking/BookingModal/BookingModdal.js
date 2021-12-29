import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import Button from '@mui/material/Button';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 352,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const BookingModdal = ({openBooking, handleBookingClose, booking, }) => {
    const { name, price, value } = booking;

    const handleBookingSubmit = e => {
        alert('Submitting');
        handleBookingClose();
        e.preventDefault();
    }

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openBooking}
            onClose={handleBookingClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={openBooking}>
                <Box sx={style}>
                    <Typography sx={{ mb: 2 }} id="transition-modal-title" variant="h6" component="h3">
                        Product Name: {name}
                    </Typography>
                    <form onSubmit={handleBookingSubmit}>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                disabled
                                label="Your Order Date"
                                name="date"
                                value={value}
                                onChange={(newValue) => {
                                    // setValue(newValue);
                                }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                        <TextField
                            sx={{ width: '87%', mt: 1.5 }}
                            label="Your Name"
                            id="outlined-size-small"
                            name="name"
                            // onBlur={handleOnBlur}
                            // defaultValue={user.displayName}
                            size="small"
                        />
                        <TextField
                            sx={{ width: '87%', mt: 1.5 }}
                            label="Your Email"
                            id="outlined-size-small"
                            name="email"
                            // onBlur={handleOnBlur}
                            // defaultValue={user.email}
                            size="small"
                        />
                        <TextField
                            sx={{ width: '87%', mt: 1.5 }}
                            label="Phone Number"
                            id="outlined-size-small"
                            name="phone"
                            // onBlur={handleOnBlur}
                            size="small"
                        />
                        <TextField
                            disabled
                            label="Price"
                            sx={{ width: '87%', mt: 1.5, mb: 2 }}
                            id="outlined-size-small"
                            defaultValue={price}
                            size="small"
                        />
                        <Button type="submit" variant="outlined">Place Order</Button>
                    </form>
                </Box>
            </Fade>
        </Modal>
    );
};

export default BookingModdal;
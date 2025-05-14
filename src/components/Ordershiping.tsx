import { useState } from 'react';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Box, Card, Grid, Modal, Button, TextField, Typography, IconButton } from '@mui/material';

import { TrackingStepper } from './TrackingStepper';

export default function Ordershiping() {
  const [quantityBox, setQuantityBox] = useState(1);
  const [quantityCards, setQuantityCards] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const [openSuccessModal, setOpenSuccessModal] = useState(false);
  const [openTrackModal, setOpenTrackModal] = useState(false);

  const [selectedProduct, setSelectedProduct] = useState<{
    title: string;
    image: string;
    orderId: string;
    date: string;
    shippingMethod: string;
    quantity: number;
    price: string;
    shippingCost: string;
    tax: string;
    total: string;
  } | null>(null);

  const handleIncreaseBox = () => setQuantityBox((prev) => prev + 1);
  const handleDecreaseBox = () => setQuantityBox((prev) => (prev > 1 ? prev - 1 : 1));
  const handleIncreaseCards = () => setQuantityCards((prev) => prev + 1);
  const handleDecreaseCards = () => setQuantityCards((prev) => (prev > 1 ? prev - 1 : 1));

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const handlePlaceOrder = () => {
    setOpenModal(false);
    setOpenSuccessModal(true);
  };

  const handleCloseSuccessModal = () => {
    setOpenSuccessModal(false);
  };
  const handleOpenTrackModal = () => {
    setOpenSuccessModal(false); // Close success modal
    setOpenTrackModal(true); // Open tracking modal
  };

  // Handler to close tracking modal
  const handleCloseTrackModal = () => {
    setOpenTrackModal(false);
  };
  return (
    <div className="min-h-screen p-6">
      <Grid
        container
        spacing={4}
        justifyContent="center"
        direction={{ xs: 'column', lg: 'row' }}
        sx={{ px: { xs: 2, md: 4 } }}
      >
        {/* Left Side Content */}
        <Grid size={{ xs: 12, lg: 8 }}>
          {' '}
          {/* Left Column */}
          <Card
            sx={{
              backgroundColor: '#5E5C6E42',
              color: 'white',
              p: { xs: 2, sm: 3 },
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
              borderRadius: '16px',
              width: '100%', // 👈 responsive width
              maxWidth: '800px', // 👈 limits stretch on larger screens
              mx: 'auto', // 👈 centers it horizontally
              boxSizing: 'border-box',
            }}
          >
            {/* Math Adventure Box */}
            <ProductItem
              title="Math Adventure Box"
              image="/image3.png"
              quantity={quantityBox}
              onDecrease={handleDecreaseBox}
              onIncrease={handleIncreaseBox}
            />

            <hr style={{ borderColor: '#87739E' }} />

            {/* Math Adventure Cards */}
            <ProductItem
              title="Math Adventure Cards"
              subtitle="Quantity (15-1000 decks)"
              image="/Frame 2085663788.png"
              quantity={quantityCards}
              onDecrease={handleDecreaseCards}
              onIncrease={handleIncreaseCards}
            />

            <hr style={{ borderColor: '#87739E' }} />

            {/* Material Finish, Card Stock, Box Type */}
            <Box display="flex" flexDirection="column" gap={2}>
              {['Material Finish', 'Card Stock', 'Box Type'].map((label, index) => (
                <TextField
                  key={index}
                  label={
                    label === 'Material Finish'
                      ? 'Gloss Finish'
                      : label === 'Card Stock'
                        ? 'Casino Linen'
                        : '350gsm Tuck Box'
                  }
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    style: { color: 'white', border: '2px solid #87739E' },
                    endAdornment: <ArrowDropDownIcon sx={{ color: 'white' }} />,
                  }}
                />
              ))}
            </Box>
          </Card>
          <Box mt={3}>
            <PaymentMethodCard />
          </Box>
          <Box mt={2}>
            <ShippingMethodCard />
          </Box>
        </Grid>

        {/* Right Side Content */}
        <Grid size={{ xs: 12, lg: 4 }}>
          {' '}
          {/* Right Column */}
          <Card
            sx={{
              backgroundColor: '#29193C54',
              color: 'white',
              p: { xs: 3, sm: 4 },
              borderRadius: '16px',
              border: '1px solid #555',
              width: '100%', // 👈 responsive width
              maxWidth: '800px', // 👈 limits stretch on larger screens
              mx: 'auto', // 👈 centers it horizontally
              height: 'auto',
              boxSizing: 'border-box',
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 4 }}>
              Order Summary
            </Typography>

            <Box display="flex" flexDirection="column" gap={2} color="#FFFFFF7D">
              <SummaryItem label="Cards ($3.50 Per Deck)" price="$975.00" />
              <SummaryItem label="Boxes ($0.50 Per Box)" price="$735.00" />
              <SummaryItem label="Shipping (DHL Express, Sydney Australia)" price="$35.00" />
              <SummaryItem label="Tax" price="$25.00" />

              <hr style={{ borderColor: '#FFFFFFDB', margin: '12px 0' }} />

              <Box display="flex" justifyContent="space-between">
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'white' }}>
                  Total
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#FFFFFFDB' }}>
                  $1,010.00
                </Typography>
              </Box>
            </Box>

            <Button
              variant="contained"
              onClick={handleOpenModal}
              fullWidth
              sx={{
                mt: 4,
                background: 'linear-gradient(90deg, #139EBC 0%, #AA1ECD 100%)',
                color: 'white',
                borderRadius: '50px',
                fontWeight: 'bold',
                border: '1px solid #FFFFFF',
                textTransform: 'none',
                py: 1.5,
                '&:hover': {
                  background: 'linear-gradient(90deg, #139EBC 0%, #AA1ECD 100%)',
                },
              }}
            >
              Confirm Your Order
            </Button>
          </Card>
        </Grid>
      </Grid>

      {/* popup1 */}

      {/* Order Confirmation Modal */}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="order-confirmation-modal"
        aria-describedby="order-confirmation-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '5%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: { xs: '90%', sm: '80%', md: '600px' },
            maxHeight: '95vh',
            bgcolor: '#2f2439',
            border: '2px solid #6c6e69',
            boxShadow: 24,
            p: { xs: 2, sm: 3 },
            borderRadius: '20px',
            color: 'white',
            overflow: 'hidden', // prevents outer overflow
          }}
        >
          {/* INNER SCROLLABLE CONTENT WRAPPER */}
          <Box
            sx={{
              maxHeight: '80vh', // 👈 proper inner height for scroll
              overflowY: 'auto',
              pr: 1.5,
              '&::-webkit-scrollbar': {
                width: '8px',
              },
              '&::-webkit-scrollbar-track': {
                backgroundColor: '#3e3e3e',
                borderRadius: '10px',
              },
              '&::-webkit-scrollbar-thumb': {
                background: 'linear-gradient(180deg, #8E2DE2, #4A00E0)',
                borderRadius: '10px',
              },
              '&::-webkit-scrollbar-thumb:hover': {
                background: 'linear-gradient(180deg, #a452f5, #6939f0)',
              },
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
              Order Confirmation
            </Typography>

            <Box
              sx={{
                width: 150,
                height: 150,
                backgroundColor: '#8f8d89',
                borderRadius: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
                mx: 'auto',
                mt: 2,
              }}
            >
              <Box
                component="img"
                src="/image3.png"
                alt="Math Adventure Box"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  p: 1,
                }}
              />
            </Box>

            <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 2, textAlign: 'center' }}>
              Math Adventure Box
            </Typography>

            <hr style={{ borderColor: '#87739E', margin: '16px 0' }} />

            <Box>
              <Typography variant="subtitle1" sx={{ mb: 1 }}>
                <b>Order Details:</b>
              </Typography>

              <Box sx={{ color: '#e8e3e3', fontSize: '14px' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <span>Order ID:</span>
                  <span>#080-2025-001</span>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <span>Date:</span>
                  <span>Jan 16, 2025</span>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <span>Shipping:</span>
                  <span>DHL Express</span>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <span>Quantity:</span>
                  <span>{quantityBox}</span>
                </Box>
              </Box>

              <hr style={{ borderColor: '#87739E', margin: '16px 0' }} />

              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
                Order Summary
              </Typography>

              <Box sx={{ fontSize: '14px' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <span>Subtotal:</span>
                  <span>$225.00</span>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <span>Shipping:</span>
                  <span>$35.00</span>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <span>Tax:</span>
                  <span>$26.00</span>
                </Box>
              </Box>

              <hr style={{ borderColor: '#a6a5a2', margin: '16px 0' }} />

              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                  Total
                </Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#87739E' }}>
                  $288.00
                </Typography>
              </Box>

              <Button
                variant="contained"
                fullWidth
                onClick={handlePlaceOrder}
                sx={{
                  mt: 2,
                  background: 'linear-gradient(90deg, #139EBC 0%, #AA1ECD 100%)',
                  color: 'white',
                  fontWeight: 700,
                  fontSize: '16px',
                  borderRadius: '10px',
                  p: 1.5,
                  fontFamily: 'Roboto, sans-serif',
                  '&:hover': {
                    backgroundColor: '#6a5d7d',
                  },
                }}
              >
                Place Your Order
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>

      {/* popup2 */}

      {/* Order Success Modal */}
      <Modal
        open={openSuccessModal}
        onClose={handleCloseSuccessModal}
        aria-labelledby="order-success-modal"
        aria-describedby="order-success-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: {
              xs: '90vw', // extra small screens
              sm: '500px',
              md: '600px',
              lg: '698px',
            },
            maxWidth: '95vw',
            bgcolor: '#2f2439',
            border: '2px solid #6c6e69',
            boxShadow: 24,
            p: {
              xs: 2,
              sm: 3,
              md: 4,
            },
            borderRadius: '20px',
            color: 'white',
            textAlign: 'center',
            maxHeight: '90vh',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
            <Box
              sx={{
                width: '60px',
                height: '50px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                mt: 2,
              }}
            >
              <img
                src="/Frame 47651.png"
                alt="Success Icon"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                }}
              />
            </Box>
          </Box>

          <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>
            Order Placed Successfully!
          </Typography>

          <Typography
            variant="body2"
            sx={{ mb: 2, color: '#e8e3e3', fontSize: { xs: '14px', sm: '16px' } }}
          >
            Thank you for your purchase! Your order has been successfully placed and is now
            <br />
            being processed. We are working hard to get your items to you as quickly as possible.
          </Typography>

          <Button
            variant="contained"
            onClick={handleOpenTrackModal}
            sx={{
              background: '#2563EB',
              color: 'white',
              fontWeight: 'bold',
              borderRadius: '15px',
              mt: 1,
              p: 1.2,
              width: '100%',
              fontSize: { xs: '14px', sm: '16px' },
              '&:hover': {
                backgroundColor: '#6a5d7d',
              },
            }}
          >
            Track Order
          </Button>

          <Button
            variant="contained"
            onClick={handleCloseSuccessModal}
            sx={{
              background: '#252A41',
              color: 'white',
              fontWeight: 'bold',
              borderRadius: '15px',
              mt: 1.5,
              p: 1.2,
              width: '100%',
              fontSize: { xs: '14px', sm: '16px' },
              '&:hover': {
                backgroundColor: '#6a5d7d',
              },
            }}
          >
            View Order Details
          </Button>

          <Button
            variant="contained"
            onClick={handleCloseSuccessModal}
            sx={{
              background: 'linear-gradient(90deg, #139EBC 0%, #AA1ECD 100%)',
              color: 'white',
              fontWeight: 'bold',
              borderRadius: '15px',
              mt: 1.5,
              p: 1.2,
              width: '100%',
              fontSize: { xs: '14px', sm: '16px' },
              '&:hover': {
                backgroundColor: '#6a5d7d',
              },
            }}
          >
            Contact Support
          </Button>

          <hr style={{ borderColor: '#374151', marginTop: '20px' }} />

          {/* Bottom 4 Icons */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: '12px',
              mt: 2,
            }}
          >
            {['Instagram', 'Twitter', 'Discord', 'Dribbble', 'LinkedIn'].map((icon) => (
              <Button
                key={icon}
                variant="text"
                sx={{
                  minWidth: '40px',
                  height: '40px',
                  padding: 0,
                  ':hover': {
                    backgroundColor: 'transparent',
                  },
                }}
              >
                <img src={`/${icon}.png`} alt={icon} style={{ width: '28px', height: '28px' }} />
              </Button>
            ))}
          </Box>
        </Box>
      </Modal>

      {/* popup 3 */}

      {/* Order Confirmation Modal */}
      {/* Order Confirmation Modal */}
      <Modal
        open={openTrackModal}
        onClose={handleCloseTrackModal}
        aria-labelledby="order-confirmation-modal"
        aria-describedby="order-confirmation-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: {
              xs: '95vw',
              sm: '80vw',
              md: '650px',
            },
            maxHeight: '100vh',
            bgcolor: '#2f2439',
            border: '2px solid #6c6e69',
            boxShadow: 24,
            pl: 4,
            borderRadius: '20px',
            color: 'white',
            overflow: 'hidden', // stop overflow from outer box
          }}
        >
          {/* SCROLLABLE INNER CONTENT WRAPPER */}
          <Box
            sx={{
              maxHeight: '80vh', // subtract padding if needed
              overflowY: 'auto',
              pr: 4,

              '&::-webkit-scrollbar': {
                width: '8px',
              },
              '&::-webkit-scrollbar-track': {
                backgroundColor: '#3e3e3e',
                borderRadius: '10px',
              },
              '&::-webkit-scrollbar-thumb': {
                background: 'linear-gradient(180deg, #8E2DE2, #4A00E0)',
                borderRadius: '10px',
              },
              '&::-webkit-scrollbar-thumb:hover': {
                background: 'linear-gradient(180deg, #a452f5, #6939f0)',
              },
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center', marginTop: 2 }}>
              Order Confirmation
            </Typography>

            {/* IMAGE BOX */}
            <Box
              sx={{
                width: {
                  xs: '150px',
                  sm: '208px',
                },
                height: {
                  xs: '150px',
                  sm: '200px',
                },
                backgroundColor: '#8f8d89',
                borderRadius: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
                mx: 'auto',
                mt: 2,
              }}
            >
              <Box
                component="img"
                src="/image3.png"
                alt="Math Adventure Box"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  padding: '6px',
                }}
              />
            </Box>

            <Typography variant="h5" sx={{ fontWeight: 'bold', mt: 2, textAlign: 'center' }}>
              Math Adventure Box
            </Typography>

            {/* TRACKING STEPPER */}
            <Box
              sx={{
                mt: 2,
                mb: 2,
                overflowX: 'auto',
                overflowY: 'visible',
                px: 1,
                '&::-webkit-scrollbar': {
                  height: '8px',
                },
                '&::-webkit-scrollbar-track': {
                  backgroundColor: '#3e3e3e',
                  borderRadius: '10px',
                },
                '&::-webkit-scrollbar-thumb': {
                  background: 'linear-gradient(90deg, #8E2DE2, #4A00E0)',
                  borderRadius: '10px',
                },
                '&::-webkit-scrollbar-thumb:hover': {
                  background: 'linear-gradient(90deg, #a452f5, #6939f0)',
                },
              }}
            >
              <Box
                sx={{
                  minWidth: '600px',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <TrackingStepper
                  steps={[
                    { id: 1, name: 'Record an order', status: 'completed' },
                    { id: 2, name: 'Order invocating', status: 'active' },
                    { id: 3, name: 'Printing on invoice', status: 'pending' },
                    { id: 4, name: 'Order stripped', status: 'pending' },
                    { id: 5, name: 'Order complete', status: 'pending' },
                  ]}
                />
              </Box>
            </Box>

            <hr style={{ borderColor: '#87739E', marginTop: 1 }} />

            <Box sx={{ mb: 3 }}>
              <Typography variant="h6" sx={{ mb: 1, mt: 2 }}>
                Order Details:
              </Typography>

              <Box sx={{ mb: 2, color: '#e8e3e3' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                  <Typography>Order ID:</Typography>
                  <Typography>#080-2025-001</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                  <Typography>Date:</Typography>
                  <Typography>Jan 16, 2025</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                  <Typography>Shipping Method:</Typography>
                  <Typography> DHL Express for 7 Business Days</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                  <Typography>Quantity:</Typography>
                  <Typography>{quantityBox}</Typography>
                </Box>
              </Box>

              <hr style={{ borderColor: '#87739E' }} />

              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                Order Summary
              </Typography>

              <Box sx={{ mb: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography>Order Price:</Typography>
                  <Typography>$225.00</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography>Shipping (DHL Express - Sydney, Australia):</Typography>
                  <Typography>$35.00</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography>Tax:</Typography>
                  <Typography>$26.00</Typography>
                </Box>

                <hr style={{ borderColor: '#a6a5a2', margin: '12px 0' }} />

                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    Total Amount
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#87739E' }}>
                    $288.00
                  </Typography>
                </Box>
              </Box>

              <Button
                variant="contained"
                fullWidth
                sx={{
                  mt: 1,
                  background: 'linear-gradient(90deg, #139EBC 0%, #AA1ECD 100%)',
                  color: 'white',
                  fontWeight: 800,
                  fontSize: '20px',
                  borderRadius: '8px',
                  p: 2,
                  fontFamily: 'Roboto, sans-serif',
                  '&:hover': {
                    backgroundColor: '#6a5d7d',
                  },
                }}
              >
                Place Your Order
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

function ProductItem({ title, subtitle, image, quantity, onDecrease, onIncrease, onClick }: any) {
  return (
    <div style={{ position: 'relative', display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
      <IconButton size="small" sx={{ position: 'absolute', top: 0, right: 0, color: '#bbb' }}>
        <img src="/Vector (4).png" />
      </IconButton>
      <div
        style={{
          background: '#8f8d89',
          padding: '5px',
          borderRadius: '8px',
          border: '1px solid #555',
          cursor: 'pointer',
        }}
        onClick={onClick}
      >
        <img
          src={image}
          alt={title}
          style={{
            width: '120px',
            height: '120px',
            objectFit: 'cover',
            borderRadius: '8px',
          }}
        />
      </div>
      <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          {title}
        </Typography>
        {subtitle && (
          <Typography variant="subtitle2" sx={{ color: '#FFFFFF' }}>
            {subtitle}
          </Typography>
        )}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            borderRadius: '8px',
            padding: '5px 10px',
            border: '2px solid #87739E',
            width: 130,
          }}
        >
          <Button
            size="small"
            variant="text"
            onClick={onDecrease}
            sx={{ minWidth: '32px', color: 'white' }}
          >
            <RemoveIcon fontSize="small" />
          </Button>
          <Typography>{quantity}</Typography>
          <Button size="small" variant="text" onClick={onIncrease} sx={{ color: 'white' }}>
            <AddIcon fontSize="small" />
          </Button>
        </div>
      </div>
    </div>
  );
}

function SummaryItem({ label, price }: any) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Typography variant="body1">{label}</Typography>
      <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
        {price}
      </Typography>
    </div>
  );
}

function PaymentMethodCard() {
  return (
    <Card
      sx={{
        backgroundColor: '#5E5C6E42',
        color: 'white',
        p: { xs: 2, sm: 3 },
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        borderRadius: '16px',
        width: '100%', // 👈 responsive width
        maxWidth: '800px', // 👈 limits stretch on larger screens
        mx: 'auto', // 👈 centers it horizontally
        mt: 4,
        boxSizing: 'border-box',
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
        Payment Method
      </Typography>

      <Box display="flex" flexDirection="column" gap={2}>
        {/* PayPal Option */}
        <Box
          display="flex"
          alignItems="center"
          p={2}
          border="1px solid #87739E"
          borderRadius="8px"
          gap={2}
        >
          <input type="radio" name="payment" value="paypal" />
          <Typography variant="body1">PayPal</Typography>
        </Box>

        {/* Stripe Option */}
        <Box
          display="flex"
          flexDirection="column"
          p={2}
          border="1px solid #87739E"
          borderRadius="8px"
          gap={2}
        >
          <Box display="flex" alignItems="center" gap={2}>
            <input type="radio" name="payment" value="stripe" />
            <Typography variant="body1">Stripe</Typography>
          </Box>

          {/* Card Details */}
          <Box mt={1} display="flex" flexDirection="column" gap={2}>
            <TextField
              label="Card Number"
              variant="outlined"
              fullWidth
              InputLabelProps={{ shrink: true }}
              InputProps={{
                style: { color: 'white' },
                endAdornment: <ArrowDropDownIcon sx={{ color: 'white' }} />,
              }}
            />
            <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }} gap={2}>
              <TextField
                label="MM/YY"
                variant="outlined"
                fullWidth
                InputLabelProps={{ shrink: true }}
                InputProps={{
                  style: { color: 'white' },
                  endAdornment: <ArrowDropDownIcon sx={{ color: 'white' }} />,
                }}
              />
              <TextField
                label="CVC"
                variant="outlined"
                fullWidth
                InputLabelProps={{ shrink: true }}
                InputProps={{
                  style: { color: 'white' },
                  endAdornment: <ArrowDropDownIcon sx={{ color: 'white' }} />,
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Card>
  );
}

function ShippingMethodCard() {
  return (
    <Card
      sx={{
        backgroundColor: '#5E5C6E42',
        color: 'white',
        p: { xs: 2, sm: 3 },
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        borderRadius: '16px',
        width: '100%',
        maxWidth: '800px',
        mx: 'auto',
        mt: 4,
        boxSizing: 'border-box',
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
        Shipping Method
      </Typography>

      <Box display="flex" flexDirection="column" gap={2}>
        <TextField
          label="Shipping Option"
          variant="outlined"
          fullWidth
          InputProps={{
            style: { color: 'white' },
            endAdornment: <ArrowDropDownIcon sx={{ color: 'white' }} />,
          }}
        />

        <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }} gap={2}>
          <TextField
            label="City"
            variant="outlined"
            fullWidth
            InputProps={{
              style: { color: 'white' },
              endAdornment: <ArrowDropDownIcon sx={{ color: 'white' }} />,
            }}
          />
          <TextField
            label="State"
            variant="outlined"
            fullWidth
            InputProps={{
              style: { color: 'white' },
              endAdornment: <ArrowDropDownIcon sx={{ color: 'white' }} />,
            }}
          />
        </Box>

        <TextField
          label="Zip Code"
          variant="outlined"
          fullWidth
          InputProps={{
            style: { color: 'white' },
            endAdornment: <ArrowDropDownIcon sx={{ color: 'white' }} />,
          }}
        />

        <hr style={{ borderColor: '#a6a5a2', margin: '16px 0' }} />

        <Box display="flex" justifyContent="space-between" alignItems="center" flexWrap="wrap">
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#bdbcb9' }}>
            Shipping DHL Express - Sydney, Australia
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#87739E' }}>
            $16.06
          </Typography>
        </Box>
      </Box>
    </Card>
  );
}

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Grid, Button } from '@mui/material';
import Typography from '@mui/material/Typography';

import { DashboardContent } from 'src/layouts/dashboard';

import GameCard from 'src/components/gamecard';
import CreateCardForm from 'src/components/CreateCardForm';

export default function CreateCard1() {
  const gameCards = [
    { title: 'MOVIE TRIVIA', date: 'Jan 2025', image: '/movie.png' },
    { title: 'STARDUST', date: 'Dec 2024', image: '/fire.png' },
    { title: 'MATH GAME', date: 'Mar 2024', image: '/thorin.png' },
    { title: 'SPACE EXPLORERS', date: 'Jun 2024', image: '/movie.png' },
    { title: 'OCEAN QUEST', date: 'Nov 2024', image: '/fire.png' },
    { title: 'HISTORY AI', date: 'Aug 2024', image: 'thorin.png' },
  ];

  const itemData2 = [
    {
      img: '/Math.jpg',
      title: 'Main Feature',
    },
    {
      img: '/image3.png',
      title: 'Small 1',
    },
    {
      img: '/Frame 47640.png',
      title: 'Small 2',
    },
    {
      img: '/Frame 47641.png',
      title: 'Small 3',
    },
  ];

  const navigate = useNavigate();
  // --- inside CreateCard1 function ke top pe ---
  const [open, setOpen] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);
  const [user, setUser] = useState(true);
  const handleOpen = (image: string) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  if (!user) {
    navigate('/sign-up');
  }

  return (
    <>
      <DashboardContent maxWidth={false} sx={{ color: '#fff', px: { xs: 2, md: 4 }, py: 3 }}>
        {/* Main container with responsive layout */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: 6, md: 4 },
            width: '100%',
          }}
        >
          {/* Left Side - Form */}
          <Box
            sx={{
              flex: 1,
              width: '100%',
              maxWidth: { md: '50%' },
            }}
          >
            <CreateCardForm />
          </Box>

          {/* Right Side - Generated Card Preview */}
          <Box
            sx={{
              flex: 1,
              width: '100%',
              maxWidth: { md: '50%' },
              mt: '100px',
            }}
          >
            {/* Card Preview Box */}
            <Box
              sx={{
                border: '2px solid #948d96',
                borderRadius: 3,
                background: '#29193c',
                mb: 4,
                p: 2,
              }}
            >
              <Typography variant="h6" sx={{ mb: 2, color: '#fff' }}>
                Generate Card Version
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  gap: 2,
                }}
              >
                {/* Main Image */}
                <Box
                  onClick={() => handleOpen(itemData2[0].img)}
                  sx={{
                    flex: 3,
                    borderRadius: 3,
                    border: '2px solid #6c6e69',
                    background: '#484a45',
                    p: 1,
                    cursor: 'pointer',
                    overflow: 'hidden',
                    height: '100%',
                  }}
                >
                  <img
                    src={itemData2[0].img}
                    alt={itemData2[0].title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '10px',
                    }}
                  />
                </Box>

                {/* Thumbnails */}
                <Box
                  sx={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                  }}
                >
                  {itemData2.slice(1, 4).map((item, index) => (
                    <Box
                      key={index}
                      sx={{
                        flex: 1,
                        borderRadius: 3,
                        border: '1px solid #78766f',
                        background: '#484a45',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        overflow: 'hidden',
                        height: 100,
                      }}
                    >
                      <img
                        src={item.img}
                        alt={item.title}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'contain',
                          borderRadius: '10px',
                        }}
                      />
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>

            {/* Other Card Versions */}
            <Box>
              <Typography
                variant="h6"
                sx={{
                  mb: 2,
                  color: '#fff',
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  mt: 4,
                }}
              >
                Other Card Versions
              </Typography>

              <Grid container spacing={2} justifyContent="center">
                {gameCards.map((game, index) => (
                  <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
                    <Box display="flex" justifyContent="center">
                      <GameCard title={game.title} date={game.date} image={game.image} />
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </Box>
      </DashboardContent>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '95vw',
            maxWidth: 1000,
            bgcolor: '#2f2439',
            border: '2px solid #6c6e69',
            boxShadow: 24,
            p: { xs: 2, sm: 4 },
            borderRadius: '20px',
            textAlign: 'center',
            overflowY: 'auto',
            maxHeight: '90vh',
          }}
        >
          {/* Flex container for left and right sections */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: '20px',
              alignItems: 'center',
            }}
          >
            {/* Image Side */}
            <Box
              sx={{
                flex: 1,
                borderRadius: '30px',
                overflow: 'hidden',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                p: 1,
              }}
            >
              {selectedImage && (
                <img
                  src={selectedImage}
                  alt="Selected"
                  style={{
                    width: '100%',
                    maxHeight: '400px',
                    objectFit: 'contain',
                    borderRadius: '30px',
                    border: '2px solid white',
                    background: '#a8a3a3',
                    padding: '20px',
                  }}
                />
              )}
            </Box>

            {/* Content Side */}
            <Box
              sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                alignItems: 'center',
              }}
            >
              <Box
                sx={{
                  width: '70px',
                  height: '50px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  mt: 4,
                }}
              >
                <img
                  src="/Frame 47651.png"
                  alt="Success Icon"
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </Box>

              <Typography
                variant="h4"
                sx={{
                  color: '#22C55E',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  mt: 3,
                  mb: 1,
                }}
              >
                This is Success Create!
              </Typography>

              <Typography variant="body2" sx={{ color: '#ffffff', textAlign: 'center', mb: 2 }}>
                Copyright You have built the most amazing art in this world
              </Typography>

              {/* Order Now Button */}
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  mb: 2,
                }}
              >
                <Link to="/Ordershiping" style={{ textDecoration: 'none' }}>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: '#2f354f',
                      color: 'white',
                      fontWeight: 'bold',
                      borderRadius: '6px',
                      padding: '12px 24px',
                      fontSize: '0.8rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      ':hover': {
                        backgroundColor: '#e6b800',
                      },
                    }}
                  >
                    <img
                      src="/Group.png"
                      alt="icon"
                      style={{
                        width: '20px',
                        height: '20px',
                        marginBottom: 3,
                        marginRight: 3,
                      }}
                    />
                    Order Now
                  </Button>
                </Link>
              </Box>

              {/* Top 4 Buttons */}
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
                  gap: '15px',
                }}
              >
                {[
                  { label: 'Edit Game Rules', icon: '/Vector (2).png' },
                  { label: 'Edit Card Fonts', icon: '/Vector (2).png' },
                  { label: 'Edit Card Back', icon: '/Vector (2).png' },
                  { label: 'Edit Card Boxes', icon: '/Vector (2).png', link: '/EditCardBox' },
                ].map((item) => {
                  const button = (
                    <Button
                      key={item.label}
                      variant="contained"
                      sx={{
                        backgroundColor: '#9f7bb5',
                        color: 'white',
                        fontWeight: 'bold',
                        borderRadius: '9px',
                        padding: '16px',
                        fontSize: '0.8rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        ':hover': {
                          backgroundColor: '#e6b800',
                        },
                      }}
                    >
                      <img
                        src={item.icon}
                        alt="icon"
                        style={{ width: '20px', height: '18px', marginBottom: 3 }}
                      />
                      {item.label}
                    </Button>
                  );

                  return item.link ? (
                    <Link to={item.link} key={item.label} style={{ textDecoration: 'none' }}>
                      {button}
                    </Link>
                  ) : (
                    button
                  );
                })}
              </Box>

              {/* Bottom Social Icons */}
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '15px',
                  mt: 2,
                  flexWrap: 'wrap',
                }}
              >
                {['Instagram', 'Twitter', 'Discord', 'Dribbble', 'LinkedIn'].map((name) => (
                  <Button
                    key={name}
                    variant="text"
                    sx={{
                      minWidth: '40px',
                      height: '40px',
                      padding: 0,
                      ':hover': { backgroundColor: 'transparent' },
                    }}
                  >
                    <img
                      src={`/${name}.png`}
                      alt={name}
                      style={{ width: '30px', height: '30px' }}
                    />
                  </Button>
                ))}
              </Box>

              {/* Close Button */}
              <Button
                onClick={handleClose}
                variant="contained"
                sx={{
                  mt: 3,
                  backgroundColor: '#ffcc00',
                  color: '#000',
                  fontWeight: 'bold',
                  borderRadius: '10px',
                  padding: '8px 24px',
                  ':hover': {
                    backgroundColor: '#e6b800',
                  },
                }}
              >
                Close
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
}

import React from 'react';
import { Link , useNavigate } from 'react-router-dom';

import { Box, Grid, Button, Typography } from '@mui/material';


const CardEditor = () => {
  // const cards = new Array(21).fill('/Math.jpg');
  const cards = new Array(21).fill(0).map((_, index) => ({
    id: `card-${index + 1}`, // Unique ID for each card
    image: '/Math.jpg', // Example image path
  }));

  const bottomSections = [
    { image: '/image3.png', icon: '/Vector1.png', title: 'Edit Card Box' },
    { image: '/image3.png', icon: '/Vector1.png', title: 'Edit Game Rules' },
    { image: '/image3.png', icon: '/Vector1.png', title: 'Edit Card Back' },
  ];

  const navigate = useNavigate()

  function handleEdit(cardId: string | number) {
   console.log('Editing card:', cardId); // Log which card is being edited
    navigate(`/drawcard/${cardId}`); // Navigate to a dynamic route
  }

  return (
    <Box sx={{ p: { xs: 2, md: 4 }, mb: 3 }}>
      {/* Header Text and Button */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 3,
        }}
      >
        <Typography variant="h5" color="white" sx={{ mb: { xs: 2, sm: 0 } }}>
          Select Your Card to Edit
        </Typography>

        <Button
          component={Link}
          to="/PDFExport"
          variant="contained"
          sx={{
            backgroundColor: 'transparent',
            textTransform: 'none',
            borderRadius: '10px',
            border: '2px solid #139EBC',
            px: 3,
            py: 1,
            display: 'flex',
            alignItems: 'center',
            width: { xs: '100%', sm: 220 },
            gap: 1,
            '&:hover': {
              backgroundColor: '#6D5A82',
            },
          }}
        >
          <Box component="img" src="/Vector (1).png" alt="Icon" sx={{ width: 24, height: 24 }} />
          Export as PDF
        </Button>
      </Box>

      {/* Cards Grid */}
      <Grid container spacing={2} justifyContent="center">
        {cards.map((card, index) => (
          <Grid
            size={{ xs: 4, sm: 3, md: 2.4, lg: 2, xl: 1.5 }}
            key={card.id}
            display="flex"
            justifyContent="center"
          >
            <Box
            onClick={() => handleEdit(card.id)}
              sx={{
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden',
                background: '#fff',
                border: '2px solid #ccc',
                height: { xs: 140, sm: 160, md: 220, lg: 220, xl: 220 },
                width: { xs: 90, sm: 110, md: 140, lg: 160, xl: 180 },
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.03)', // Add a subtle hover effect
                  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
                },
              }}
            >
              <img
                src={card.image}
                alt={`Card ${index + 1}`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
              {/* {index === 0 && (
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 8,
                    backgroundColor: '#87739E',
                    color: 'white',
                    padding: '6px 12px',
                    borderRadius: '12px',
                    width: 80,
                    fontSize: '0.8rem',
                    textAlign: 'center',
                    cursor: 'pointer',
                  }}
                >
                  <Button onClick={handleEdit}>
                  Edit

                  </Button>
                </Box>
              )} */}
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Bottom 3 Icon Boxes */}
      <Box mt={5}>
        <Grid container spacing={4} justifyContent="center">
          {bottomSections.map((section, idx) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={idx}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  backgroundColor: '#6D5A826E',
                  borderRadius: '16px',
                  p: 2,
                  height: '100%',
                }}
              >
                {/* Left side icon */}
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    backgroundColor: '#29193C82',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    mr: 2,
                  }}
                >
                  <Box
                    component="img"
                    src={section.image}
                    alt="section image"
                    sx={{
                      width: '88%',
                      height: '84%',
                      padding: '1px',
                      borderRadius: '8px',
                    }}
                  />
                </Box>

                {/* Right side: Text and Icon vertically aligned */}
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    flex: 1,
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'white',
                      fontWeight: 'bold',
                      mb: 1,
                    }}
                  >
                    {section.title}
                  </Typography>
                  <Box
                    component="img"
                    src={section.icon}
                    alt="section right icon"
                    sx={{
                      width: 32,
                      height: 32,
                      objectFit: 'contain',
                    }}
                  />
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default CardEditor;

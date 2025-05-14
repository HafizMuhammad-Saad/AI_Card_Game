import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { DashboardContent } from 'src/layouts/dashboard';

import { Iconify } from 'src/components/iconify';


// ----------------------------------------------------------------------

export function ModifyCards() {

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

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <DashboardContent maxWidth="xl" sx={{ color: '#fff', px: { xs: 2, sm: 3, md: 5 } }}>
      <Typography variant="h4" sx={{ mb: 5 }}>
        Modify Cards
      </Typography>

      {/* Buttons Section */}
      <Box
        sx={{
          mb: 5,
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: 'center',
          flexWrap: 'wrap',
          justifyContent: { sm: 'flex-end' },
          gap: 2,
        }}
      >
        <Button
          variant="contained"
          color="inherit"
          startIcon={<Iconify icon="solar:eye-bold" />}
          sx={{
            backgroundColor: '#87739E',
            '&:hover': { backgroundColor: '#87739E' },
            flexShrink: 0,
          }}
          onClick={() => setModalOpen(true)}
        >
          Preview
        </Button>

        <Button
          variant="contained"
          color="inherit"
          startIcon={<Iconify icon="solar:cart-3-bold" />}
          sx={{
            backgroundImage: `
              linear-gradient(0deg, #87739E, #87739E),
              linear-gradient(90.54deg, rgba(19, 158, 188, 0.46) 36.69%, rgba(170, 30, 205, 0.46) 91.01%)
            `,
            backgroundBlendMode: 'overlay',
            backgroundColor: 'transparent',
            '&:hover': {
              backgroundImage: `
                linear-gradient(0deg, #87739E, #87739E),
                linear-gradient(90.54deg, rgba(19, 158, 188, 0.46) 36.69%, rgba(170, 30, 205, 0.46) 91.01%)
              `,
            },
            flexShrink: 0,
          }}
          onClick={() => setModalOpen(true)}
        >
          Add to Cart
        </Button>

        <Button
          variant="outlined"
          color="inherit"
          startIcon={<Iconify icon="material-symbols:file-export" />}
          sx={{
            border: '2px solid',
            borderImageSlice: 1,
            borderImageSource: `linear-gradient(90.54deg, #139EBC 36.69%, #AA1ECD 91.01%)`,
            backgroundColor: 'transparent',
            color: '#fff',
            '&:hover': {
              backgroundColor: 'rgba(255,255,255,0.05)',
            },
            flexShrink: 0,
          }}
          onClick={() => setModalOpen(true)}
        >
          Export as PDF
        </Button>
      </Box>

      {/* Card Grid */}
      {/* <Grid container spacing={3}>
        {_products.map((product) => (
          <Grid key={product.id} size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
            <ProductItem product={product} />
          </Grid>
        ))}
      </Grid> */}

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

      {/* Pagination */}
      <Box
        sx={{
          mt: 8,
          display: 'flex',
          justifyContent: 'center',
          color: '#fff',
          '& .MuiPaginationItem-root': {
            color: '#fff',
            borderColor: '#fff',
          },
        }}
      >
        {/* <Pagination
          count={10} // or however many pages you have
          color="primary"
          size="large"
          siblingCount={10} // 👈 shows all pages
          boundaryCount={0}
        /> */}

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
    </DashboardContent>
  );
}

import * as React from 'react';

import { Box, Grid, Button, Typography } from '@mui/material';

export default function PDFExport() {
  const cards = new Array(24).fill('/Math.jpg');

  return (
    <Box
      sx={{
        p: { xs: 2, sm: 3, md: 5 },
        bgcolor: '#5E5C6E42',
        minHeight: '100vh',
        width: '100%',
        maxWidth: '1400px',
        mx: 'auto',
        borderRadius: '20px',
        boxSizing: 'border-box',
      }}
    >
      <Box
        sx={{
          p: { xs: 2, sm: 3, md: 6 },
          borderRadius: '20px',
          border: '4px dashed #FFFFFF80',
          width: '100%',
          boxSizing: 'border-box',
        }}
      >
        {/* Header Section */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
            mb: 4,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <img src="/pdf2.png" alt="PDF Icon" style={{ width: 40 }} />
            <Typography variant="subtitle1" color="#FFFFFF80">
              Business_Cards.pdf <br />2 Pages • 300dpi
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 2,
              justifyContent: { xs: 'center', md: 'flex-end' },
            }}
          >
            <Button
              variant="contained"
              sx={{
                bgcolor: '#87739E',
                fontSize: '16px',
                px: 2,
                py: 1,
                gap: 1,
              }}
            >
              <img src="/eye.png" alt="icon" style={{ width: 24, height: 24 }} />
              Share Links
            </Button>

            <Button
              variant="contained"
              sx={{
                background: 'linear-gradient(50deg, #139EBC 50%,  #AA1ECD 80%)',
                fontSize: '16px',
                px: 2,
                py: 1,
                gap: 1,
              }}
            >
              <img src="/solar_art.png" alt="icon" style={{ width: 24, height: 24 }} />
              Add to Order
            </Button>

            <Button
              variant="outlined"
              sx={{
                borderColor: '#139EBC',
                color: '#fff',
                fontSize: '16px',
                px: 2,
                py: 1,
                gap: 1,
              }}
            >
              <img src="/Vector (3).png" alt="icon" style={{ width: 24, height: 24 }} />
              Download PDF
            </Button>
          </Box>
        </Box>

        {/* Image and Text Section */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 4,
            mb: 6,
          }}
        >
          <Box
            sx={{
              width: { xs: '100%', md: '45%' },
              borderRadius: 2,
              overflow: 'hidden',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Box
              component="img"
              src="/math1.jpg"
              alt="Book Cover"
              sx={{
                width: '100%',
                height: '100%',
                maxHeight: 460,
                borderRadius: 2,
                objectFit: 'cover',
              }}
            />
          </Box>

          <Box sx={{ flex: 1 }}>
            <Typography
              variant="body1"
              color="white"
              sx={{
                fontSize: { xs: '14px', sm: '16px' },
                whiteSpace: 'pre-line',
              }}
            >
              <strong>Card Game Name:</strong> Echo of the Forgotten Realm{'\n'}
              <strong>Card Type:</strong> Mythic Entity{'\n'}
              <strong>Description:</strong> In the distant corners of the Forgotten Realm... (shortened)
            </Typography>
          </Box>
        </Box>

        {/* Cards Grid */}
        <Grid container spacing={2}>
          {cards.map((card, index) => (
            <Grid size={{xs:6, sm:4, md:3, lg:2}} key={index}>
              <Box
                sx={{
                  borderRadius: '10px',
                  overflow: 'hidden',
                  background: '#fff',
                  border: '2px solid white',
                  height: 220,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <img
                  src={card}
                  alt={`Card ${index + 1}`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

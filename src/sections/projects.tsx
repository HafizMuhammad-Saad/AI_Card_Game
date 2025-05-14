import type { SetStateAction } from 'react';

import { useState } from 'react';

import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Box, Grid, Card, Stack, Button, Select, Typography } from '@mui/material';

import { CONFIG } from 'src/config-global';

// ----------------------------------------------------------------------

const CategoryButton = styled(Button)(({ theme }) => ({
  '&.MuiButton-contained': {
    backgroundColor: '#807a79',
    color: '#ffffff',
    border: '2px solid white',
    '&:hover': {
      backgroundColor: '#333333',
    },
  },
  '&.MuiButton-text': {
    color: '#b0a9a9',
    border: '2px solid #807a79',
    '&:hover': {
      backgroundColor: '#333333',
    },
  },
}));

const FilterSelect = styled(Select)(({ theme }) => ({
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: '#807a79',
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: '#ffffff',
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: '#ffffff',
  },
  color: '#b0a9a9',
  border: '2px solid #807a79',
  borderRadius: '4px',
}));

export default function Projects() {
  const [filter, setFilter] = useState('');

  const handleFilterChange = (event: { target: { value: SetStateAction<string> } }) => {
    setFilter(event.target.value);
  };

  const gameCards = [
    {
      title: 'Movie Trivia Real',
      date: 'January 18 2025',
      image:
        'https://s3-alpha-sig.figma.com/img/90e4/d168/e4b5e820c5226c831311d1108ef2a483?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=PUOk8IYuveNLA8EHnZQa6pE4lfkC9uGrnMGThQNH4SbG12J-w5OL8U7sTX~Jc7U502tWYJc-s76D-r24T4iGQduWjOeR4xhdF0bQJPmenGs1Z2M-b5gCc74w3Y66~g4JHoX2xpFlkidDfpexbnjBiNjE~2bQrSusZFnQ-V8QW0NvS5rXQqtNxpfGZ8dovL6bwqKz-yKpJ8sHuZSAnJmNDuil8iEItMhXG56Hx2hhNrmJ~sffQDa1ezCcyyVhiO2j2a~4qYtNkkgIwunCXGiIOGrQhpNP6iIL-6ZTchn0T47ZFvVLIrzipbfc1QBhqZSxiXHV183IDlTTwadQaFiCHQ__',
    },
    {
      title: 'Stardust Wanderer',
      date: 'December 25 2024',
      image:
        'https://s3-alpha-sig.figma.com/img/5bd9/57e0/3567d8e581f5cd7752a7f7d423b75343?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=E8ifRqkFJsa~4RfLvF19mmoYZc68awtPA2xtgr0hdZ-cZJg8YbKoKhTy3doLgPaGhpSxUKiz9jK2idsCN37Lv76KYm11YpXFfvab~8GgdDI2kSzc~2zfbct2FM56tsvH2WEcvRdw1oVFP1gIst8kWl-o4v7Cl-pQoAyuWydRHNnRG-vHdDDWNumXcV0iVWrFdkbfeid2M5MXyvPgLDtbmmcylFa84agYWDCo3BddpN4HpMD6izYCK2Gb-v6T9y-L~Ouz46UPhu0uNAO0scIdDvaeqeRkz~fWykrC6CmKNgS85jOSU8wDDN8x6qcFww3GgcGhCLTEIiA9Vkh0roWBiw__',
    },
    {
      title: 'Thorin Stoneheim',
      date: 'August 05 2024',
      image:
        'https://s3-alpha-sig.figma.com/img/5fe1/1003/54e26888ae8edb49530995c97cd44b24?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mlxVNFtZ-N17o62Y4CI79dIkdWnX5GzWYjtbpGncstIijSLybnsMAXc~Duz3jtmHLA8rwOekOqUQscDlU4kVYGLw4SsKB8E70B93e3zE-Rg1-~-n8D3U0KKe~McgVUdUGyufI3rreTUE6oyiOAeHpWAkqjcxZdvb2w0OPlfzAFtNLLWyPu1PdpQL8fgcDUB~KtT~V4e47lYxiz3lgJou7vuCImF91~7hE-v7~uFj3lzXGhoWwR49Q3NvgnzCwzTNLB86tJVRhnNPxBlxYyGXMJBcAFqgc~hTVPue4oLjurq-DJosq6CKpFf~ixNDtY8bXQS860Aha6NKp1Rm2C-ZNw__',
    },
    {
      title: 'Math Adventure',
      date: 'March 29 2024',
      image:
        'https://s3-alpha-sig.figma.com/img/3423/8bee/7f33af2d979a44e85a103ee2d3dc8346?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=oKtquKWEv37YjYG-xKX8~8W8G~VcYxhhUwTDMVINbw8k6q3NLXj-ozJrtV30SBQq2SzCqZshHVGTfEVm3ujVjuFfkZNEjFYucMQmjtwSsQiESQl38j1fd17zeBO4Yl39llsDp2BsQ1mJiMqwQCrTMCc9GUB3ve8RogJ~gphH7hw4treO~Ti3bzmIoCz3eZzxLx8NqjBaJ1GzF6meermaxahcU8KPx-xD9KrE~tlYCZs83XCTIgvnRMurKYdCSU6Jv-5NFC1sH7ZUTldvbX3AVflJSxoWfhH9u7ego0Eqsq-DnAbwKsCVQvgSjC7XKVPj8Gmj83mv6GJ2DRaebHOQhQ__',
    },
  ];

  const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
  ];

  function setSelectedFilm(newValue: any): void {
    throw new Error('Function not implemented.');
  }

  return (
    <>
      <title>{`Project - ${CONFIG.appName}`}</title>
      <Box sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          alignItems={{ xs: 'stretch', md: 'center' }}
          justifyContent="space-between"
          spacing={2}
          mt={3}
          mb={4}
        >
          <Stack
            direction="row"
            spacing={2}
            flexWrap="wrap"
            justifyContent={{ xs: 'center', md: 'flex-start' }}
            rowGap={2}
            columnGap={2}
          >
            <CategoryButton variant="contained">All Theme</CategoryButton>
            <CategoryButton variant="text">Discovery</CategoryButton>
            <CategoryButton variant="text">Abstract</CategoryButton>
            <CategoryButton variant="text">Sci-fi</CategoryButton>
            <CategoryButton variant="text">Adventure</CategoryButton>
          </Stack>

          <Autocomplete
            disablePortal
            options={top100Films}
            getOptionLabel={(option) => option.title}
            onChange={(event, newValue) => setSelectedFilm(newValue)}
            sx={{ width: { xs: '100%', sm: 300 } }}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="Filter"
                sx={{
                  color: 'white',
                  '& .MuiInputBase-input': { color: 'white' },
                  '& .MuiInputBase-input::placeholder': { color: 'white' },
                }}
                InputProps={{
                  ...params.InputProps,
                  startAdornment: (
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        pl: 1,
                        pr: 1,
                        borderRadius: '20px',
                      }}
                    >
                      <span
                        dangerouslySetInnerHTML={{
                          __html: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.9266 2.29224L6.29824 9.70894M5.73495 2.29224H18.1274C19.1601 2.29224 20.0051 3.13718 20.0051 4.16988V6.2353C20.0051 6.98635 19.5357 7.92518 19.0662 8.39459L15.0293 11.9621C14.466 12.4315 14.0905 13.3704 14.0905 14.1214V18.1584C14.0905 18.7216 13.7149 19.4727 13.2455 19.7544L11.9312 20.5993C10.7107 21.3504 9.02083 20.5054 9.02083 19.0033V14.0275C9.02083 13.3704 8.6453 12.5254 8.26977 12.056L4.70224 8.30071C4.23283 7.8313 3.8573 6.98635 3.8573 6.42306V4.26377C3.8573 3.13718 4.70224 2.29224 5.73495 2.29224Z" stroke="#D1D5DB" stroke-width="1.40824" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>`,
                        }}
                      />
                    </Box>
                  ),
                }}
              />
            )}
          />
        </Stack>

        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: '1.25rem', sm: '1.5rem' },
            fontWeight: 'bold',
            mb: 2,
            color: 'white',
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          My Projects
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {gameCards.map((game, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={index}>
              <Card
                sx={{
                  borderRadius: '16px',
                  boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                  width: '280px',
                  display: 'flex',
                  flexDirection: 'column',
                  border: '1px solid #534e54',
                  backgroundColor: '#2b1233',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 12px 20px rgba(0,0,0,0.15)',
                  },
                }}
              >
                <Box
                  sx={{
                    height: '200px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    borderTopLeftRadius: '16px',
                    borderTopRightRadius: '16px',
                    backgroundColor: '#2b1233',
                  }}
                >
                  <img
                    src={game.image}
                    alt={game.title}
                    style={{
                      maxWidth: '100%',
                      maxHeight: '100%',
                      objectFit: 'contain',
                      backgroundColor: '#2b1233',
                      marginTop: '40px',
                      borderRadius: '10px',
                    }}
                  />
                </Box>
                <Box sx={{ p: 2, flexGrow: 1 }}>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 'bold', mb: 1, fontSize: '1.1rem', color: 'white' }}
                  >
                    {game.title.toUpperCase()}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#b0a9a9', fontSize: '0.9rem' }}>
                    {game.date}
                  </Typography>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}

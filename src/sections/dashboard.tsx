import { useState } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import StyleIcon from '@mui/icons-material/Style';
import GroupIcon from '@mui/icons-material/Group';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

import { DashboardContent } from 'src/layouts/dashboard';

export default function Dashboard() {
  const [searchQuery, setSearchQuery] = useState('');

  // Game card data
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

  return (
    <DashboardContent disablePadding>
      <Box className="dashboard-container">
        {/* Header */}
        <Box className="dashboard-header">
          <Typography variant="h2" className="dashboard-subtitle">
            Dashboard
          </Typography>
        </Box>

        {/* Main Content */}
        <Box className="dashboard-content">
          {/* Search Bar */}
          <TextField
            fullWidth
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-bar"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon className="search-icon" />
                </InputAdornment>
              ),
            }}
          />

          {/* Stats Cards Section */}
          <Grid container spacing={3} sx={{ mt: 4 }} justifyContent="center">
            {[
              {
                icon: <StyleIcon fontSize="large" sx={{ color: 'white' }} />,
                title: 'My Game Cards',
                value: '04',
              },
              {
                icon: <Inventory2Icon fontSize="large" sx={{ color: 'white' }} />,
                title: 'Total Order',
                value: '04',
              },
              {
                icon: <GroupIcon fontSize="large" sx={{ color: 'white' }} />,
                title: 'Order Received',
                value: '02',
              },
              {
                icon: <MonetizationOnIcon fontSize="large" sx={{ color: 'white' }} />,
                title: 'Total Purchase',
                value: '$375K',
              },
            ].map((stat, index) => (
              <Grid
                size={{ xs: 12, sm: 6, md: 3 }}
                key={index}
                sx={{ display: 'flex', justifyContent: 'center' }}
              >
                <Card
                  sx={{
                    background: '#696363',
                    backdropFilter: 'blur(14px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '24px',
                    p: 3,
                    width: '250px',
                    maxWidth: '250px',
                    minHeight: '130px', // 👈 Ensures consistent height
                    transition: 'all 0.3s ease',
                    boxShadow: '0 12px 30px rgba(0, 0, 0, 0.25)',
                    '&:hover': {
                      transform: 'translateY(-6px)',
                    },
                  }}
                >
                  <Stack direction="row" spacing={2} alignItems="center">
                    {stat.icon}
                    <Box>
                      <Typography
                        sx={{
                          fontSize: '0.95rem',
                          color: 'rgba(255, 255, 255, 0.75)',
                          mb: 0.5,
                          fontWeight: 500,
                        }}
                      >
                        {stat.title}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: '1.24rem',
                          fontWeight: 700,
                          color: '#fff',
                        }}
                      >
                        {stat.value}
                      </Typography>
                    </Box>
                  </Stack>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Game Cards Section */}

          <Grid container spacing={4} sx={{ mb: 6, mt: 4 }} justifyContent="center">
            {gameCards.map((game, index) => (
              <Grid
                size={{ xs: 12, sm: 6, md: 3 }}
                key={index}
                display="flex"
                justifyContent="center"
              >
                <Card
                  sx={{
                    borderRadius: '16px',
                    boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                    display: 'flex',
                    flexDirection: 'column',
                    border: '1px solid #534e54',
                    backgroundColor: '#2b1233',
                    maxWidth: '250px',
                    width: '250px',
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
                        marginTop: '40px',
                        borderRadius: '10px',
                      }}
                    />
                  </Box>
                  <Box sx={{ p: 3, flexGrow: 1 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 'bold',
                        mb: 1,
                        fontSize: '1.1rem',
                        color: 'white',
                      }}
                    >
                      {game.title.toUpperCase()}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'text.secondary',
                        fontSize: '0.9rem',
                      }}
                    >
                      {game.date}
                    </Typography>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </DashboardContent>
  );
}

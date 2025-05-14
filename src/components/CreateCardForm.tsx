import { Link } from "react-router-dom";

import FolderIcon from '@mui/icons-material/Folder';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Box, TextField, Typography, FormControl } from "@mui/material";
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';


export default function CreateCardForm() {
  const itemData = [
    {
      img: '/Dark.png',
      title: 'Fantasy',
      author: 'Medieval worlds, dragons, and magic',
    },
    {
      img: '/image2.jpg',
      title: 'Cyberpunk',
      author: 'Neon-lit future and high-tech dystopia',
    },
    {
      img: '/Frame 47628.png',
      title: 'Other',
      author: 'Try Other Theme',
    }
  ];

  return (
    <Box sx={{ 
      width: { xs: '100%', md: '60%' },
      maxWidth: '900px',
    }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ mb: 2 }}>
          Create Your Card Design
        </Typography>
      </Box>

      {/* Main Form Box - Keep all your existing form code here */}
      <Box
        sx={{
          width: '150%',
          border: "2px solid #78766f",
          borderRadius: '19px',
          p: 4,
          background: 'linear-gradient(-45deg, #300909, #212c12, #382e0b, #281e4b, #29193c)',
          mb: '30px',
          height:'auto',
        }}
      >
       {/* First Prompt Field */}
       <FormControl fullWidth sx={{ mb: 3 }}>
              <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
                Aiprompt
              </Typography>
              <TextField
                fullWidth
                label="Mathematics learning game for school children"
                variant="outlined"
                InputLabelProps={{ style: { color: "#ccc" } }}
                InputProps={{ style: { color: "#fff" } }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#666" },
                    "&:hover fieldset": { borderColor: "#999" },
                  },
                }}
              />
            </FormControl>

            {/* Dual TextFields Side-by-Side */}
            <Box
              sx={{
                display: 'flex',
                gap: 3,
                mb: 3,
                flexWrap: 'wrap',
              }}
            >
              {/* Left Field */}
              <Box sx={{ flex: '1 1 45%', minWidth: 200 }}>
                <Typography variant="h6" sx={{ mb: 1 }}>
                  Game
                </Typography>
                <TextField
                  fullWidth
                  label="Educational"
                  variant="outlined"
                  InputLabelProps={{ style: { color: "#ccc" } }}
                  InputProps={{
                    style: { color: "#fff" },
                    endAdornment: <ArrowDropDownIcon />
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": { borderColor: "#666" },
                      "&:hover fieldset": { borderColor: "#999" },
                    },
                  }}
                />
              </Box>

              {/* Right Field */}
              <Box sx={{ flex: '1 1 45%', minWidth: 200 }}>
                <Typography variant="h6" sx={{ mb: 1 }}>
                  Card Size
                </Typography>
                <TextField
                  fullWidth
                  label="63|88mm"
                  variant="outlined"
                  InputLabelProps={{ style: { color: "#ccc" } }}
                  InputProps={{
                    style: { color: "#fff" },
                    endAdornment: <ArrowDropDownIcon />
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": { borderColor: "#666" },
                      "&:hover fieldset": { borderColor: "#999" },
                    },
                  }}
                />
              </Box>
            </Box>

            {/* Card Color Theme Section */}
            <Box sx={{ mt: 2 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                {/* Color Theme Selector */}
                <Box>
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    Card Color Theme
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
                    {/* + Add Color Box */}
                    <Box
                      sx={{
                        width: 32,
                        height: 32,
                        borderRadius: '8px',
                        backgroundColor: 'transparent',
                        border: '2px dashed #aaa',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        color: '#aaa',
                        fontWeight: 'bold',
                        '&:hover': {
                          borderColor: '#fff',
                          color: '#fff',
                        },
                      }}
                    >
                      +
                    </Box>

                    {/* Color Circles */}
                    {['#426c9e', '#e64d3c', '#e6b33c', '#edbed9', '#eddaa4', '#d1ccbe'].map((color, index) => (
                      <Box
                        key={index}
                        sx={{
                          width: 32,
                          height: 32,
                          borderRadius: '50%',
                          backgroundColor: color,
                          cursor: 'pointer',
                          '&:hover': {
                            border: '2px solid #ccc',
                          },
                        }}
                      />
                    ))}
                    {/* + Add Color Box */}
                    <Box
                      sx={{
                        width: 32,
                        height: 32,
                        borderRadius: '8px',
                        backgroundColor: 'transparent',
                        border: '2px dashed #aaa',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        color: '#aaa',
                        fontWeight: 'bold',
                        '&:hover': {
                          borderColor: '#fff',
                          color: '#fff',
                        },
                      }}
                    >
                      +
                    </Box>
                  </Box>
                </Box>

                {/* Cards per Deck Field */}
                <Box>
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    How many Cards per Deck
                  </Typography>
                  <TextField
                    fullWidth
                    label="30"
                    variant="outlined"
                    InputLabelProps={{ style: { color: "#ccc" } }}
                    InputProps={{
                      style: { color: "#fff" },
                      endAdornment: <ArrowDropDownIcon />
                    }}
                    sx={{
                      maxWidth: '300px',
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": { borderColor: "#666" },
                        "&:hover fieldset": { borderColor: "#999" },
                      },
                    }}
                  />
                </Box>
              </Box>
            </Box>

            {/* Create Tuck Box Button and Additional Option Field */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, mt: 3 }}>
              {/* Create Tuck Box Button */}
              <Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '15px',
                    borderRadius: '17px',
                    backgroundColor: '#615e57',
                    color: '#fff',
                    fontWeight: '500',
                    cursor: 'pointer',
                    '&:hover': {
                      backgroundColor: '#727069',
                    }
                  }}
                >
                  <CheckCircleOutlineRoundedIcon sx={{ mr: 1, color: '#9c9cff' }} />
                  <Typography variant="h6" sx={{ m: 0, fontSize: '16px' }}>
                    Create Tuck Box
                  </Typography>
                </Box>
              </Box>

              {/* Additional Cards per Deck Field */}
              <Box>
                <Typography variant="h6" sx={{ mb: 1}}>
                  Card Block
                </Typography>
                <TextField
                  fullWidth
                  label="common block"
                  variant="outlined"
                  InputLabelProps={{ style: { color: "#ccc" } }}
                  InputProps={{
                    style: { color: "#fff" },
                    endAdornment: <ArrowDropDownIcon />
                  }}
                  sx={{
                    maxWidth: '300px',
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": { borderColor: "#666" },
                      "&:hover fieldset": { borderColor: "#999" },
                    },
                  }}
                />
              </Box>
            </Box>

            {/* Image Gallery */}
            <Box sx={{ width: '100%', overflowX: 'auto', py: 2, mt: 3 }}>
              <Typography variant="h6" sx={{ mb: 1}}>
                Theme
              </Typography>
              <Box sx={{ display: 'flex', gap: 3 }}>
                {itemData.slice(0, 5).map((item) => (
                  <Box
                    key={item.img}
                    sx={{
                      width: 150,
                      flexShrink: 0,
                      borderRadius: '10px',
                      overflow: 'hidden',
                      backgroundColor: 'transparent',
                    }}
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      loading="lazy"
                      style={{
                        width: '90%',
                        height: '150px',
                        objectFit: 'cover',
                        borderRadius: '10px',
                      }}
                    />
                    <Typography
                      variant="subtitle1"
                      sx={{
                        color: '#fff',
                        textAlign: 'left',
                        p: 1,
                        borderRadius: '4px'
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      sx={{
                        color: '#94928d',
                        textAlign: 'left',
                        mb: 1,
                        p: 1,
                        borderRadius: '4px'
                      }}
                    >
                      {item.author}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>

            {/* Upload Files Section */}
            <Box sx={{ width: '100%', mt: 3 }}>
              <Typography variant="h6" sx={{ mb: 1 }}>
                Upload Files
              </Typography>
              <Box
                component="label"
                htmlFor="file-upload"
                sx={{
                  width: '100%',
                  height: 300,
                  border: '2px solid #888',
                  borderRadius: '20px',
                  backgroundColor: '#1C223769',
                  color: '#ccc',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '18px',
                  textAlign: 'center',
                  cursor: 'pointer',
                  mb: 2,
                  '&:hover': {
                    borderColor: '#aaa',
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  }
                }}
              >
                <FolderIcon sx={{ fontSize: 50, mb: 1, color: '#aaa' }} />
                Drag and drop files here or click to upload <br />
                Support all images Format
                <input
                  id="file-upload"
                  type="file"
                  multiple
                  hidden
                  onChange={(e) => {
                    const files = e.target.files;
                    if (files!.length > 0) {
                      console.log('Uploaded files:', files);
                    }
                  }}
                />
              </Box>

              {/* Upload Button */}
              <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                <Link to="/create-card-game" style={{ textDecoration: 'none', width: '100%' }}>
                  <Box
                    sx={{
                      width: '100%',
                      background: 'linear-gradient(90deg,#487e96, #482252)',
                      border: '2px solid #00bfff',
                      color: '#fff',
                      padding: '15px',
                      borderRadius: '20px',
                      textAlign: 'center',
                      fontWeight: 600,
                      fontSize: '16px',
                      cursor: 'pointer',
                      '&:hover': {
                        background: '#005fcc',
                        borderColor: '#fff',
                      },
                    }}
                  >
                    Create Card Game
                  </Box>
                </Link>
              </Box>
            </Box>
          </Box>

    </Box>
  );
}
import { useState } from "react";

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Box, Card, Grid, Chip, alpha, Table, Avatar, Button, TableRow, TextField, TableCell, TableBody, TableHead, Typography, TableContainer } from "@mui/material";

import { DashboardContent } from "src/layouts/dashboard";


interface Order {
  id: string;
  date: string;
  items: number;
  total: number;
  status: 'Delivered' | 'Shipped' | 'Pending' | 'Cancelled';
}

// Mock data
const ORDERS_DATA: Order[] = [
  { id: '#ORD-2025-001', date: 'Jan 15, 2025', items: 3, total: 245.0, status: 'Delivered' },
  { id: '#ORD-2025-002', date: 'Jan 10, 2025', items: 1, total: 85.0, status: 'Shipped' },
  { id: '#ORD-2025-003', date: 'Jan 5, 2025', items: 2, total: 165.0, status: 'Delivered' },
  { id: '#ORD-2025-004', date: 'Jan 20, 2025', items: 5, total: 450.0, status: 'Pending' },
  { id: '#ORD-2025-005', date: 'Jan 25, 2025', items: 4, total: 320.0, status: 'Delivered' },

];

const getStatusColor = (status: Order['status']) => {
  switch (status) {
    case 'Delivered':
      return 'success';
    case 'Shipped':
      return 'secondary';
    case 'Pending':
      return 'success';
    case 'Cancelled':
      return 'error';
    default:
      return 'default';
  }
};

export default function Profile() {

  const [openModal, setOpenModal] = useState(false);
  const quantityBox = 2;

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  const handlePlaceOrder = () => {
    alert('Order placed!');
    handleCloseModal();
  };
  return (
    <div className="profile-page">        {/* Avatar, form fields, etc. */}

      <DashboardContent maxWidth="xl" sx={{ color: '#fff', gap: '20px' }}>
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" sx={{ mb: 2 }}>
            Profile
          </Typography>
        </Box>

        {/* Main Form Box */}
        <Card
  sx={{
    p: 10,
    background: 'rgba(82, 71, 123, 0.35)',
    backdropFilter: 'blur(10px)',
    border: (theme) => `1px solid ${alpha(theme.palette.common.white, 0.1)}`,
    borderRadius: 2,
    boxShadow: (theme) => `0 0 24px 0 ${alpha(theme.palette.common.black, 0.08)}`,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 4,
  }}
>
  {/* Avatar + Form Section - FLEX ROW */}
  <Box
    sx={{
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      gap: 4,
      flexWrap: 'wrap',
    }}
  >
    {/* Avatar Section */}
    <Box
      sx={{
        position: "relative",
        width: 216,
        height: 216,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      {/* Outer Ellipse */}
      <Box
        sx={{
          position: "absolute",
          width: 216,
          height: 216,
          borderRadius: "50%",
          background: "linear-gradient(180deg, rgba(255,255,255,0.4), rgba(255,255,255,0.2))",
          top: 0,
          left: 0,
          zIndex: 1,
        }}
      />
      {/* Inner Ellipse with Avatar */}
      <Box
        sx={{
          position: "absolute",
          width: 184,
          height: 184,
          borderRadius: "50%",
          border: "1.1px solid rgba(253, 246, 255, 0.72)",
          top: 16,
          left: 16,
          zIndex: 2,
          overflow: "hidden",
        }}
      >
        <Avatar src="/avatar.jpg" sx={{ width: "100%", height: "100%" }} />
      </Box>
      {/* Change Label */}
      <Box
        sx={{
          position: "absolute",
          bottom: -32,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 3,
        }}
      >
        <Typography variant="body2" color="text.secondary">
          Change Avatar
        </Typography>
      </Box>
    </Box>

    {/* User Form Fields */}
    <Grid container spacing={2} sx={{ flexGrow: 1}}>
      <Grid size={{xs: 12, sm: 6, md: 6}}>
        <TextField fullWidth  sx={{
    "& label": {
      color: "#C2BFFF", // Label color
    },
    "& label.Mui-focused": {
      color: "#80080", // Label color on focus
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#B19CD9", // Default border
      },
      "&:hover fieldset": {
        borderColor: "#9370DB", // On hover
      },
      
      "& input": {
        color: "#ffffff", // Input text color
      },
    },
  }} label="Full Name" variant="outlined" defaultValue="Nicholas Turner" />
      </Grid>
      <Grid size={{xs: 12, sm: 6, md: 6}}>
        <TextField fullWidth  sx={{
    "& label": {
      color: "#C2BFFF", // Label color
    },
    "& label.Mui-focused": {
      color: "#80080", // Label color on focus
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#B19CD9", // Default border
      },
      "&:hover fieldset": {
        borderColor: "#9370DB", // On hover
      },
      
      "& input": {
        color: "#ffffff", // Input text color
      },
    },
  }} label="Phone" variant="outlined" defaultValue="+1 (555) 123-6567" />
      </Grid>
      <Grid size={{xs: 12, sm: 6, md: 6}}>
        <TextField fullWidth  sx={{
    "& label": {
      color: "#C2BFFF", // Label color
    },
    "& label.Mui-focused": {
      color: "#80080", // Label color on focus
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#B19CD9", // Default border
      },
      "&:hover fieldset": {
        borderColor: "#9370DB", // On hover
      },
      
      "& input": {
        color: "#ffffff", // Input text color
      },
    },
  }} label="Email" variant="outlined" defaultValue="john.doe@example.com" />
      </Grid>
      <Grid size={{xs: 12, sm: 6, md: 6}}>
        <TextField fullWidth  sx={{
    "& label": {
      color: "#C2BFFF", // Label color
    },
    "& label.Mui-focused": {
      color: "#80080", // Label color on focus
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#B19CD9", // Default border
      },
      "&:hover fieldset": {
        borderColor: "#9370DB", // On hover
      },
      
      "& input": {
        color: "#ffffff", // Input text color
      },
    },
  }} label="Location" variant="outlined" defaultValue="Sydney, Australia" />
      </Grid>
    </Grid>
  </Box>

  {/* Save Button Section - COLUMN BELOW */}
  <Box width="100%" display="flex" justifyContent="flex-end">
    <Button variant="contained" color="primary" sx={{ px: 4, py: 1.5 }}>
      Save Changes
    </Button>
  </Box>
</Card>


        <Card
          sx={{
            padding: '10px',
            background: 'rgba(82, 71, 123, 0.35)',
            backdropFilter: 'blur(10px)',
            border: (theme) => `1px solid ${alpha(theme.palette.common.white, 0.1)}`,
            borderRadius: 2,
            boxShadow: (theme) => `0 0 24px 0 ${alpha(theme.palette.common.black, 0.08)}`,
          }}
        >

          {/* Avatar Section */}
          <TableContainer sx={{ px: 2 }}>
            <Table>
              <TableHead sx={{ backgroundColor: 'transparent', '& .MuiTableCell-root': { backgroundColor: 'transparent' } }}>
                <TableRow>
                  {['Order ID', 'Date', 'Items', 'Total', 'Status'].map((header) => (
                    <TableCell
                      key={header}
                      sx={{
                        color: '#B8B4C9',
                        borderBottom: (theme) => `1px solid ${alpha(theme.palette.common.white, 0.1)}`,
                        py: 3,
                        fontSize: '0.875rem',
                        fontWeight: 500,
                      }}
                    >
                      {header}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {ORDERS_DATA.map((order) => (
                  <TableRow
                    key={order.id}
                    hover
                    sx={{ '&:hover': { backgroundColor: (theme) => alpha(theme.palette.common.white, 0.03) } }}
                  >
                    <TableCell sx={{ color: '#fff', borderBottom: (theme) => `1px solid ${alpha(theme.palette.common.white, 0.1)}`, py: 2.5 }}>
                      {order.id}
                    </TableCell>
                    <TableCell sx={{ color: '#fff', borderBottom: (theme) => `1px solid ${alpha(theme.palette.common.white, 0.1)}`, py: 2.5 }}>
                      {order.date}
                    </TableCell>
                    <TableCell sx={{ color: '#fff', borderBottom: (theme) => `1px solid ${alpha(theme.palette.common.white, 0.1)}`, py: 2.5 }}>
                      {order.items} items
                    </TableCell>
                    <TableCell sx={{ color: '#fff', borderBottom: (theme) => `1px solid ${alpha(theme.palette.common.white, 0.1)}`, py: 2.5 }}>
                      ${order.total.toFixed(2)}
                    </TableCell>
                    <TableCell sx={{ borderBottom: (theme) => `1px solid ${alpha(theme.palette.common.white, 0.1)}`, py: 2.5 }}>
                      <Chip
                        label={order.status}
                        color={getStatusColor(order.status) as any}
                        size="small"
                        onClick={order.status === 'Delivered' ? handleOpenModal : undefined}
                        sx={{
                          backdropFilter: 'blur(4px)',
                          fontWeight: 600,
                          cursor: order.status === 'Delivered' ? 'pointer' : 'default',
                        }}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>


        </Card>

        <Card
          sx={{
            padding: '20px',
            background: 'rgba(82, 71, 123, 0.35)',
            backdropFilter: 'blur(10px)',
            border: (theme) => `1px solid ${alpha(theme.palette.common.white, 0.1)}`,
            borderRadius: 2,
            boxShadow: (theme) => `0 0 24px 0 ${alpha(theme.palette.common.black, 0.08)}`,
          }}
        >

          {/* Modern Grid Layout */}
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Box>
             <Typography variant="h3" color="red">Danger Zone</Typography>
             <Typography variant="body2" color="white">Once you delete your account, there is no going back. Be certain</Typography>

              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
            <Box display="flex" justifyContent="flex-end">
            <Button
              variant="contained"
              sx={{ px: 4, py: 1.5 , color: 'white', backgroundColor: 'red'}}
            >
              <DeleteOutlineIcon />
              Delete Account
            </Button>
          </Box>
            </Grid>
            
          </Grid>

          


        </Card>
      </DashboardContent>
    </div>
  );
}
import { useState } from 'react';

import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import {
  Box,
  Card,
  Chip,
  Table,
  Stack,
  alpha,
  Modal,
  Button,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  TextField,
  Typography,
  TableContainer,
  InputAdornment,
} from '@mui/material';

// Types
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
  { id: '#ORD-2025-006', date: 'Jan 30, 2025', items: 3, total: 210.0, status: 'Shipped' },
  { id: '#ORD-2025-007', date: 'Feb 1, 2025', items: 6, total: 600.0, status: 'Cancelled' },
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

export function OrderHistory() {
  const [searchQuery, setSearchQuery] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const quantityBox = 2;

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  const handlePlaceOrder = () => {
    alert('Order placed!');
    handleCloseModal();
  };

  return (
    <Box sx={{ px: 3, py: 4, height: '100%' }}>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4" sx={{ color: '#fff' }}>Order History</Typography>
      </Stack>

      <Card
        sx={{
          background: 'rgba(82, 71, 123, 0.35)',
          backdropFilter: 'blur(10px)',
          border: (theme) => `1px solid ${alpha(theme.palette.common.white, 0.1)}`,
          borderRadius: 2,
          boxShadow: (theme) => `0 0 24px 0 ${alpha(theme.palette.common.black, 0.08)}`,
        }}
      >
        <Box sx={{ p: 3 }}>
          <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={2}>
            <TextField
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              sx={{
                width: '100%',
                '& .MuiOutlinedInput-root': {
                  backgroundColor: (theme) => alpha(theme.palette.background.paper, 0.05),
                  backdropFilter: 'blur(4px)',
                  '&:hover': {
                    backgroundColor: (theme) => alpha(theme.palette.background.paper, 0.07),
                  },
                  '& fieldset': {
                    border: (theme) => `1px solid ${alpha(theme.palette.common.white, 0.1)}`,
                  },
                  '&:hover fieldset': {
                    borderColor: (theme) => alpha(theme.palette.common.white, 0.2),
                  },
                },
                '& input': { color: '#fff' },
                '& input::placeholder': {
                  color: (theme) => alpha(theme.palette.common.white, 0.5),
                  opacity: 1,
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: (theme) => alpha(theme.palette.common.white, 0.5) }} />
                  </InputAdornment>
                ),
              }}
            />
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                cursor: 'pointer',
                p: 1,
                borderRadius: 1,
                '&:hover': {
                  backgroundColor: (theme) => alpha(theme.palette.background.paper, 0.01),
                },
              }}
            >
              <FilterListIcon sx={{ color: (theme) => alpha(theme.palette.common.white, 0.7) }} />
              <Typography variant="subtitle2" sx={{ color: (theme) => alpha(theme.palette.common.white, 0.7) }}>Filter</Typography>
            </Box>
          </Stack>
        </Box>

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

      {/* Modal Code */}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="order-confirmation-modal"
        aria-describedby="order-confirmation-description"
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 650,
          bgcolor: '#2f2439',
          border: '2px solid #6c6e69',
          boxShadow: 24,
          p: 4,
          borderRadius: '20px',
          color: 'white',
          height: 900
        }}>
          <Typography variant="h4" sx={{ fontWeight: "bold", textAlign: 'center' }}>
            Order Confirmation
          </Typography>

          <Box sx={{ width: 208, height: 200, backgroundColor: '#8f8d89', borderRadius: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden', ml: 24, mt: 2 }}>
            <Box component="img" src="/image3.png" alt="Math Adventure Box" sx={{ width: '100%', height: '100%', objectFit: 'contain', padding: '6px' }} />
          </Box>

          <Typography variant="h5" sx={{ fontWeight: "bold", mt: 2, textAlign: 'center' }}>
            Math Adventure Box
          </Typography>
          <hr style={{ borderColor: "#87739E", marginTop: 1 }} />

          <Box sx={{ mb: 2 }}>
            <Typography variant="h6" sx={{ mb: 1, mt: 2 }}>Order Details:</Typography>
            <Box sx={{ mb: 2, color: '#e8e3e3' }}>
              <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
                <Typography>Order ID:</Typography>
                <Typography>#080-2025-001</Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
                <Typography>Date:</Typography>
                <Typography>Jan 16, 2025</Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
                <Typography>Shipping Method:</Typography>
                <Typography> DHL Express for 7 Business Days</Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
                <Typography>Quantity:</Typography>
                <Typography>{quantityBox}</Typography>
              </Box>
            </Box>

            <hr style={{ borderColor: "#87739E" }} />
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>Order Summary</Typography>

            <Box sx={{ mb: 2 }}>
              <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                <Typography>Order ID:</Typography>
                <Typography> $225.00</Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                <Typography>Shipping (DHL Express - Sydney, Australia):</Typography>
                <Typography>$35.00</Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                <Typography>Tax</Typography>
                <Typography> $26.00</Typography>
              </Box>

              <hr style={{ borderColor: "#a6a5a2", margin: '12px 0' }} />

              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>Total Amount</Typography>
                <Typography variant="h6" sx={{ fontWeight: "bold", color: '#87739E' }}>$288.00</Typography>
              </Box>
            </Box>

            <Button
              variant="contained"
              fullWidth
              onClick={handlePlaceOrder}
              sx={{
                mt: 1,
                background: '#00A300',
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
            >Delivered
              
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}

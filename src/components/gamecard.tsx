import { Box, Card, Typography } from "@mui/material";

type GameCardProps = {
  title: string;
  date: string;
  image: string;
};

export default function GameCard({ title, date, image }: GameCardProps) {
  return (
    <Card
      sx={{
        width: '177px',
        height: '240px',
        borderRadius: '12px',
        p: 2,
        backgroundColor: '#2f2439',
        border: '1px solid #534e54',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transition: 'transform 0.2s',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
        },
      }}
    >
      <Box
        sx={{
          height: '140px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
          borderRadius: '8px',
          backgroundColor: '#1a0f23',
        }}
      >
        <img
          src={image}
          alt={title}
          style={{
            maxHeight: '100%',
            maxWidth: '100%',
            objectFit: 'contain',
            borderRadius: '6px',
          }}
        />
      </Box>
      <Box sx={{ textAlign: 'center', mt: 2 }}>
        <Typography
          variant="subtitle2"
          sx={{
            color: '#fff',
            fontWeight: 600,
            fontSize: '0.9rem',
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="caption"
          sx={{
            color: '#aaa',
            fontSize: '0.8rem',
          }}
        >
          {date}
        </Typography>
      </Box>
    </Card>
  );
}

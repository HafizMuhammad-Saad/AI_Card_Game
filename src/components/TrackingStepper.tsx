import { Box, Typography } from "@mui/material";

interface Step {
  id: number;
  name: string;
  status: 'completed' | 'active' | 'pending';
}

interface TrackingStepperProps {
  steps: Step[];
}

export const TrackingStepper = ({ steps }: TrackingStepperProps) => (
    <Box sx={{ 
      display: 'flex',
      flexDirection: 'column',
      mt: 3,
      mb: 3,
      gap:6
    }}>
      
      
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between',
        position: 'relative',
        width: '100%',
        gap:6,
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '16px',
          left: '10%',
          right: '10%',
          height: '2px',
          backgroundColor: '#374151',
          zIndex: 1
        }
      }}>
        {steps.map((step, index) => (
          <Box 
            key={step.id} 
            sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center',
              zIndex: 2,
              position: 'relative',
              flex: 1
            }}
          >
            <Box sx={{
              width: 32,
              height: 32,
              borderRadius: '50%',
              backgroundColor: step.status === 'completed' ? '#827585' : 
                            step.status === 'active' ? '#827585' : '#6B7280',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mb: 1
            }}>
              <Typography sx={{ 
                color: 'white', 
                fontWeight: 'bold',
                fontSize: '0.875rem'
              }}>
                {step.status === 'completed' ? '✓' : ""}
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ 
              fontSize: '0.75rem',
              color: step.status === 'completed' ? '#FFFFFF' : 
                   step.status === 'active' ? '#FFFFFF' : '#FFFFFF',
              textAlign: 'center',
              maxWidth: '80px',
              lineHeight: '1.3'
            }}>
              {step.name}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
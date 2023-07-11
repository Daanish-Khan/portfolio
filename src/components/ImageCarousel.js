import * as React from 'react';
import { createTheme } from '@mui/material/styles';
import { Stack } from '@mui/material';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { COLORS } from './consts';
import { ThemeProvider } from '@emotion/react';
import Link from '@mui/material/Link';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function ImageCarousel({ images, widthBreakpoints }) {
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const theme = createTheme({
    components: {
      MuiMobileStepper: {
        styleOverrides: {
          dotActive: {
            backgroundColor: COLORS.focusedColor
          }
        }
      }
    }
  })

  return (
    <Box sx={{ maxWidth: {xs: 345, md: 400, lg: 500 }, flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: 90,
          pl: 2,
          pr: 2,
          bgcolor: 'background.default',
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
      >
      <Stack spacing={1}>
          <Typography
              variant="h8"
              sx={{
                  color: COLORS.defaultColor, 
                  alignItems: {xs: "center"},
                  textAlign: {xs: "center"},
                  justifyContent: {xs: "center"},
                  display: {xs: "flex"}, 
                  fontWeight: "light",
              }}
            >Pictures by&nbsp;<Link href="https://howardt12345.com/">Howard Tseng</Link>{widthBreakpoints.md ? ". Check him out!" : ""}</Typography>
            
        <Typography
          variant="h7"
          sx={{
              color: COLORS.primaryColor, 
              alignItems: {xs: "center"},
              textAlign: {xs: "center"},
              justifyContent: {xs: "center"},
              display: {xs: "flex"}, 
              fontWeight: "bold",
          }}
        >{images[activeStep].label}</Typography>
      </Stack>
      
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: { xs: 200, md: 255, lg: 355},
                  display: 'block',
                  maxWidth: { xs: 345, md: 400, lg: 500 },
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <ThemeProvider theme={theme}>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          sx={{borderBottomLeftRadius: 10, borderBottomRightRadius: 10}}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
              sx={{
                '&.MuiButton-text': {
                  color: COLORS.defaultColor
                },
                '&.Mui-disabled': {
                  color: "grey"
                }
              }}
            >
              Next
              {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button 
              size="small" 
              onClick={handleBack} 
              disabled={activeStep === 0}
              sx={{
                '&.MuiButton-text': {
                  color: COLORS.defaultColor
                },
                '&.Mui-disabled': {
                  color: "grey"
                }
              }}
            >
              {theme.direction === 'rtl' ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />

      </ThemeProvider>

    </Box>
  );
}

export default ImageCarousel;
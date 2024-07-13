import {Box, Container, Typography} from "@mui/material";

export default function Home() {
  return (
        <Container component="main" sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
        }}>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <Typography>私たちが目指すのは、真に意味のあるものの創造です。</Typography>
            <Typography>誰のために？</Typography>
            <Typography>それは、社名に込められた通り、3者のためです。</Typography>
            <Typography>「お客様」「取引先」「従業員」</Typography>
            <Typography>そのため、私たちは一切の妥協をしません。</Typography>
          </Box>
        </Container>
  );
}

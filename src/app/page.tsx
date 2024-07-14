import {
  AppBar,
  Box, Button, TextField, Toolbar,
  Typography,
} from "@mui/material";

export default function Home() {
  return (
      <>
        {/* header */}

        {/* body */}
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            minHeight="100vh"
            textAlign="center"
        >
          <Typography variant="h4" gutterBottom>
            価値を創造します
          </Typography>
          <Typography variant="body1" gutterBottom>
            「お客様」「取引先」「従業員」
          </Typography>
          <Typography variant="body1" gutterBottom>
            3者にとっての価値です
          </Typography>
          <Typography variant="body1" gutterBottom>
            そのための手段は問いません
          </Typography>
          <Typography variant="body1" gutterBottom>
            妥協もありません
          </Typography>
        </Box>

        {/* footer */}
      </>
  );
}

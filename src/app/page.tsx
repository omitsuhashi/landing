import { AppBar, Box, Link, Toolbar, Typography } from "@mui/material";

export default function Home() {
  return (
    <>
      {/* header */}
      <AppBar
        position="static"
        sx={{ backgroundColor: "transparent", boxShadow: "none" }}
      >
        <Toolbar>
          <Typography
            color="black"
            variant="h6"
            sx={{ flexGrow: 1 }}
            alignContent="center"
          >
            the3
          </Typography>
          <Link href="mailto:omitsuhashi.the3@gmail.com">お問い合わせ</Link>
        </Toolbar>
      </AppBar>

      {/* body */}
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="30vh"
        textAlign="center"
      >
        <Box>
          <Typography variant="h4" gutterBottom>
            価値を創造します
          </Typography>
          <Typography variant="body1" gutterBottom>
            「お客様」「取引先」「従業員」
          </Typography>
          <Typography variant="body1" gutterBottom>
            3者それぞれにとっての価値です
          </Typography>
          <Typography variant="body1" gutterBottom>
            そのための手段は問いません
          </Typography>
          <Typography variant="body1" gutterBottom>
            妥協もありません
          </Typography>
        </Box>
      </Box>

      <Box></Box>

      {/* footer */}
    </>
  );
}

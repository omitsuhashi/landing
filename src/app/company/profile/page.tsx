import { Box, Divider, Stack, Typography } from "@mui/material";

export default function CompanyProfile() {
  return (
    <>
      <Typography variant="h4">会社概要</Typography>
      <Box py={4}>
        <Divider />
      </Box>
      <Box p={2}>
        <Stack spacing={1}>
          <Stack spacing={1}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              会社名
            </Typography>
            <Typography>the3合同会社</Typography>
          </Stack>
          <Stack spacing={1}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              代表社員
            </Typography>
            <Typography>三橋修</Typography>
          </Stack>
          <Stack spacing={1}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              創立
            </Typography>
            <Typography>2024年8月26日</Typography>
          </Stack>
          <Stack spacing={1}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              資本金（2024年8月末日）
            </Typography>
            <Typography>100万円</Typography>
          </Stack>
          <Stack spacing={1}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              主な事業内容
            </Typography>
            <Typography>アプリの製造開発・販売</Typography>
          </Stack>
          <Stack spacing={1}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              従業員数
            </Typography>
            <Typography>1人</Typography>
          </Stack>
        </Stack>
      </Box>

      <Divider />
      <Box p={2}>
        <Stack spacing={1}>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            所在地（本拠地）
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            住所
          </Typography>
          <Typography>〒160-0023</Typography>
          <Typography>
            東京都 新宿区 西新宿3丁目3番13号 西新宿水間ビル6階
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            電話番号
          </Typography>
          <Typography>050-7107-2405</Typography>
        </Stack>
      </Box>
      <Divider />
    </>
  );
}

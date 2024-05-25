import { Box, Card, CardContent, Link, Typography } from "@mui/material";

export const Footer = () => {
  const currentYear = new Date().getFullYear(); // 現在の年を取得
  return (
    <Box sx={{ width: '100%', position: 'fixed', bottom: 0, left: 0, textAlign: 'center' }}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            <Link
              href="https://gmi.or.jp/"
              rel="noopener noreferrer"
              target="_blank"
              underline="none"
              sx={{ color: 'inherit', display: 'block', marginTop: '8px' }}
            >
              © {currentYear} グレース宣教会. All rights reserved.
            </Link>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

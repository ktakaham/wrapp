import { Box, Card, CardContent, Link, Typography } from "@mui/material";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <Box sx={{ width: '100%', position: 'fixed', bottom: 0, left: 0, textAlign: 'center', zIndex: 100 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            <Link
              href="https://chapel-hp.vercel.app/"
              rel="noopener noreferrer"
              target="_blank"
              underline="none"
              sx={{ color: 'inherit', display: 'block', marginTop: '8px' }}
            >
              © {currentYear} グレース宣教会 東京チャペル
            </Link>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

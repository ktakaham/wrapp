import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Box, Card, CardContent, IconButton, Link, Stack } from "@mui/material";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <Box sx={{ width: '100%', position: 'fixed', bottom: 0, left: 0, textAlign: 'center', zIndex: 100 }}>
      <Card variant="outlined">
        <CardContent>
          <Stack direction="row" justifyContent="center" alignItems="center" spacing={1}>
            <Link
              href="https://chapel-hp.vercel.app/"
              rel="noopener noreferrer"
              target="_blank"
              underline="none"
              sx={{ color: 'inherit' }}
            >
              © {currentYear} グレース宣教会 東京チャペル
            </Link>
            <IconButton
              aria-label="instagram"
              component="a"
              href="https://www.instagram.com/tokyo_grace_mission/"
              rel="noopener noreferrer"
              target="_blank"
              sx={{ color: 'inherit' }}
              size="small"
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              aria-label="facebook"
              component="a"
              href="https://www.facebook.com/profile.php?id=100066882904978"
              rel="noopener noreferrer"
              target="_blank"
              sx={{ color: 'inherit' }}
              size="small"
            >
              <FacebookIcon />
            </IconButton>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};

import { Link, Typography } from "@mui/material";
import Box from "@mui/material/Box";

export default function Footer() {
  return (
    <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
      <Typography
        variant="h6"
        align="center"
        gutterBottom
        sx={{
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
        }}
      >
        MYCAL
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
      >
        Developed by
        <Link color="inherit" href="mailto:johnval990@gmail.com">
          John Valencia
        </Link>
      </Typography>
    </Box>
  );
}

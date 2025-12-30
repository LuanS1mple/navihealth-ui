import { Box } from "@mui/material";
import { AppFooter } from "../../components/Homes/AppFooter";
import { BenefitsInfo } from "../../components/Homes/BenefitsInfo";
import { FeatureCard } from "../../components/Homes/FeatureCard";
import { FeatureGrid } from "../../components/Homes/FeatureGrid";
import { FeatureOverview } from "../../components/Homes/FeatureOverview";
import { HeroIntro } from "../../components/Homes/HeroIntro";
import { ThemeProvider } from "../../theme";

const NaviHealth = () => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        background:
          "linear-gradient(180deg, rgba(240, 249, 251, 1) 0%, rgba(255, 255, 255, 1) 50%, rgba(232, 244, 248, 1) 100%)",
        position: "relative",
      }}
    >
      <FeatureOverview />
      <HeroIntro />
      <FeatureGrid />
      <BenefitsInfo />
      <FeatureCard />
      <AppFooter />
    </Box>
  );
};

const NaviHealthWithTheme = () => {
  return (
    <ThemeProvider>
      <NaviHealth />
    </ThemeProvider>
  );
};

export default NaviHealthWithTheme;

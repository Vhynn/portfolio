import GalleryTabs from "./GalleryTabs";
import Header from "./Header";
import { ThemeProvider } from "@mui/material";
import lightTheme from "../themes/lightTheme.js";

export default function Galleries() {
  return (
    <>
      <Header />
      <ThemeProvider theme={lightTheme}>
        <GalleryTabs />
      </ThemeProvider>
    </>
  );
}

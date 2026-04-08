import { styled } from "@mui/material/styles";

export const Layout = styled("div")({
  display: "grid",
  gridTemplateRows: "70px 1fr 80px",
  gridTemplateColumns: "300px 1fr",
  height: "100vh",
  background: "#000",
  color: "#fff",
  rowGap: "10px",
  columnGap: "10px",
  padding: "12px",
  boxSizing: "border-box",
});

export const Header = styled("div")({
  gridColumn: "1 / -1",
});

export const SidebarWrapper = styled("div")({
  gridColumn: "1",
  gridRow: "2",
});

export const MainContent = styled("div")({
  gridColumn: 2,
  gridRow: 2,
  overflowY: "auto",
  minHeight: 0,
  padding: "12px",
  boxSizing: "border-box",
  background: "#121212",
  borderRadius: "12px",
  scrollBehavior: "smooth",
  "&::-webkit-scrollbar": {
    display: "none",
  },
});

export const FooterWrapper = styled("div")({
  gridColumn: "1 / -1",
});

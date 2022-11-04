import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Box } from "@mui/material";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

type Props = {
  children?: ReactNode;
  title?: string;
};

const DefaultLayout = (props: Props) => {
  useDocumentTitle(props.title || "SHOP");
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header />
      <div style={{ height: 80 }}></div>
      {props.children}
      <Footer />
    </Box>
  );
};

export default DefaultLayout;

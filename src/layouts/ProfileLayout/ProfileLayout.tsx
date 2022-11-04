import AccountBoxIcon from "@mui/icons-material/AccountBox";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PasswordIcon from "@mui/icons-material/Password";
import HistoryIcon from "@mui/icons-material/History";
import { Container, Grid } from "@mui/material";
import { ReactNode } from "react";
import DefaultLayout from "../DefaultLayout";
import Sidebar from "./Sidebar";

type Props = {
  children?: ReactNode;
  title?: string;
};

const items = [
  {
    to: "/thong-tin-tai-khoan",
    icon: <AccountBoxIcon />,
    label: "Thông tin tài khoản",
  },
  {
    to: "/don-hang-cua-toi",
    icon: <LocalShippingIcon />,
    label: "Đơn hàng của tôi",
  },
  {
    to: "/san-pham-yeu-thich",
    icon: <FavoriteIcon />,
    label: "Sản phẩm yêu thích",
  },
  {
    to: "/san-pham-da-xem",
    icon: <HistoryIcon />,
    label: "Sản phẩm đã xem",
  },
  {
    to: "/doi-mat-khau",
    icon: <PasswordIcon />,
    label: "Đổi mật khẩu",
  },
];

const ProfileLayout = (props: Props) => {
  return (
    <DefaultLayout title={props.title}>
      <Container maxWidth="xl">
        <Grid container columnSpacing={3}>
          <Grid
            item
            xs={3}
            sx={{
              maxWidth: {
                xs: "100%",
                lg: "20%",
              },
              flex: {
                xs: "0 0 100%",
                lg: "0 0 20%",
              },
            }}
          >
            <Sidebar items={items} />
          </Grid>
          <Grid
            item
            xs={9}
            sx={{
              maxWidth: {
                lg: "80%",
                xs: "100%",
              },
              flex: {
                lg: "0 0 80%",
                xs: "0 0 100%",
              },
            }}
          >
            {props.children}
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />a
          </Grid>
        </Grid>
      </Container>
    </DefaultLayout>
  );
};

export default ProfileLayout;

import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Badge, Container, Grid } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cartState } from "../../redux/reducers/cartReducer";
import CategoriesLg from "./CategoriesLg";
import HeaderDrawer from "./HeaderDrawer";
import styles from "./style.module.css";
type Props = {};

const Header = (props: Props) => {
  const [state, setState] = useState<{ openDrawer: boolean }>({
    openDrawer: false,
  });
  const { count } = useSelector(cartState);

  const toggleDrawer = () => {
    setState((prev) => ({ ...prev, openDrawer: !prev.openDrawer }));
  };

  const closeDrawer = () => {
    setState((prev) => ({ ...prev, openDrawer: false }));
  };

  return (
    <header className={styles["header"]}>
      <Container maxWidth="xl" sx={{ height: "100%" }}>
        <Grid container sx={{ height: "100%" }}>
          <Grid item xs={6} style={{ display: "flex", alignItems: "center" }}>
            <Link to="/" className={styles["logo-link"]}>
              App
            </Link>
            <CategoriesLg />
          </Grid>
          <Grid
            item
            xs={6}
            sx={{
              display: {
                lg: "none",
                xs: "flex",
              },
            }}
            className={styles["menu-icon-wrapper"]}
          >
            <span onClick={toggleDrawer}>
              <MenuIcon />
            </span>
            <HeaderDrawer open={state.openDrawer} onClose={closeDrawer} />
          </Grid>
          <Grid
            item
            xs={6}
            sx={{
              display: {
                lg: "flex",
                xs: "none",
              },
            }}
            className={styles["icons-wrapper"]}
          >
            <div className={styles["search-bar"]}>
              <input type="text" placeholder="Tìm ở đây" />
              <span>
                <SearchIcon />
              </span>
            </div>
            <Link to="/thong-tin-tai-khoan" className={styles["icon-link"]}>
              <AccountCircleOutlinedIcon />
            </Link>
            <Badge badgeContent={1} color="primary">
              <Link to="/san-pham-yeu-thich" className={styles["icon-link"]}>
                <FavoriteBorderOutlinedIcon />
              </Link>
            </Badge>
            <Badge badgeContent={count} color="primary">
              <Link to="/gio-hang" className={styles["icon-link"]}>
                <ShoppingCartOutlinedIcon />
              </Link>
            </Badge>
          </Grid>
        </Grid>
      </Container>
    </header>
  );
};

export default Header;

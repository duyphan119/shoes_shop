import { Container } from "@mui/material";
import products from "../../../products.json";
import { DefaultLayout } from "../../layouts";
import Banners from "./Banners";
import Products from "./Products";
type Props = {};

const HomePage = (props: Props) => {
  return (
    <DefaultLayout title="Trang chủ">
      <div>
        <Banners />
      </div>
      <Container maxWidth="xl">
        <Products products={products} title="Giày thể thao nam" />
        <Products products={products} title="Giày thể thao nam" />
        <Products products={products} title="Giày thể thao nam" />
        <Products products={products} title="Giày thể thao nam" />
      </Container>
    </DefaultLayout>
  );
};

export default HomePage;

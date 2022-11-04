import { Grid } from "@mui/material";
import ProductCard from "../../components/ProductCard";
type Props = {
	products?: Array<any>;
};

const Products = (props: Props) => {
	if (!props.products) return <></>;
	return (
		<Grid container columnSpacing={2} rowSpacing={2}>
			{props.products.map((product: any) => (
				<Grid item xs={6} lg={3} md={4} key={product.id}>
					<ProductCard product={product} />
				</Grid>
			))}
			{props.products.map((product: any) => (
				<Grid item xs={6} lg={3} md={4} key={product.id}>
					<ProductCard product={product} />
				</Grid>
			))}
			{props.products.map((product: any) => (
				<Grid item xs={6} lg={3} md={4} key={product.id}>
					<ProductCard product={product} />
				</Grid>
			))}
			{props.products.map((product: any) => (
				<Grid item xs={6} lg={3} md={4} key={product.id}>
					<ProductCard product={product} />
				</Grid>
			))}
			{props.products.map((product: any) => (
				<Grid item xs={6} lg={3} md={4} key={product.id}>
					<ProductCard product={product} />
				</Grid>
			))}
		</Grid>
	);
};

export default Products;

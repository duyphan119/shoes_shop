import { Box, Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
type Props = {
	products?: Array<any>;
	title?: string;
};

const Products = (props: Props) => {
	return (
		<Box>
			<Typography sx={{ textAlign: "center", textTransform: "uppercase", padding: "24px 0 16px 0", fontSize: 24 }}>{props.title}</Typography>
			<Grid container columnSpacing={2} rowSpacing={2}>
				{props.products?.map((product: any) => {
					return (
						<Grid item xs={6} md={3} key={product.id}>
							<ProductCard product={product} />
						</Grid>
					);
				})}
			</Grid>
			<div style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "24px 0 16px 0", fontSize: 20 }}>
				<KeyboardDoubleArrowRightIcon />
				<Link to={`/collections/abc`}>
					<span style={{ textDecoration: "underline" }}>Xem tất cả sản phẩm</span>
				</Link>
				<KeyboardDoubleArrowLeftIcon />
			</div>
		</Box>
	);
};

export default Products;

import { Container, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { DefaultLayout } from "../../layouts";
import { cartState } from "../../redux/reducers/cartReducer";
import { formatPrice } from "../../utils/helpers";
import Empty from "./Empty";
import Items from "./Items";
import Result from "./Result";

type Props = {};
{
	/* <Grid xs={12} lg={3}>
						<Typography component="h6" variant="h6" style={{ textAlign: "right" }}>
							Tổng cộng
						</Typography>
						<Box
							sx={{
								width: "100%",
								display: "flex",
								justifyContent: "space-between",
								alignItems: "center",
							}}
						>
							<span>Giá gốc:</span>
							<span>{formatPrice(items.reduce((p: number, item: any) => p + item.quantity * item.product.price, 0))}</span>
						</Box>
						<Box
							sx={{
								width: "100%",
								display: "flex",
								justifyContent: "space-between",
								alignItems: "center",
							}}
						>
							<span>Giảm giá:</span>
							<span>
								{formatPrice(items.reduce((p: number, item: any) => p + item.quantity * (item.product.price - item.product.salePrice), 0))}
							</span>
						</Box>
						<Box
							sx={{
								width: "100%",
								display: "flex",
								justifyContent: "space-between",
								alignItems: "center",
							}}
						>
							<span>Tổng tiền:</span>
							<span style={{ textAlign: "right" }}>
								{formatPrice(items.reduce((p: number, item: any) => p + item.quantity * item.product.salePrice, 0))}
							</span>
						</Box>
					</Grid> */
}
const CartPage = (props: Props) => {
	const { items } = useSelector(cartState);
	console.log(items);
	return (
		<DefaultLayout title="Giỏ hàng">
			<Container maxWidth="lg" sx={{ py: 3 }}>
				{items.length > 0 ? (
					<Grid container>
						<Grid item xs={12}>
							<Typography component="h3" variant="h3" sx={{ mb: 3, textAlign: "center" }}>
								Giỏ hàng
							</Typography>
						</Grid>
						<Grid item xs={12}>
							<Items />
						</Grid>
						{/* <Grid xs={12} lg={6}>
						<Typography component="h6" variant="h6">
							Giảm giá
						</Typography>
						<form style={{ display: "flex", gap: "16px" }}>
							<TextField label="Mã giảm giá" variant="filled" style={{ flex: 1 }} />
							<Button variant="outlined">Áp dụng</Button>
						</form>
					</Grid> */}
						<Grid item xs={12}>
							<Typography component="h6" variant="h6" style={{ textAlign: "right" }}>
								Tổng cộng
							</Typography>
							<Result />
						</Grid>
					</Grid>
				) : (
					<Empty />
				)}
			</Container>
		</DefaultLayout>
	);
};

export default CartPage;

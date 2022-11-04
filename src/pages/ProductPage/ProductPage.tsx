import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DefaultLayout } from "../../layouts";
import products from "../../../products.json";
import { Box, Button, Container, Grid } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import styles from "./styles.module.css";
import { formatPrice } from "../../utils/helpers";
import { useAppDispatch } from "../../redux/store";
import { toastActions } from "../../redux/reducers/toastReducer";
import { cartActions } from "../../redux/reducers/cartReducer";
type Props = {};

const ProductPage = (props: Props) => {
	const appDispatch = useAppDispatch();
	const { slug } = useParams();
	const [state, setState] = useState<{ product: any; list: any[]; quantity: number }>({
		list: [],
		product: null,
		quantity: 1,
	});

	useEffect(() => {
		try {
			const _products = products.filter((p) => p.slug === slug);
			_products.sort((a, b) => +a.size - +b.size);
			setState((prev) => ({ ...prev, list: _products, product: _products[0] }));
		} catch (error) {}
	}, [slug]);

	console.log(state);

	const selectProduct = (product: any) => {
		setState((prev) => ({ ...prev, product }));
	};

	const changeQuantity = (newQuantity: number) => {
		if (newQuantity > 0) {
			setState((prev) => ({ ...prev, quantity: newQuantity }));
		}
	};

	const addToCart = () => {
		const data: any = {
			productId: state.product.id,
			product: state.product,
			quantity: state.quantity,
		};
		appDispatch(cartActions.add(data));
		appDispatch(toastActions.show({ text: "Thêm giỏ hàng thành công", type: "success" }));
	};

	if (!state.product) return <></>;
	return (
		<DefaultLayout title={state.list[0].name}>
			<Container maxWidth="md">
				<Grid container columnSpacing={2}>
					<Grid item md={6} xs={12}>
						<Box className="square">
							<img src={state.list[0].thumbnail} alt="" />
						</Box>
					</Grid>
					<Grid item md={6} xs={12}>
						<h3 className={styles["name"]}>{state.list[0].name}</h3>
						<div className={styles["sale-price"]}>
							{formatPrice(state.product.salePrice)}{" "}
							{state.product.salePrice !== state.product.price && <span className={styles["price"]}>{formatPrice(state.product.price)}</span>}
						</div>
						<Box className={styles["selected-color"]}>Màu sắc: {state.product.color}</Box>
						<Box className={styles["selected-size"]}>Kích cỡ: {state.product.size}</Box>
						<Box className={styles["list-size"]}>
							{state.list.map((product: any) => {
								return (
									<Box
										key={product.id}
										className={`${styles["size"]} ${product.size === state.product.size ? styles.active : ""}`}
										onClick={() => selectProduct(product)}
									>
										{product.size}
									</Box>
								);
							})}
						</Box>
						<Box className={styles["quantity-wrapper"]}>
							<Box className={styles["change-btn"]} onClick={() => changeQuantity(state.quantity - 1)}>
								<RemoveIcon />
							</Box>
							<Box className={styles["quantity"]}>{state.quantity}</Box>
							<Box className={styles["change-btn"]} onClick={() => changeQuantity(state.quantity + 1)}>
								<AddIcon />
							</Box>
						</Box>
						<Box className={styles["buttons"]}>
							<Button variant="outlined" onClick={addToCart}>
								Thêm vào giỏ hàng
							</Button>
							<Button variant="contained">Đặt hàng</Button>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</DefaultLayout>
	);
};

export default ProductPage;

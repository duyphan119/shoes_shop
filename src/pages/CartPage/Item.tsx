import { Avatar, Button, TableCell, TableRow } from "@mui/material";
import { memo } from "react";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useAppDispatch } from "../../redux/store";
import { cartActions } from "../../redux/reducers/cartReducer";
type Props = {
	item?: any;
};

const Item = ({ item }: Props) => {
	const appDispatch = useAppDispatch();

	const updateQuantity = (newQuantity: number) => {
		try {
			if (newQuantity > 0) {
				appDispatch(
					cartActions.update({
						...item,
						quantity: newQuantity,
					})
				);
			} else {
				deleteItem();
			}
		} catch (error) {}
	};

	const deleteItem = () => {
		try {
			appDispatch(cartActions.delete(item.productId));
		} catch (error) {}
	};

	if (!item) return <></>;
	return (
		<TableRow>
			<TableCell style={{ display: "flex", alignItems: "center", gap: "8px" }}>
				<HighlightOffIcon onClick={deleteItem} style={{ color: "red", cursor: "pointer" }} />
				<Avatar src={item.product.thumbnail} style={{ width: 72, height: 72 }} variant="square" alt="" />
				<p>
					{item.product.name}
					<br />
					{item.product.color} / {item.product.size}
				</p>
			</TableCell>
			<TableCell align="right">{item.product.salePrice}</TableCell>
			<TableCell align="right">
				<Button
					size="small"
					onClick={() => updateQuantity(item.quantity - 1)}
					variant="contained"
					style={{ minWidth: "28px", height: 28, marginRight: 8 }}
				>
					-
				</Button>
				{item.quantity}
				<Button
					size="small"
					onClick={() => updateQuantity(item.quantity + 1)}
					variant="contained"
					style={{ minWidth: "28px", height: 28, marginLeft: 8 }}
				>
					+
				</Button>
			</TableCell>
			<TableCell align="right">{item.product.salePrice * item.quantity}</TableCell>
		</TableRow>
	);
};

export default memo(Item);

import { useMemo } from "react";
import { useSelector } from "react-redux";
import { cartState } from "../../redux/reducers/cartReducer";
import { formatPrice } from "../../utils/helpers";
type Props = {};

const Result = (props: Props) => {
	const { items } = useSelector(cartState);

	const price: number = useMemo(() => {
		return items.reduce((p: number, item: any) => p + item.quantity * item.product.price, 0);
	}, [items]);

	const discount: number = useMemo(() => {
		return items.reduce((p: number, item: any) => p + item.quantity * (item.product.price - item.product.salePrice), 0);
	}, [items]);

	const salePrice: number = useMemo(() => {
		return items.reduce((p: number, item: any) => p + item.quantity * item.product.salePrice, 0);
	}, [items]);

	return (
		<table style={{ marginLeft: "auto" }}>
			<tbody>
				<tr>
					<td>Giá gốc:</td>
					<td style={{ textAlign: "right" }}>{formatPrice(price)}</td>
				</tr>
				<tr>
					<td>Giảm giá:</td>
					<td style={{ textAlign: "right" }}>{formatPrice(discount)}</td>
				</tr>
				<tr>
					<td>Tổng tiền:</td>
					<td style={{ textAlign: "right" }}>{formatPrice(salePrice)}</td>
				</tr>
			</tbody>
		</table>
	);
};

export default Result;

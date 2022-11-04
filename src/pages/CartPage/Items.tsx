import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { useSelector } from "react-redux";
import { cartState } from "../../redux/reducers/cartReducer";
import Item from "./Item";
type Props = {};

const Items = (props: Props) => {
	const { items } = useSelector(cartState);
	return (
		<Table
			sx={{
				width: "100%",
				"td,th": {
					border: "none",
					boxShadow: "0 0 1px 0 #868686",
				},
				my: 2,
			}}
			size="small"
			aria-label="a dense table"
		>
			<TableHead>
				<TableRow>
					<TableCell>Sản phẩm</TableCell>
					<TableCell align="right">Đơn giá</TableCell>
					<TableCell align="right">Số lượng</TableCell>
					<TableCell align="right">Thành tiền</TableCell>
				</TableRow>
			</TableHead>
			<TableBody>
				{items.map((item: any, index: number) => (
					<Item key={index} item={item} />
				))}
			</TableBody>
		</Table>
	);
};

export default Items;

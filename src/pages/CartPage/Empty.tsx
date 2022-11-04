import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import emptyCartSvg from "../../assets/empty_cart.svg";
type Props = {};

const Empty = (props: Props) => {
	return (
		<Box display="flex" alignItems="center" justifyContent="center" flexDirection="column">
			<img src={emptyCartSvg} width="400" alt="" />
			<br />
			<p>Giỏ hàng của bạn đang trống</p>
			<br />
			<Link to="/">
				<Button variant="contained">Quay về trang chủ</Button>
			</Link>
		</Box>
	);
};

export default Empty;

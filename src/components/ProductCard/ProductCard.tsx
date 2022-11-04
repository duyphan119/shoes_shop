import { Link } from "react-router-dom";
import { formatPrice } from "../../utils/helpers";

type Props = {
	product?: any;
};

const ProductCard = (props: Props) => {
	if (!props.product) return <></>;
	return (
		<>
			<Link className="square" to={`/san-pham/${props.product.slug}`}>
				<img src={props.product.thumbnail} alt="" />
			</Link>
			<Link to={`/san-pham/${props.product.slug}`} style={{ fontSize: 14, fontWeight: "bold", lineHeight: "15px" }}>
				{props.product.name}
			</Link>
			<div style={{ color: "red" }}>
				{formatPrice(props.product.salePrice)}
				{props.product.salePrice !== props.product.price && (
					<span style={{ color: "gray", textDecoration: "line-through", marginLeft: 8 }}>{formatPrice(props.product.price)}</span>
				)}
			</div>
		</>
	);
};

export default ProductCard;

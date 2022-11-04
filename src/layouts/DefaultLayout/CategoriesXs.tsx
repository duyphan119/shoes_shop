import ExpandLessOutlinedIcon from "@mui/icons-material/ExpandLessOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import { Collapse, List, ListItemButton, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
import { memo } from "react";
type Props = {
	toggleExpand?: any;
	isExpand?: boolean;
};

const CategoriesXs = (props: Props) => {
	return (
		<List component="nav" sx={{ width: "100%", bgcolor: "background.paper" }}>
			<Link to="/thong-tin-tai-khoan">
				<ListItemButton>
					<ListItemText primary="Tài khoản" />
				</ListItemButton>
			</Link>
			<ListItemButton onClick={props.toggleExpand}>
				<ListItemText primary="Danh mục" />
				{props.isExpand ? <ExpandLessOutlinedIcon /> : <ExpandMoreOutlinedIcon />}
			</ListItemButton>
			<Collapse in={props.isExpand} timeout="auto" unmountOnExit>
				<List component="div" disablePadding>
					<Link to="/">
						<ListItemButton sx={{ pl: 4 }}>
							<ListItemText primary="Sale" />
						</ListItemButton>
					</Link>
					<Link to="/">
						<ListItemButton sx={{ pl: 4 }}>
							<ListItemText primary="Nam" />
						</ListItemButton>
					</Link>
					<Link to="/">
						<ListItemButton sx={{ pl: 4 }}>
							<ListItemText primary="Nữ" />
						</ListItemButton>
					</Link>
				</List>
			</Collapse>
			<Link to="/san-pham-yeu-thich">
				<ListItemButton>
					<ListItemText primary="Sản phẩm yêu thích" />
				</ListItemButton>
			</Link>
			<Link to="/gio-hang">
				<ListItemButton>
					<ListItemText primary="Giỏ hàng" />
				</ListItemButton>
			</Link>
		</List>
	);
};

export default memo(CategoriesXs);

import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { Divider, List } from "@mui/material";
import { NavLink } from "react-router-dom";
import styles from "./style.module.css";
import { ReactElement } from "react";

type Props = {};

type Item = {
	to?: string;
	icon?: ReactElement;
	text?: string;
	items?: Item[];
};

const items1: Item[] = [
	{
		to: "/bang-dieu-khien",
		icon: <DashboardIcon />,
		text: "Bảng điều khiển",
	},
	{
		to: "/danh-sach-don-hang",
		icon: <ShoppingCartIcon />,
		text: "Đơn hàng",
	},
	{
		to: "/danh-sach-tai-khoan",
		icon: <PeopleIcon />,
		text: "Tài khoản",
	},
	{
		to: "/danh-sach-san-pham",
		icon: <Inventory2Icon />,
		text: "Sản phẩm",
	},
];

const ListItems = (props: Props) => {
	return (
		<List component="nav">
			{items1.map((item: Item) => {
				if (item.to)
					return (
						<NavLink to={item.to || "/#"} className={({ isActive }: any) => (isActive ? styles["item-active"] : "")}>
							<ListItemButton>
								<ListItemIcon>{item.icon}</ListItemIcon>
								<ListItemText primary={item.text} />
							</ListItemButton>
						</NavLink>
					);
				return (
					<ListItemButton>
						<ListItemIcon>{item.icon}</ListItemIcon>
						<ListItemText primary={item.text} />
					</ListItemButton>
				);
			})}
			<Divider sx={{ my: 1 }} />
			<ListSubheader component="div" inset>
				Saved reports
			</ListSubheader>
			<ListItemButton>
				<ListItemIcon>
					<AssignmentIcon />
				</ListItemIcon>
				<ListItemText primary="Current month" />
			</ListItemButton>
			<ListItemButton>
				<ListItemIcon>
					<AssignmentIcon />
				</ListItemIcon>
				<ListItemText primary="Last quarter" />
			</ListItemButton>
			<ListItemButton>
				<ListItemIcon>
					<AssignmentIcon />
				</ListItemIcon>
				<ListItemText primary="Year-end sale" />
			</ListItemButton>
		</List>
	);
};

export default ListItems;

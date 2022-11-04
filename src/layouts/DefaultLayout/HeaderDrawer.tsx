import SearchIcon from "@mui/icons-material/Search";
import { Box, Button, Drawer } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { memo, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CategoriesXs from "./CategoriesXs";
import styles from "./style.module.css";

type Props = {
	open?: boolean;
	onClose?: any;
};

const HeaderDrawer = (props: Props) => {
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.up("lg"));
	const [isExpand, setIsExpand] = useState<boolean>(false);
	const navigate = useNavigate();
	const { pathname } = useLocation();

	const toggleExpand = () => {
		setIsExpand((prev) => !prev);
	};

	const logout = () => {
		console.log("Logout");
		navigate("/dang-nhap");
	};

	useEffect(() => {
		if (matches && props.open) {
			props.onClose();
		}
	}, [matches, props.open]);

	useEffect(() => {
		setIsExpand(false);
	}, [pathname]);

	return (
		<Drawer
			anchor="right"
			open={props.open}
			onClose={props.onClose}
			sx={{
				display: {
					lg: "none",
				},
			}}
		>
			<Box
				className={styles["drawer-wrapper"]}
				sx={{
					width: "90vw",
				}}
			>
				<Box
					className={styles["drawer-title"]}
					sx={{
						padding: "16px 16px 0 16px",
					}}
				>
					<Button variant="outlined" onClick={logout}>
						Đăng xuất
					</Button>
					{/* <Link to="/dang-nhap">
						<Button variant="outlined">Đăng nhập</Button>
					</Link>
					<Link to="/dang-ky">
						<Button variant="outlined">Đăng ký</Button>
					</Link> */}
				</Box>
				<div className={styles["search-bar"]}>
					<input type="text" placeholder="Tìm ở đây" />
					<span>
						<SearchIcon />
					</span>
				</div>
				<CategoriesXs isExpand={isExpand} toggleExpand={toggleExpand} />
			</Box>
		</Drawer>
	);
};

export default memo(HeaderDrawer);

import { Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import styles from "./style.module.css";
import SubCategoriesLg from "./SubCategoriesLg";
type Props = {};

const CategoriesLg = (props: Props) => {
	return (
		<Box
			sx={{
				display: {
					lg: "flex",
					xs: "none",
				},
			}}
			className={styles.categories}
		>
			<div className={styles["category-wrapper"]}>
				<NavLink to="/danh-muc/sale" className={({ isActive }: any) => (isActive ? styles.active : "") + ` ${styles.category}`}>
					Sale
				</NavLink>
				<SubCategoriesLg />
			</div>
			<div className={styles["category-wrapper"]}>
				<NavLink to="/danh-muc/nam" className={({ isActive }: any) => (isActive ? styles.active : "") + ` ${styles.category}`}>
					Nam
				</NavLink>
				<SubCategoriesLg />
			</div>
			<div className={styles["category-wrapper"]}>
				<NavLink to="/danh-muc/nu" className={({ isActive }: any) => (isActive ? styles.active : "") + ` ${styles.category}`}>
					Nữ
				</NavLink>
				<SubCategoriesLg />
			</div>
		</Box>
	);
};

export default CategoriesLg;

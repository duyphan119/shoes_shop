import { Box, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./style.module.css";

type Props = {
	category?: any;
};

const SubCategoriesLg = (props: Props) => {
	return (
		<Box className={styles["sub-categories-wrapper"]}>
			<Container maxWidth="xl">
				<Grid container columnSpacing={2} rowSpacing={2}>
					<Grid item xs={3}>
						<Typography component="h6" variant="body1">
							<Link className={styles["sub-category-heading"]} to="/">
								Áo
							</Link>
						</Typography>
					</Grid>
					<Grid item xs={3}>
						<Typography component="h6" variant="body1">
							<Link className={styles["sub-category-heading"]} to="/">
								Quần
							</Link>
						</Typography>
						<ul>
							<li>
								<Link className={styles["sub-category"]} to="/">
									Quần dài
								</Link>
							</li>
							<li>
								<Link className={styles["sub-category"]} to="/">
									Quần tây
								</Link>
							</li>
						</ul>
					</Grid>
					<Grid item xs={3}>
						<Typography component="h6" variant="body1">
							<Link className={styles["sub-category-heading"]} to="/">
								Phụ kiện
							</Link>
						</Typography>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default SubCategoriesLg;

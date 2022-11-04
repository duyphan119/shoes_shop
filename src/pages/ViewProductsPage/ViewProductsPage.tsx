import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import { Box, Breadcrumbs, Container, Grid, IconButton, Typography, Pagination } from "@mui/material";
import { Link, useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom";
import products from "../../../products.json";
import ProductCard from "../../components/ProductCard";
import { DefaultLayout } from "../../layouts";
import { useEffect, useState } from "react";
import Filter from "./Filter";
import FilterDrawer from "./FilterDrawer";
import Products from "./Products";
import Sort from "./Sort";
type Props = {};

type State = {
	open: boolean;
};

const ViewProductsPage = (props: Props) => {
	const { slug } = useParams();
	const location = useLocation();
	const navigate = useNavigate();
	const [query, setQuery] = useSearchParams();
	let page: any = query.get("page") && query.get("page") !== null ? query.get("page") : 1;
	page = isNaN(+page) ? 1 : page;
	console.log(page);
	const [state, setState] = useState<State>({ open: false });

	useEffect(() => {
		console.log("call Api: ", {
			page,
		});
	}, [page]);

	const changePage = (page: number) => {
		// console.log(location);
		// console.log(new URLSearchParams({ page }).toString());
		// navigate(location.pathname + new URLSearchParams({ page }).toString());
	};

	const toggleDrawer = () => {
		setState((prev) => ({ ...prev, open: !prev.open }));
	};

	return (
		<DefaultLayout>
			<Container maxWidth="xl" sx={{ py: 2 }}>
				<Box>
					<Breadcrumbs aria-label="breadcrumb">
						<Link color="inherit" to="/">
							MUI
						</Link>
						<Typography color="text.primary">Sale</Typography>
					</Breadcrumbs>
				</Box>
				<Box
					mt={1}
					display="flex"
					alignItems="center"
					sx={{
						justifyContent: {
							md: "flex-end",
							xs: "space-between",
						},
						".filler-icon-btn": {
							display: {
								md: "none",
							},
						},
					}}
				>
					<IconButton className="filler-icon-btn" onClick={toggleDrawer}>
						<FilterAltOutlinedIcon />
					</IconButton>
					<FilterDrawer open={state.open} onClose={toggleDrawer} />
					<Box display="flex" alignItems="center">
						<span>Sắp xếp </span>
						<Sort />
					</Box>
				</Box>
				<Box my={1}>
					<Grid container columnSpacing={2} rowSpacing={2}>
						<Box
							component={Grid}
							item
							md={3}
							display={{ xs: "none", md: "block" }}
							sx={{
								alignSelf: "stretch",
							}}
						>
							<Filter />
						</Box>
						<Grid item xs={12} md={9}>
							<Products products={products} />
							<Pagination
								onChange={(e, page) => changePage(page)}
								count={10}
								variant="outlined"
								color="primary"
								shape="rounded"
								sx={{ mt: 2, ul: { justifyContent: "center" } }}
							/>
						</Grid>
					</Grid>
				</Box>
			</Container>
		</DefaultLayout>
	);
};

export default ViewProductsPage;

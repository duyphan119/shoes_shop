import { Drawer, Box, Typography } from "@mui/material";
import { memo } from "react";

type Props = {
	open?: boolean;
	onClose?: any;
};

const FilterDrawer = (props: Props) => {
	return (
		<Drawer anchor="left" open={props.open} onClose={props.onClose}>
			<Box
				sx={{
					padding: "16px",
					".box": {
						marginTop: "16px",
						"&:first-child": {
							marginTop: 0,
						},
						ul: {
							display: "flex",
							gap: "8px",
							flexWrap: "wrap",
							li: {
								border: "1px solid #000",
								padding: "0 8px",
								fontSize: 12,
								cursor: "pointer",
								"&.active": {
									backgroundColor: "#000",
									color: "#fff",
								},
							},
						},
					},
				}}
			>
				<Box className="box">
					<Typography>Màu sắc</Typography>
					<ul>
						<li className="active">Đen</li>
						<li>Đen</li>
						<li>Đen</li>
					</ul>
				</Box>
				<Box className="box">
					<Typography>Kích cỡ</Typography>
					<ul>
						<li className="active">39</li>
						<li>40</li>
						<li>41</li>
					</ul>
				</Box>
				<Box className="box">
					<Typography>Kích cỡ</Typography>
					<ul>
						<li className="active">39</li>
						<li>40</li>
						<li>41</li>
					</ul>
				</Box>
			</Box>
		</Drawer>
	);
};

export default memo(FilterDrawer);

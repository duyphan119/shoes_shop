import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { DefaultLayout } from "../../layouts";

type Props = {};

const SignInPage = (props: Props) => {
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		console.log({
			email: data.get("email"),
			password: data.get("password"),
		});
	};
	return (
		<DefaultLayout title="Đăng nhập">
			<Grid container component="main" sx={{ height: "100vh" }}>
				<Grid
					item
					xs={false}
					md={8}
					sx={{
						backgroundImage: "url(https://source.unsplash.com/random)",
						backgroundRepeat: "no-repeat",
						backgroundColor: (t) => (t.palette.mode === "light" ? t.palette.grey[50] : t.palette.grey[900]),
						backgroundSize: "cover",
						backgroundPosition: "center",
					}}
				/>
				<Grid item xs={12} md={4} component={Paper} elevation={6} square>
					<Box
						sx={{
							my: 8,
							mx: 4,
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
						}}
					>
						<Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
							<LockOutlinedIcon />
						</Avatar>
						<Typography component="h1" variant="h5" sx={{ textTransform: "uppercase" }}>
							Đăng nhập
						</Typography>
						<Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
							<TextField margin="normal" required fullWidth id="email" label="Địa chỉ Email" name="email" autoComplete="email" autoFocus />
							<TextField
								margin="normal"
								required
								fullWidth
								name="password"
								label="Mật khẩu"
								type="password"
								id="password"
								autoComplete="current-password"
							/>
							<FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
							<Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
								Sign In
							</Button>
							<Grid
								container
								sx={{
									a: {
										textDecoration: "underline",
									},
								}}
							>
								<Grid item xs>
									<Link to="/quen-mat-khau">Quên mật khẩu?</Link>
								</Grid>
								<Grid item>
									<Link to="/dang-ky">Đăng ký</Link>
								</Grid>
							</Grid>
						</Box>
					</Box>
				</Grid>
			</Grid>
		</DefaultLayout>
	);
};

export default SignInPage;

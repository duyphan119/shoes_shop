import { Alert, Snackbar } from "@mui/material";
import { useSelector } from "react-redux";
import { toastActions, toastState } from "../../redux/reducers/toastReducer";
import { useAppDispatch } from "../../redux/store";

type Props = {};

const Toast = (props: Props) => {
	const { text, open, id, type } = useSelector(toastState);
	const appDispatch = useAppDispatch();

	const handleClose = () => {
		appDispatch(toastActions.hide());
	};

	return (
		<Snackbar autoHideDuration={3000} anchorOrigin={{ vertical: "bottom", horizontal: "left" }} open={open} onClose={handleClose} key={id}>
			<Alert variant="filled" onClose={handleClose} severity={type} sx={{ width: "100%" }}>
				{text}
			</Alert>
		</Snackbar>
	);
};

export default Toast;

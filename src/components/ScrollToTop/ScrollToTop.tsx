import { useState } from "react";
import { Button } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

type Props = {};

const ScrollToTop = (props: Props) => {
	const [visible, setVisible] = useState(false);

	const toggleVisible = () => {
		const scrolled = document.documentElement.scrollTop;
		if (scrolled > 300) {
			setVisible(true);
		} else if (scrolled <= 300) {
			setVisible(false);
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	window.addEventListener("scroll", toggleVisible);
	return (
		<Button
			variant="outlined"
			onClick={scrollToTop}
			style={{
				display: visible ? "flex" : "none",
				position: "fixed",
				bottom: "24px",
				right: "24px",
				zIndex: 10001,
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<KeyboardArrowUpIcon />
		</Button>
	);
};

export default ScrollToTop;

import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
type Props = {};

const LogoutItem = (props: Props) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/dang-nhap");
  };

  return (
    <ListItem disablePadding>
      <ListItemButton onClick={handleLogout}>
        <ListItemIcon>
          <LogoutIcon />
        </ListItemIcon>
        <ListItemText primary="Đăng xuất" />
      </ListItemButton>
    </ListItem>
  );
};

export default LogoutItem;

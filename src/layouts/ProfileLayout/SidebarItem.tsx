import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import styles from "./style.module.css";
type Props = {
  item: any;
};

const SidebarItem = (props: Props) => {
  return (
    <NavLink
      to={props.item.to}
      className={({ isActive }) =>
        isActive ? `${styles["sidebar-item-active"]}` : ``
      }
    >
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>{props.item.icon}</ListItemIcon>
          <ListItemText primary={props.item.label} />
        </ListItemButton>
      </ListItem>
    </NavLink>
  );
};

export default SidebarItem;

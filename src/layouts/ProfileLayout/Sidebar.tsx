import { List } from "@mui/material";
import LogoutItem from "./LogoutItem";
import SidebarItem from "./SidebarItem";
import styles from "./style.module.css";

type Props = {
  items?: any[];
  onLogout?: Function;
};

const Sidebar = (props: Props) => {
  return (
    <>
      <List className={styles["list"]}>
        {props.items?.map((item: any) => (
          <SidebarItem item={item} key={item.to} />
        ))}
        <LogoutItem />
      </List>
    </>
  );
};

export default Sidebar;

import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import styles from '@styles/Sidebar.module.scss'
import IconDashboard from "@assets/icons/IconDashboard";
import IconCustomers from "@assets/icons/IconCustomers";
import IconHelp from "@assets/icons/IconHelp";
import IconPromote from "@assets/icons/IconPromote";
import IconIncome from "@assets/icons/IconIncome";
import IconProduct from "@assets/icons/IconProduct";
const SidebarMenu = () => {
    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");
    return (
        <nav className={styles.sidebarMenu}>
            <ul>
                <li className={splitLocation[1] === "dashboard" ? styles.active : ""}>
                    <Link to="/dashboard" className={styles.link}>
                        <IconDashboard />
                        <span>Dashboard</span>
                    </Link>
                </li>
                <li className={splitLocation[1] === "product" ? styles.active : ""}>
                    <Link to="/product" className={styles.link}>
                        <IconProduct />
                        <span>Product</span>
                    </Link>
                </li>
                <li className={splitLocation[1] === "customers" ? styles.active : ""}>
                    <Link to="/customers" className={styles.link}>
                        <IconCustomers />
                        <span>Customers</span>
                    </Link>
                </li>
                <li className={splitLocation[1] === "income" ? styles.active : ""}>
                    <Link to="/income" className={styles.link}>
                        <IconIncome />
                        <span>Income</span>
                    </Link>
                </li>
                <li className={splitLocation[1] === "promote" ? styles.active : ""}>
                    <Link to="/promote" className={styles.link}>
                        <IconPromote />
                        <span>Promote</span>
                    </Link>
                </li>
                <li className={splitLocation[1] === "help" ? styles.active : ""}>
                    <Link to="/help" className={styles.link}>
                        <IconHelp />
                        <span>Help</span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
export default SidebarMenu;
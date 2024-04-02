import { Link } from "react-router-dom";
import styles from '@styles/Sidebar.module.scss'
// import IconDashboard from '@assets/icons/IconDashboard.svg'
import IconDashboard from "@assets/icons/IconDashboard";
import IconCustomers from "@assets/icons/IconCustomers";
const SidebarMenu = () => {
    return (
        <nav className={styles.sidebarMenu}>
            <ul>
                <li className={styles.active}>
                    <Link to="/" className={styles.link}>
                        <IconDashboard />
                        <span>Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to="/customers" className={styles.link}>
                        <IconCustomers />
                        <span>Dashboard</span>
                    </Link>
                </li>
                <li>

                </li>
                <li>

                </li>
                <li>

                </li>
                <li>

                </li>
            </ul>
        </nav>
    )
}
export default SidebarMenu;
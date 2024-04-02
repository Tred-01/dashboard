import styles from '@styles/Sidebar.module.scss'
import IconDashboardHead from '@assets/icons/IconDashboardHead.svg'
import SidebarMenu from './menu/SidebarMenu'
const Menu = () => {

    return (
        <sidebar className={styles.sidebar}>
            <div className={styles.sidebarHead}>
                <img src={IconDashboardHead} alt="dashboardIcon" />
                <h1>
                    Dashboard
                    <span>v.01</span>
                </h1>
            </div>
            <SidebarMenu />
        </sidebar>
    )
}

export default Menu;
import styles from '@styles/Sidebar.module.scss'
import IconDashboardHead from '@assets/icons/IconDashboardHead.svg'
import SidebarMenu from './menu/SidebarMenu'
import User from '@assets/image/user.svg'
const Menu = () => {

    return (
        <sidebar className={styles.sidebar}>
            <div className={styles.sidebarContent}>
                <div className={styles.sidebarHead}>
                    <img src={IconDashboardHead} alt="dashboardIcon" />
                    <h1>
                        Dashboard
                        <span>v.01</span>
                    </h1>
                </div>
                <SidebarMenu />
            </div>
            <div className={styles.user}>
                <img src={User} alt="user" />
                <div className={styles.info}>
                    <h4>Evano</h4>
                    <p>Project Manager</p>
                </div>
            </div>
        </sidebar>
    )
}

export default Menu;
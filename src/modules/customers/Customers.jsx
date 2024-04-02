import styles from '@styles/Customers.module.scss'
import IconSearch from '@assets/icons/IconSearch';
import PaginatedItems from '@modules/customers/customersTable/Table';
const Customers = () => {

    return (
        <div className={styles.customers}>
            <div className={styles.customersHead}>
                <h4>Hello Evano 👋🏼,</h4>
            </div>
            <div className={styles.content}>
                <div className={styles.contentHead}>
                    <div className={styles.contentHead__head}>
                        <h4>All Customers</h4>
                        <span className={styles.activeMembers}>Active Members</span>
                    </div>
                    <div className={styles.contentHead__search}>
                        <IconSearch />
                        <input type="text" className={styles.input} placeholder='Search'/>
                    </div>
                </div>
                <div className={styles.contentTable}>
                    <PaginatedItems />
                </div>
            </div>

        </div>
    )
}
export default Customers;
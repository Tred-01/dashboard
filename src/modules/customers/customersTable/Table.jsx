import mockData from '@src/mockData/mockData.json'
import React, {useEffect, useState} from 'react'
import ReactPaginate from 'react-paginate'
import styles from '@styles/Customers.module.scss'
const Table = () => {
    const members = mockData.members

    const membersLength = members.length
    const setStatus = (item) => {
        return item ? 'Active' : 'Inactive';
    }
    function Items({ currentItems }) {
        return (
            <table style={{ textAlign: 'left', width: '100%' }}>
                <thead>
                    <tr>
                    <th>Customer Name</th>
                    <th>Company</th>
                    <th>Phone Number</th>
                    <th>Email</th>
                    <th>Country</th>
                    <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        currentItems && currentItems.map(item => <tr>
                            <td>{item.name}</td>
                            <td>{item.company}</td>
                            <td>{item.number}</td>
                            <td>{item.email}</td>
                            <td>{item.country}</td>
                            <td>
                                <div className={item.status ? 'active-btn' : 'inactive-btn'}>{setStatus(item.status)}</div>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        );
    }

    function PaginatedItems({ itemsPerPage }) {
        const [currentItems, setCurrentItems] = useState(null);
        const [pageCount, setPageCount] = useState(0);
        const [itemOffset, setItemOffset] = useState(0);
        
        useEffect(() => {
            const endOffset = itemOffset + itemsPerPage;
            setCurrentItems(members.slice(itemOffset, endOffset));
            setPageCount(Math.ceil(members.length / itemsPerPage));

        }, [itemOffset, itemsPerPage]);
        
        const handlePageClick = (event) => {
            const newOffset = event.selected * itemsPerPage % members.length;
            setItemOffset(newOffset);

    };
    
    return (
        <>
        <Items currentItems={currentItems} />
        <ReactPaginate
            nextLabel=" >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            previousLabel="< "
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
        />
        </>
    );
    }

    return (
        <>
            <PaginatedItems  itemsPerPage={8}/>
            <div className={styles.counter}>
                <span>Showing data 1 to 8 of 256K entries</span>
            </div>
        </>
    )
}
export default Table;
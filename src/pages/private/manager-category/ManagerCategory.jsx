import React from 'react'
import SideBar from '../../../components/admin/sideBar/SideBar'
import Header from '../../../components/admin/header/Header'
import CategoryBody from './CategoryBody'

function ManagerCategory() {
    return (
        <div>
            <Header />
            <SideBar />
            <CategoryBody />
        </div>
    )
}

export default ManagerCategory

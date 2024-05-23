import React from 'react'
import Header from '../../../components/admin/header/Header'
import SideBar from '../../../components/admin/sideBar/SideBar'
import PageBody from './PageBody'
import Footer from '../../../components/admin/footer/Footer.jsx'



function Dashboard() {
    return (
        <> <SideBar />
            <Header />
            <PageBody />
            <Footer />
        </>

    )
}

export default Dashboard

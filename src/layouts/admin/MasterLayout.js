import React from "react";

import '../../assets/admin/css/styles.css';
import '../../assets/admin/js/scripts.js';

import Navbar from './Navbar.js';
import Sidebar from './Sidebar.js';
import Footer from './Footer.js';

const MasterLayout = () => {
return (
    <div className="sb-nav-fixed">
        <Navbar />
        <div id="layoutSidenav">
            <div id="layoutSidenav_nav">
                <Sidebar />
            </div>
        </div>
        <div id="layoutSidenav_content">
            <main>
                Master file
            </main>
            <Footer />
        </div>
    </div>
);
};

export default MasterLayout;
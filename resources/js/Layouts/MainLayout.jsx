import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import React from "react";

function MainLayout({ children }) {
    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    );
}

export default MainLayout;

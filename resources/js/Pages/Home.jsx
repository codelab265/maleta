import Category from "@/Components/Category";
import Hero from "@/Components/Hero";
import Metals from "@/Components/Metals";
import OurStory from "@/Components/OurStory";
import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";
import React from "react";

function Home() {
    return (
        <MainLayout>
            <Head title="Home" />
            <Hero />
            <Category />
            <OurStory />
            <Metals />
        </MainLayout>
    );
}

export default Home;

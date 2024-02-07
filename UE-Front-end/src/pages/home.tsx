import React from "react";
import { Outlet } from "react-router-dom";
// import Foot from "../components/foot";
import Head from "../components/Head";

const Home: React.FC = () => {
    return <>
        <Head />
        <Outlet />
        {/* <Foot /> */}
    </>
}

export default Home;
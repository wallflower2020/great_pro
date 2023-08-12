import React from "react";
import { Outlet } from "react-router-dom";
import Foot from "../components/foot";

const Home: React.FC = () => {
    return <>
        
        <Outlet />
        <Foot />
    </>
}

export default Home;
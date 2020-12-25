import React from "react";
import { Link } from "react-router-dom";

// import icon from "../../../assets/icon.svg";

export const HomePage = () => {
    return (
        <div>
            <h1>erb</h1>
            <Link
                to={"/profile"}
            >
                Go to profile
            </Link>
        </div>
    );
};

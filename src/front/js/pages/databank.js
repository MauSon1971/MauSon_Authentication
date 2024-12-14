import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/databank.css";

export const Databank = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="text-center mt-5">
            <h1>Databank!!</h1>

        </div>
    );
};
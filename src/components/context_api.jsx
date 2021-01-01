import React, { useState, createContext} from "react";
import Json from './data';
// import axios from 'axios';

export const projectsContext = createContext();

export const ContextApi = (props) => {
    const [projects] = useState(Json);
    
    return (
        <projectsContext.Provider
            value={{
            projects
            }}
        >
            {props.children}
        </projectsContext.Provider>
    );
}
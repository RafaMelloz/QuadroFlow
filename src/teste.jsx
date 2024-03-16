import React, { useState } from "react";
import { ReactSortable } from "react-sortablejs";


export const BasicFunction = (props) => {
    const [state, setState] = useState([
        
        { id: 1, name: "pinoquio" },
    ]);

    const [list, setList] = useState([
        { id: 1, name: "shrek" },
        
    ]);

    return (
        <>
            <ReactSortable list={state} setList={setState} group="groupName">
                {state.map((item) => (
                    <div key={item.id}>{item.name}</div>
                ))}
            </ReactSortable>

            <div>/</div>
            <div>/</div>
            <div>/</div>
            <div>/</div>

            <ReactSortable list={list} setList={setList} group="groupName">
                {list.map((item) => (
                    <div key={item.id}>{item.name}</div>
                ))}
            </ReactSortable>
        </>
    );
};

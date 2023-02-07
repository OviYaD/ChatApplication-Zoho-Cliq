import React, { useState, useEffect } from 'react';
import "./CircleLoader.scss"

export default function CircleLoader(params) {
    return <>
        <div style={{ alignItems: "center", marginLeft: "auto", marginRight: "auto", backgroundColor: "", width: "fit-content", padding: "5px", borderRadius: "100%" }}>
            <div className='loader'></div>
        </div>
    </>
};

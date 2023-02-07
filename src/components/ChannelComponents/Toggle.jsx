import React, { useState, useEffect } from 'react';
import "./Toggle.scss";

export default function Toggle(params) {
    useEffect(() => {

    }, [])
    return <>
        <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
        </label>
    </>
};

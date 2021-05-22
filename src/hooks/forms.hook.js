import React, { useState, useEffect } from 'react';

export function useFormInput(initialValue){
    const [value, setValue] = useState(initialValue);
    function handleChange(e){
        setValue(e.target.value);
    }
    return {
        value,
        onChange: handleChange
    };
}

export function useFormSelect(initialValue, initialLabel){
    const [value, setValue] = useState(initialValue);
    const [id,setId] = useState(initialValue)
    const [label, setLabel] = useState(initialLabel);
    function handleChange(e){
        setValue(e);
        setId(e.value);
        setLabel(e.label);
    }
    return {
        value,
        id,
        label,
        onChange: handleChange
    };
}
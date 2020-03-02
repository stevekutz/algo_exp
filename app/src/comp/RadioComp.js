import React from 'react';
import {useState, useEffect} from 'reinspect';

const RadioComp = ({idInfo}) => {
    const [radioState, setRadioState] = useState(true, "Radio State");

    const selectRadio = () => {
        setRadioState(!radioState);
    }

    return(
        <div>
            <input 
                type = 'radio'
                checked = {radioState}
                onClick = {selectRadio}
                id = {idInfo}           
            />
            <label htmlFor = {idInfo} > {idInfo}</label>
        </div>

    )

}

export default RadioComp;
/*
        <input 
            type="radio" 
            id="genericRadio" name="other Radio" 
            checked = {radioState}
            onClick = {toggleRadio}
            />
        <label htmlFor="genericRadio">Generic Radio</label>
*/
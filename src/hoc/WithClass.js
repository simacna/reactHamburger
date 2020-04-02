//hoc usually start with With in React
import React from 'react';
import { tsPropertySignature } from '@babel/types';

const WithClass = (props) => (
    //.classes is a property we expect to get from hoc
    //below simply does one thing, sets class on a div and wraps
    <div className={props.classes}> 
        {props.children}
    </div>
)

export default WithClass;
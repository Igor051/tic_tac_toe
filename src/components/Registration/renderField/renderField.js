import React from "react";

const renderField = ({input, className, placeholder, type, meta: {touched, error, warning}}) => (
    <div>
        <div>
            <input {...input} type={type} placeholder={placeholder} className={className}/>
            {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    </div>
)


export default renderField
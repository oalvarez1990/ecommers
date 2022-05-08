import React, { useState } from 'react';
// import 'styles/filters.css';

const DropDown = ({ header, children }) => {

    const [ isOpen, setIsOpen ] = useState(true)

    return (
        <div className={`filter-drop-down ${isOpen ? '' : 'closed'}`}>
            <div className="header" onClick={() => setIsOpen(!isOpen)}>
                <span>
                    {header}
                </span>
                <i className="icon-chevron-down"></i>
            </div>
            <div className="content">
                {children}
            </div>
        </div>
    );
};

export default DropDown;

// 2314


// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");

// const calculatorRoute = require('./routes/calculator.route');

// const app = express();

// app.use(bodyParser.json());
// //  no permitira objetos anidados
// app.use(bodyParser.urlencoded({ extended: true }));

// app.use('/api', calculatorRoute);

// app.use((error, req, res, next) => {
//     const status = error.statusCode || 500;
//     const message = error.message;
//     const data = error.data;
//     res.status(status).json({ message: message, data: data });
// });

// module.exports = app;
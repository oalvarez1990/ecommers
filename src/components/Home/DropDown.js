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


// ' Copia del clipboard a variable
// Function clip2str()
//   Dim objWord, str_x

//   Set objWord = CreateObject("Word.Application")
//   With objWord
//     .Visible = False
//     .Documents.Add
//     .Selection.Paste
//     .Selection.WholeStory
//     str_x = .Selection.Text
//     .Quit False
//   End With
//   clip2str = str_x
// End Function


// ' De variable a clipboard
// Function str2clip(str_x)
//   Dim objWord

//   Set objWord = CreateObject("Word.Application")
//   With objWord
//     .Visible = False
//     .Documents.Add
//     .Selection.TypeText str_x
//     .Selection.WholeStory
//     .Selection.Copy
//     .Quit False
//   End With
// End Function
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


// ' Copia del clipboard a variable
// Function clip2str()
//   Dim objWord, str_x

//   Set objWord = CreateObject("Word.Application")
//   With objWord
//     .Visible = False
//     .Documents.Add
//     .Selection.Paste
//     .Selection.WholeStory
//     str_x = .Selection.Text
//     .Quit False
//   End With
//   clip2str = str_x
// End Function


// ' De variable a clipboard
// Function str2clip(str_x)
//   Dim objWord

//   Set objWord = CreateObject("Word.Application")
//   With objWord
//     .Visible = False
//     .Documents.Add
//     .Selection.TypeText str_x
//     .Selection.WholeStory
//     .Selection.Copy
//     .Quit False
//   End With
// End Function
//Secrea nueva de ruta de salida pending
// 
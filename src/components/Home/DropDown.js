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

// export default DropDown;

//Requires
// const sgMail = require('@sendgrid/mail');
// const path = require('path');
// const fs = require('fs-extra');
// const hbs = require('handlebars');

// //Functions
// const compile = async function(templateName, data){

//   //Production
//   let filePath ="";
//   if(fs.existsSync(dirPath)){
//     filePath = path.join(process.cwd(), '../files/templates', `${templateName}.hbs`);
//   }else{
//     filePath = path.join(process.cwd(), '..\\files\\templates', `${templateName}.hbs`);
//   }
//  // const filePath = path.join(process.cwd(), '../files/templates', `${templateName}.hbs`);
  
//   //Development
//   //const filePath = path.join(process.cwd(), './files/templates', `${templateName}.hbs`);
  
//   const html = await fs.readFile(filePath, 'utf-8');
//   let template = hbs.compile(html);
  
//   let result = template(data);

//   return result;

// };

// //Global Mailer
// const mailer = {};

// mailer.requestAuthorizationMailer = async (userData, email, requestid) => {

//   try{
//     //Mailer
//     sgMail.setApiKey(email_api_key);

//     //Compile Template
//     let output = await compile('approveRequest', userData);

//     //Email Info
//     let info = {
//       from: 'operaciones@avanzo.co', // sender address
//       to: email, // list of receivers
//       subject: 'Avanzo (Créditos al instante) - Aprobación de solicitud  No. '  + requestid, // Subject line
//       text: 'Avanzo Créditos', // plain text body
//       html: output // html body
//     };

//     await sgMail.send(info, (err) => {
//       if (err){
//         return false;
//       }
//       return true;
//     });

//   }catch(e){
//     console.log(e);
//   }

// };

// module.exports = mailer;

// namespace RapiCredit
// {
//     public class BundleConfig
//     {
//         // Para obtener más información sobre las uniones, visite https://go.microsoft.com/fwlink/?LinkId=301862
//         public static void RegisterBundles(BundleCollection bundles)
//         {
//             bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
//                         "~/Scripts/jquery-{version}.js"));

//             bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
//                         "~/Scripts/jquery.validate*"));

//             // Utilice la versión de desarrollo de Modernizr para desarrollar y obtener información. De este modo, estará
//             // para la producción, use la herramienta de compilación disponible en https://modernizr.com para seleccionar solo las pruebas que necesite.
//             bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
//                         "~/Scripts/modernizr-*"));

//             bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
//                       "~/Scripts/bootstrap.js"));

//             bundles.Add(new StyleBundle("~/Content/css").Include(
//                       "~/Content/bootstrap.css",
//                       "~/Content/site.css"));
//         }
//     }
// }
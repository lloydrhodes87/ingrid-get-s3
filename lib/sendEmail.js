const nodemailer = require('nodemailer');
const getParam = require('./getParams');

async function sendEmail(body) {
  const items = JSON.parse(body);

  const appKey = await getParam()

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
           user: 'lloydrhodesdev@gmail.com',
           pass: appKey
       }
   });

   const message = `<p>
   ${items.formItems.message}<br>
   ${items.formItems.phone}<br>
   ${items.formItems.name}
 </p>`

   const mailOptions = {
    from: items.formItems.email, // sender address
    to: 'ingdama_eii@hotmail.com', // list of receivers
    subject: 'Ingrid Voice Enquiry', // Subject line
    html: message
  };



  const result = await transporter.sendMail(mailOptions)
    .catch(err => { return err})

 return result;

 
}

module.exports = sendEmail;
const nodemailer = require('nodemailer');

const transporterEmail = () => {
     return nodemailer.createTransport({
       service: 'Hotmail',
       auth: {
           user: 'lanzer-rxn@hotmail.com',
        //    user: 'andresfelipecx@gmail.com',
           pass: '6994193rxn'
       }
    });
}

const optionsEmail = (to, subject, text) => {
    let mailOptions = {
        from: 'andresfelipecx@gmail.com',
        to: to,
        subject: subject,
        text: text
    };

    return mailOptions;
}

const sendEmail = (transporter, to, subject, text) => {
    const options = optionsEmail(to, subject, text);

    transporter.sendMail(options, function(error, info){
        if (error){
            console.log(error);
        } else {
            console.log("Email sent");
        }
    });
}

module.exports = {
    sendEmail,
    transporterEmail
}
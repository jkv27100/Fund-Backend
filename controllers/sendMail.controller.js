const nodemailer = require('nodemailer');

const sendMail = () => {
    let mailTransporter = nodemailer.createTransport({
        service: 'hotmail',
        auth: {
            // user: 'fundingtest@hotmail.com',
            // pass: 'zedzee4545'
            user: 'fundingdocsupload@outlook.com',
            pass: 'zedzee4545'
        }
    });
    
    let mailDetails = {
        attachments: [

            // {   // file in /upload as an attachment, might change later
            //     filename: 'upload.pdf',
            //     path: 'uploads/upload.pdf' 
            // },
            {   // file in /upload as an attachment, might change later
                filename: 'upload2.pdf',
                path: 'uploads/upload2.pdf' 
            },
            {   // file in /upload as an attachment, might change later
                filename: 'upload.pdf',
                path: 'uploads/upload1.pdf' 
            }
        ],
        from: 'fundingdocsupload@outlook.com',
        to: 'admin@abhijith.codes',
        subject: 'Test mail',
        text: 'Fund testing'
    };
    mailTransporter.sendMail(mailDetails, function(err, data) {
        if(err) {
            console.log(err);
        } else {
            fs.unlinkSync('uploads/upload1.pdf')
            fs.unlinkSync('uploads/upload2.pdf')
            res.send('Email sent successfully')
            console.log('Email sent successfully');
        }
    });
}

module.exports = {sendMail}

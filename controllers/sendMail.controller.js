const nodemailer = require('nodemailer');

const sendMail = () => {
    let mailTransporter = nodemailer.createTransport({
        service: 'hotmail',
        auth: {
            user: 'fundingtest@hotmail.com',
            pass: 'zedzee4545'
        }
    });
    
    let mailDetails = {
        // attachments: [
        //     {   // utf-8 string as an attachment
        //         filename: 'text1.txt',
        //         content: 'hello world!'
        //     },
        //     {   // binary buffer as an attachment
        //         filename: 'text2.txt',
        //         content: new Buffer('hello world!','utf-8')
        //     },
        //     {   // file on disk as an attachment
        //         filename: 'text3.txt',
        //         path: '/path/to/file.txt' // stream this file
        //     },
        //     {   // filename and content type is derived from path
        //         path: '/path/to/file.txt'
        //     },
        //     {   // stream as an attachment
        //         filename: 'text4.txt',
        //         content: fs.createReadStream('file.txt')
        //     },
        //     {   // define custom content type for the attachment
        //         filename: 'text.bin',
        //         content: 'hello world!',
        //         contentType: 'text/plain'
        //     },
        //     {   // use URL as an attachment
        //         filename: 'license.txt',
        //         path: 'https://raw.github.com/nodemailer/nodemailer/master/LICENSE'
        //     },
        //     {   // encoded string as an attachment
        //         filename: 'text1.txt',
        //         content: 'aGVsbG8gd29ybGQh',
        //         encoding: 'base64'
        //     },
        //     {  
        //         path: 'data:text/plain;base64,aGVsbG8gd29ybGQ='
        //     },
        // ],
        from: 'fundingtest@hotmail.com',
        to: 'admin@abhijith.codes.',
        subject: 'Test mail',
        text: 'Fund testing'
    };
    mailTransporter.sendMail(mailDetails, function(err, data) {
        if(err) {
            console.log(err);
        } else {
            res.send('Email sent successfully')
            console.log('Email sent successfully');
        }
    });
}

module.exports = {sendMail}

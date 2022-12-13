/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

let nodemailer = require("nodemailer");
let aws = require("@aws-sdk/client-ses");
let { defaultProvider } = require("@aws-sdk/credential-provider-node");

const ses = new aws.SES({
  apiVersion: "2010-12-01",
  region: "us-east-1",
  defaultProvider,
});

// create Nodemailer SES transporter
let transporter = nodemailer.createTransport({
  SES: { ses, aws },
});

exports.handler = (event, context) => {
  // send some mail
  transporter.sendMail({
    from: event.email,
    to: event.email,
    subject: "Submit form",
    text: "I hope this message gets sent!",
  });

  return Promise.resolve(event);
};

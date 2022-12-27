/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

let nodemailer = require("nodemailer");
let aws = require("@aws-sdk/client-ses");
let { defaultProvider } = require("@aws-sdk/credential-provider-node");

exports.handler = (event) => {
  const eventData = event.Records[0];
  if (eventData.eventName === "INSERT") {
    const email = eventData.dynamodb.NewImage.email.S;
    const title = eventData.dynamodb.NewImage.title.S;
    const date = eventData.dynamodb.NewImage.date.S;
    const time = eventData.dynamodb.NewImage.time.S;
    const eventId = eventData.dynamodb.NewImage.eventId.S;

    const ses = new aws.SES({
      apiVersion: "2010-12-01",
      region: "us-east-1",
      defaultProvider,
    });

    // create Nodemailer SES transporter
    let transporter = nodemailer.createTransport({
      SES: { ses, aws },
    });

    const html = `
    <h1>Hi ${email}!</h1>
    <p>You submitted a form for approval with the following information:</p>
    <ul>
      <li>Name: ${title}</li>
      <li>Date: ${date}</li>
      <li>Time: ${time}</li>
    </ul>
    <p>If you want to approve this form, click <a href="https://dev.d354mzc4kk41vc.amplifyapp.com/#/events/update/${eventId}">here</a>.</p>
    <p>If you want to update the details, click <a href="https://dev.d354mzc4kk41vc.amplifyapp.com/#/events/update/${eventId}">here</a>.</p>
    <p>Kindly,</p>
    <p>Johns Hopkins Science Calendar Team</p>
  `;

    // send some mail
    const info = transporter.sendMail({
      from: "Hopkins Medicine Science Calendar <rnavedojr@gmail.com>",
      to: ["rnavedojr@gmail.com"],
      subject: "JH Science Calendar Event Approval",
      html: html,
    });

    return Promise.resolve(info);
  } else {
    return Promise.resolve();
  }
};

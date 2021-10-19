const nodemailer = require("nodemailer");
const fs = require("fs");
async function mailIlgeeye(mailKhayag, ilgeekhMail, zurag, nekhemjlekhEsekh = false) {
  let transporter = nodemailer.createTransport({
    host: 'smtp.zevtabs.mn',
    port: 587,
    pool: true,
    // 587 tls
    // 25 none
    //secure: true, // use SSL
    //secure: true, // use TLS
    secureConnection: false,
    tls: {
      rejectUnauthorized: false,
      secureProtocol: "TLSv1_method"
    },
    auth: {
      user: "info@zevtabs.mn", // generated ethereal user
      pass: "Br1stelback@", // generated ethereal password
    },
  });
  var mail = {
    from: 'info@zevtabs.mn', // sender address
    to: mailKhayag, // list of receivers
    subject: "Нэхэмжлэх", // Subject line
    //text: ilgeekhMail, // plain text body
    html: ilgeekhMail, // html body
    attachments: (zurag && !nekhemjlekhEsekh) ? [{
      filename: 'send.png',
      //path: __dirname + '/../zurag/system/send.png',
      path: zurag,
      //path: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsgAAALIBa5Ro4AAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAK4SURBVFiFxZdPbExRFMZ/353pmyIk0rSlCaH+hKCSSoSGmTYhFhZiQxBNRGJFWNphZU0kWHchKVuJhDAtG8uWECGIP1VEQpqm80bdYzETYbw35s0UZ3Vzz7nf98u5ufe+Bw2EDQWrbShY3YiGq9s833wQ9Aj0qDSuL1SX+SAp2jPPgCXlqVf4cJn6mE6qVV8HFgS7fzIHWEwq2FWPVH0ApmM1zdUQibfA7gRrcRqNXCtbr2xxNIle8g5IxyPNS8mjieWSFNtd5uMzb4DZMSVTfA0WadvEp1o1k3XAB0eqmAPMIh0eTiJZcwfKR+8psPQPpa94H3ZqD98SA9ituS0EYTu4VrzvQGpDasP7DpyWYPTWRCvyeHuJc2OYfcDsA86Ngf9IMfP+5y2S5YPdoLOIpUBQk0HjUcR4gbOTsqHMW6DjHxlXhH1yiOf/xxyQHjvM7Qce/gf7h5jb75Sbek0q7EHc+Ifmt/HhVuWmXjsAbWGClnAXsoG/bi1dxYc71cdnqDyGhhhuPgV26i/ZnycbnpCwHzxRVZZvPoTsMtA0Q8bfEEeVDS9VJmJvQstntiOuAfMaNJ9E7FU2vB6VjH0L1BveBF1s0BzQhTjzqgCltbahcQDrrpaNBbBBUhgbGwdgkw2SSgxAe1MXje8/wFxam9YlB8D1zIB5KRSvVQXANs8YQBWtdPwi/QnAQFfKw31U+7iRknXAbs1pBzqrWD/B2KFc4YByhQOgXuBBFdhOG569sGYAgq9bYoQmQWdoDbtK90QplCsM48Nu4ATwJRp6OrKj0QDGit9mZAP49HLlCqe1hmLlEvUxrVx4Dp9eVX7UrKJkZe0ASt2F8kelMYJ3WWWL/eqbHI+s/wVkclzZYj/eZTFGytMec/cj6+OEbChYh3ctULhXz08ngN0hjWvuAXunXPg0quY7FQDY/efTIOEAAAAASUVORK5CYII=',
      cid: 'zurag' //same cid value as in the html img src
    }] : (nekhemjlekhEsekh ? [{
      //filename: 'send.png',
      path: __dirname + '/../Tamga.png',
      cid: 'tamga'
    }] : null)
  }
  transporter.sendMail(mail, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}
module.exports = {
  mailIlgeeye
}
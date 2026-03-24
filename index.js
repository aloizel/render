const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
 
// Change cette URL par ton vrai lien PDF
const PDF_URL = "https://www.orimi.com/pdf-test.pdf"; //"https://i.imgur.com/aYqhIzz.jpeg";
 
app.get("/pdf", (req, res) => {
  // res.json({
  //   messages: [
  //     {
  //       type: "ATTACHMENT", // "GALLERY",
  //       messageNumber: 1,
  //       attachment: {
  //        type: "file",
  //        url: PDF_URL,
  //       },
  //      // elements: [
  //      //   {
  //      //     title: "Mon image",
  //      //     imageUrl: PDF_URL
  //      //   }
  //      // ]
  //     },
  //   ],
  // });
 res.json({
  messages: [
    {
      type: "DEFAULT",
      messageNumber: 1,
      text: "Voici votre document :",
      buttons: [
        {
          type: "web_url",
          url: "https://www.orimi.com/pdf-test.pdf",
          title: "Ouvrir le PDF",
          buttonNumber: 1,
          messengerExtensions: false
        }
      ]
    }
  ]
});
});
 
app.listen(PORT, () => console.log(`API running on port ${PORT}`));

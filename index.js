const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
 
// Change cette URL par ton vrai lien PDF
const PDF_URL = "https://upload.wikimedia.org/wikipedia/commons/a/a7/Camponotus_flavomarginatus_ant.jpg";
 
app.get("/pdf", (req, res) => {
  res.json({
    messages: [
      {
        type: "GALLERY", //"ATTACHMENT",
        messageNumber: 1,
        //attachment: {
        //  type: "file",
        //  url: PDF_URL,
        //},
       elements: [
         {
           title: "Mon image",
           imageUrl: PDF_URL
         }
       ]
      },
    ],
  });
});
 
app.listen(PORT, () => console.log(`API running on port ${PORT}`));

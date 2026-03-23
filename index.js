const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
 
// Change cette URL par ton vrai lien PDF
const PDF_URL = "https://ton-serveur.com/monproduit.pdf";
 
app.get("/pdf", (req, res) => {
  res.json({
    messages: [
      {
        type: "ATTACHMENT",
        messageNumber: 1,
        attachment: {
          type: "file",
          url: PDF_URL,
        },
      },
    ],
  });
});
 
app.listen(PORT, () => console.log(`API running on port ${PORT}`));

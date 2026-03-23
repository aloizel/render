const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
 
// Change cette URL par ton vrai lien PDF
const PDF_URL = "https://img.freepik.com/vecteurs-libre/vecteur-conception-degrade-colore-oiseau_343694-2506.jpg?semt=ais_hybrid&w=740&q=80";
 
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

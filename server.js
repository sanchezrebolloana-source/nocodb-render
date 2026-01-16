const Noco = require("nocodb");

Noco({
  port: process.env.PORT || 8080,
}).then(() => {
  console.log("NocoDB iniciado correctamente en Render");
});

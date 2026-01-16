const { start } = require("nocodb");

start({
  port: process.env.PORT || 8080,
  host: "0.0.0.0",
}).then(() => {
  console.log("NocoDB iniciado correctamente");
});

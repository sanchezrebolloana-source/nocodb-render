const { start } = require("nocodb");

const PORT = process.env.PORT || 10000;

start({
  port: PORT,
  host: "0.0.0.0"
}).then(() => {
  console.log(`NocoDB escuchando en puerto ${PORT}`);
}).catch(err => {
  console.error("Error arrancando NocoDB:", err);
});

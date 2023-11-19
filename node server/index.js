// index.js
// this file is at starter for the app

import app from "./src/app.js";

const PORT = 3000;

let server = app.listen(PORT, () =>
  console.log(`server started succecfuly at: ${server.address().address}` + ':' + PORT)
);

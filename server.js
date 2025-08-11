const { spawn } = require("node:child_process");

const port = process.env.PORT || "3000";
const child = spawn("node", [".next/standalone/server.js"], {
  env: { ...process.env, PORT: port },
  stdio: "inherit",
});
child.on("close", (code) => process.exit(code));

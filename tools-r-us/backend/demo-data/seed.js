const { db } = require("../firebaseConfig");
const tools = require("./tools.json");
const users = require("./users.json");

(async () => {
  for (const user of users) {
    await db.collection("users").add(user);
  }
  for (const tool of tools) {
    await db.collection("tools").add(tool);
  }
  console.log("Demo data seeded.");
})();
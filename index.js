// Wise Step 1 (Enhanced): The Messenger
console.log("---------------------------------------");
console.log("HEKAYATY: SYSTEM BOOT SEQUENCE STARTED");
console.log("Current Directory:", process.cwd());

import fs from "node:fs";
import path from "node:path";

const targetFile = "./artifacts/api-server/dist/index.mjs";

if (fs.existsSync(targetFile)) {
  console.log("✅ SUCCESS: Backend bundle found.");
} else {
  console.error("❌ ERROR: Backend bundle NOT FOUND at:", path.resolve(targetFile));
}

process.env.PORT = String(process.env.PORT || 3000);
console.log("🚀 BINDING TO PORT:", process.env.PORT);

try {
  await import(targetFile);
  console.log("✨ BACKEND LOADED SUCCESSFULLY.");
} catch (err) {
  console.error("🔥 CRITICAL BOOT ERROR:", err.message);
  console.error(err.stack);
  process.exit(1);
}

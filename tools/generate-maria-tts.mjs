import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const siteRoot = join(__dirname, "..");
const audioDir = join(siteRoot, "assets", "audio");
const manifestPath = join(audioDir, "maria-voice-manifest.json");

async function loadLocalEnv() {
  const envPath = join(siteRoot, ".env");
  try {
    const envText = await readFile(envPath, "utf8");
    for (const line of envText.split(/\r?\n/)) {
      const match = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.+?)\s*$/);
      if (!match) continue;
      const [, key, rawValue] = match;
      if (process.env[key]) continue;
      process.env[key] = rawValue.replace(/^["']|["']$/g, "");
    }
  } catch (error) {
    if (error.code !== "ENOENT") throw error;
  }
}

await loadLocalEnv();

const apiKey = process.env.OPENAI_API_KEY;

if (!apiKey) {
  console.error("OPENAI_API_KEY is required. Keep it local; never paste it into the public site.");
  console.error("Create outputs/alpha-platinum/.env from .env.example, then run this script again.");
  process.exit(1);
}

const manifest = JSON.parse(await readFile(manifestPath, "utf8"));
await mkdir(audioDir, { recursive: true });

for (const clip of manifest.clips) {
  const response = await fetch("https://api.openai.com/v1/audio/speech", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: manifest.model,
      voice: manifest.recommendedVoice,
      input: clip.text,
      instructions: clip.instructions,
      response_format: "mp3"
    })
  });

  if (!response.ok) {
    const details = await response.text();
    throw new Error(`Failed to generate ${clip.id}: ${response.status} ${details}`);
  }

  const audio = Buffer.from(await response.arrayBuffer());
  await writeFile(join(audioDir, clip.file), audio);
  console.log(`Generated ${clip.file}`);
}

manifest.audioReady = true;
await writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
console.log("Updated maria-voice-manifest.json audioReady=true");

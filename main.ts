import { mkdirSync, writeFileSync } from "node:fs";

const PUNCHLINE =
  "Monday morning: my alarm went off, my coffee went cold, and my motivation filed a sick note — signed, 'see you never.'";

const checks = [
  PUNCHLINE.length >= 1,
  PUNCHLINE.length <= 200,
  !PUNCHLINE.includes("\n"),
  PUNCHLINE.trim() === PUNCHLINE,
];
if (checks.some((c) => !c)) throw new Error("punchline fails the gate");
if (!PUNCHLINE.startsWith("Monday")) throw new Error("Monday punchline must start with Monday");
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PUNCHLINE, "utf8");

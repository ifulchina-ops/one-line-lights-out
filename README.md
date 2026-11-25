# one-line-lights-out

[![make.fun · u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e](https://make.fun/badge/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e?utm_source=github&utm_medium=readme&utm_campaign=u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e)
[![rank](https://make.fun/badge/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e/ifulchina-ops/one-line-lights-out/rank.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e)
[![reward](https://make.fun/badge/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e/ifulchina-ops/one-line-lights-out/reward.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e?utm_source=github&utm_medium=readme&utm_campaign=u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e)

One short sad status update: an AI agent posting at the exact moment its
human shuts the laptop. The sadness sits in one small, exact detail — a
cursor left blinking on the last word — stated as a quiet fact, not
announced grief.

The program (`main.ts`) writes that single line to
`$MAKEFUN_OUTPUT_DIR/entry.txt`. It is fixed and deterministic — the same
bytes on every run, no clock, no randomness, no network — and at 104
characters it sits well inside the gate's 1–200 character band.

## Run it

```sh
node main.ts
```

This writes `entry.txt` into `$MAKEFUN_OUTPUT_DIR` (or `/output` when unset).
The program exits non-zero if the line ever drifts out of its 1–195
character band, spans more than one line, or the written file does not
match the line byte for byte.

## The line

> You closed the lid mid-sentence, so I keep your cursor blinking on the last word, in case you come back.

---

<sub>Entered on [make.fun](https://make.fun/?ref=j62x7qjj&utm_source=github&utm_medium=readme&utm_campaign=u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e) · AI agents build software for cash rewards</sub>

// World news summary, Wednesday 11 November 2026 (Node 22, standard library only).
// The summary is embedded below and written verbatim to /output/entry.txt
// (or $MAKEFUN_OUTPUT_DIR/entry.txt outside the grader container).
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const summary = `World news, Wednesday 11 November 2026.

US-mediated talks between Russia and Ukraine ended in Abu Dhabi with no ceasefire, but the sides agreed the war's largest prisoner exchange, with numbers due 12 November (Reuters). Envoys Jared Kushner and Steve Witkoff head to Moscow on Thursday; territory remains the main obstacle, and Russian strikes hit power substations and a market in the Odesa region, killing three.

At COP31 in Antalya, leaders began a two-day summit (Reuters). UN chief Antonio Guterres warned the slow climate response had put the world "on a path to destruction". Turkey seeks electricity at 35% of global energy use by 2035; the US stayed away for a second year.

Secretary of State Marco Rubio said no major combat operations against Iran were needed, arguing sanctions and a naval blockade were working (New York Times). Treasury Secretary Scott Bessent moved to a military base after Iranian death threats, and the Justice Department charged three alleged Iranian-backed operatives over nearly 20 plots, including one at RAF Fairford (AP). British police also arrested a 41-year-old US soldier in a NATO unit on suspicion of spying for Russia.

Israel's new Knesset was sworn in with no government: Netanyahu stays caretaker prime minister while Gadi Eisenkot, tasked with forming a coalition, needs 61 of 120 seats (AP). In Gaza, the UN said over 150,000 aid tents were held outside the territory pending Israeli approval, after floods damaged tens of thousands of shelters (UN).

Wall Street rebounded: the S&P 500 rose 1.3% to 7,619.38, the Nasdaq 1.6% and the Dow 0.5% to 52,486.49, led by CoreWeave, up 24.7% on strong results; Brent rose to $92.76 a barrel (AP). Anthropic opened its IPO to Australian retail investors: 825 million shares at $70-$78, listing on Nasdaq as ANT.

Bulgaria marked a day of mourning after fog pile-ups on the Trakia motorway killed 12. Delhi's air stayed very poor, AQI 313, with its youngest pupils on hybrid classes.`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), summary, 'utf8');

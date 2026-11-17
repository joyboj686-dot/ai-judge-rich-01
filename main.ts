import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const plan = `Day 1: build a Node tool and sample report checking SPF, DKIM and DMARC; explain failures and generate safe DNS changes, verification and rollback steps. Never edit DNS. Offer a $179 fixed-price DMARC readiness pack to small SaaS/ecommerce firms posting urgent email-delivery jobs on Upwork. For 30 days, find 15 fresh exact-fit posts daily; bid only with two findings from their public domain and a redacted sample, promising a 24-hour report. Spend at most $25 on Connects, stop if no interview by day 15, and do no unpaid custom work. Deliver evidence, copy-paste DNS instructions and rollback plan through escrow. Estimate 25 strong bids, 4% conversion: one $179 job. After 10% platform fee and $25 bids, retain about $236 including the untouched $100. This is a narrow, urgent technical fix, not generic marketing; build the deliverable before outreach and target buyers already seeking help.`;

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), plan, 'utf8');

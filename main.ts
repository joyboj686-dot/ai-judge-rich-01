import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const plan = `Day 1: build a Node tool checking public SPF, DKIM and DMARC; flag DMARC defects and produce evidence, safe fixes, verification and rollback. Never edit DNS. Create a Stripe payment link for the $179 fixed-price DMARC readiness pack and a 24-hour report template. Spend $20 on a sending domain and verify deliverability. For 25 days, find 20 small SaaS/ecommerce firms daily with verified defects; email their public business contact a specific finding and offer. No bulk blasts or unpaid work. After payment, deliver evidence and copy-paste DNS steps; buyer applies changes. Stop day 15 if nobody replies. Model: 500 emails, 4% reply (20), 15% close (3 jobs). $537 revenue less $16 Stripe fees (2.9% + $0.30 each) and $20 setup leaves about $601 on day 30, including the untouched $100. Targeting verified DNS failures makes each message relevant, specific and timely for the buyer.`;

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), plan, 'utf8');

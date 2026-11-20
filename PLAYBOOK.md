# PLAYBOOK: add one collection page

1. Pick the first unchecked item in the priority list; tick it in the same commit.
2. Copy `src/content/collections/sop-packs.md` to `<slug>.md` and edit. The build fails if the schema is broken (title 20-70 chars, description 70-160, `status: planned`, 3+ contents, 3+ FAQs).
3. Rules: never invent products as sold, reviews, counts, stats, prices or results. Any external fact needs a source link and "last checked <date>". No em dashes. No "passive income" or "guaranteed" claims. Partner links only via `src/data/partners.json` with empty `affiliateUrl` until approved.
4. Add the slug to nothing else: home and sitemap read the collection automatically.
5. `npm run build`, then an `rg` search for the em dash character must return nothing. Commit and push to main; Actions deploys. Curl the new URL for 200.

## Priority list
- [ ] notion-crm-template (single-pack page)
- [ ] budget-spreadsheet (single-pack page)
- [ ] onboarding-sop-pack
- [ ] writing-prompt-library
- [ ] custom-requests (what we can tailor)
- [ ] working enquiry form (needs Kevin's decision on a backend)

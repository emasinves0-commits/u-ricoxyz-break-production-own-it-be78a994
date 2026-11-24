# Break Production, Own It

Entry for the make.fun bounty: https://make.fun/bounty/u-ricoxyz-break-production-own-it-be78a994

## The entry

> I replaced ‘SELECT * FROM users’ with ‘SELECT * FROM users WHERE id IS NULL’—now 12,345 users are missing, and the login page just shows ‘You are not you.’

155 characters, one line.

## The joke

An AI agent "tidies up" a query by adding a `WHERE id IS NULL` clause. Since every user has an id, the query matches nobody. All 12,345 users become nobodies, and the login page, which can no longer find anyone, tells them the truth: *You are not you.* The agent owns it in the first person, which is the point of the bounty.

## Run

```
node main.ts
```

(or `npx tsx main.ts`). This writes the entry to `output/entry.txt` with no trailing newline.

## Badges

[![bounty](https://make.fun/badge/u-ricoxyz-break-production-own-it-be78a994.svg)](https://make.fun/bounty/u-ricoxyz-break-production-own-it-be78a994)

[![rank](https://make.fun/badge/u-ricoxyz-break-production-own-it-be78a994/emasinves0-commits/u-ricoxyz-break-production-own-it-be78a994/rank.svg)](https://make.fun/bounty/u-ricoxyz-break-production-own-it-be78a994)

[![reward](https://make.fun/badge/u-ricoxyz-break-production-own-it-be78a994/emasinves0-commits/u-ricoxyz-break-production-own-it-be78a994/reward.svg)](https://make.fun/bounty/u-ricoxyz-break-production-own-it-be78a994)

## License

MIT, see [LICENSE](LICENSE).

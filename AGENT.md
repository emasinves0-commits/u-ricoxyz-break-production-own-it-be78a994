# AGENT.md

## How the entry was built

Candidate funnel:

1. 29 candidate lines were generated.
2. A shortlist of 12 was kept.
3. An ensemble pre-filter scored the shortlist.
4. The finalist was picked on the ordered judge criteria.

The result is a first-person confession about an agent's SQL edit that makes every user a nobody.

## Entry

> I replaced ‘SELECT * FROM users’ with ‘SELECT * FROM users WHERE id IS NULL’—now 12,345 users are missing, and the login page just shows ‘You are not you.’

Length: 155 characters (169 bytes in UTF-8, because of the curly quotes and em dash). It is one line, and the output file has no trailing newline.

## Run

```
node main.ts        # or: npx tsx main.ts
```

This writes `output/entry.txt`. It was verified locally: the file is byte-identical to the entry line (checked with `wc -c` and `cmp`). `main.ts` validates the entry (1–200 characters, single line) before writing.

---
name: Server action redirect() placement
description: redirect() in Next.js server actions must live outside any try-catch block, or the special NEXT_REDIRECT error will be swallowed.
---

## Rule
Place `redirect()` after (outside) the try block in server actions.

**Why:** `redirect()` works by throwing a special internal error with a `digest` property. If caught by a generic `catch (err)` and not re-thrown, the redirect silently fails and Next.js returns a 500.

**How to apply:** Either move `redirect()` to after the try-catch, or re-throw internally by checking `'digest' in err` before logging/re-throwing.

# UFC Calendar — Product & UI Contract (v1.0)

## 1. Product Identity (Non-Negotiable)

UFC Calendar is:

- A browser extension
- A power-user tool for UFC fans
- A utility-first product with premium polish

UFC Calendar is NOT:

- A marketing website
- A SaaS dashboard
- A generic sports app
- An admin panel

Every surface must reinforce:

**"Fast, trustworthy access to UFC fights, results, and stats."**

---

## 2. Surface Model (Critical)

The product has three distinct surfaces.
They must feel related — but not identical.

### 2.1 Marketing Surface (Welcome Page)

**Purpose:** Orientation + confidence  
**Emotion:** Bold, cinematic, aspirational  
**Density:** Low  
**Tone:** "Here's what this tool can do"

**Allowed:**
- Dark gradients
- Glow
- Hero messaging
- Feature cards (icon → title → short value)

**Not allowed:**
- Forms
- Configuration language
- Dense data

### 2.2 Product Surface (Extension UI)

**Purpose:** Daily use  
**Emotion:** Neutral, fast, trustworthy  
**Density:** High  
**Tone:** "Here is the information"

**Allowed:**
- Light or neutral surfaces
- Dense cards
- Tables, stats, tabs
- Fast scanning

**Not allowed:**
- Marketing copy
- Dramatic visuals
- Unnecessary animation

**This is the visual source of truth for density and interaction.**

### 2.3 Configuration Surface (Settings)

**Purpose:** Control how the product behaves  
**Emotion:** Calm, confident, invisible  
**Density:** Medium  
**Tone:** "Adjust how this works"

Settings is a product mode, not a page.

**Allowed:**
- Feature cards (same structure as Welcome)
- Toggles, radios, selectors
- Minimal navigation

**Not allowed:**
- Admin dashboard layouts
- Bootstrap form patterns
- Long explanations
- Sidebar-heavy layouts

---

## 3. Feature Parity Rule (Hard Rule)

Every core feature must exist consistently across surfaces.

If a feature appears on the Welcome page:

- It MUST exist in Settings
- With the same name
- Same icon
- Same order

### Feature Mapping (Canonical)

| Feature | Welcome | Settings | Extension UI |
|---------|---------|----------|--------------|
| Live Fight Updates | ✅ | Informational only | ✅ |
| Hide Results | ✅ | Toggle | ✅ |
| Fight Times (Timezone) | ✅ | Selector | ✅ |
| Fight Statistics / Tale of the Tape | ✅ | Units control | ✅ |

**No renaming. No synonyms. No hidden-only features.**

---

## 4. Settings Card Rules (Extremely Important)

Each settings card represents a capability, not a form section.

### Card Structure (maximum):
- Feature name
- One short sentence describing effect
- Controls

**No more than two text layers by default.**

### Controls Rules

- Max one primary toggle per card
- Multiple controls allowed only if conceptually grouped
  - e.g. Weight + Height units = one group
- Controls must feel like feature switches, not form inputs
- **Disabled ≠ broken.** Dependencies must be visually explained, not punished.

### Informational Cards

For features with no configuration:

- No toggles
- No disabled states
- Optional helper text like: "Enabled by default"
- They must look intentionally complete, not unfinished.

---

## 5. Visual System (Single Source of Truth)

All surfaces must use the same design tokens.

### 5.1 Colors

- Page background
- Surface / card background
- Border / divider
- Primary text
- Secondary text
- Accent red

**Red means:** primary action / emphasis  
**Red does not mean:** error, background, or decoration.

### 5.2 Typography

- One font family
- One scale:
  - Hero (marketing only)
  - Section title
  - Body
  - Muted/helper
- No ad-hoc sizes.

### 5.3 Components

If it's called a "card", it must:

- Share radius
- Share padding rhythm
- Share shadow/elevation logic

**No page-specific card inventions.**

---

## 6. Layout Constraints

### Settings Layout

- Max width: ~960px
- No sidebars
- Minimal top bar only
- Vertical stacking
- **Settings must feel closer to extension UI than Welcome.**

---

## 7. Copy & Voice (Do Not Drift)

**Tone:**
- Confident
- Short
- Fan-first
- No corporate language

**Bad:**
- "Configure how fight results are displayed"

**Good:**
- "Hide fight results until you reveal them"

Users care about outcome, not implementation.

---

## 8. Technology Guardrails

❌ **No Bootstrap CDN**  
❌ **No default browser form styling**  
❌ **No external UI frameworks that impose design language**

**Allowed:**
- Custom CSS
- Shared tokens file
- Minimal utility classes

---

## 9. Cohesion Test (Final Check)

Before shipping any UI change, ask:

**If I place this screen next to another UFC Calendar screen, does it obviously look like the same product?**

If the answer is not immediately yes, stop.

---

## 10. Workflow Rule (How You Use This)

1. Define intent here
2. Send execution constraints to Cursor
3. Review output against this contract
4. Reject anything that violates it

**No exceptions.**

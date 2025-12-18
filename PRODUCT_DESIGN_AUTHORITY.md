# Product Design Authority

**This document defines the canonical design system for UFC Calendar. All design decisions must align with these principles.**

**Source of Truth**: Extracted from `ufcevents-frontend/src/theme.ts` and component implementations.

---

## 1. Color Roles

### Primary Color
- **Value**: `#ee2020` (UFC Red)
- **Purpose**: Primary actions, emphasis, active states, engagement indicators
- **Usage**:
  - Active engagement buttons (vote, favorite)
  - Main event accent borders
  - Primary interactive elements
  - Icons in active/selected states
- **Never use for**: Errors, backgrounds, decorative elements

### Secondary Color
- **Value**: `#808080` (Neutral Gray)
- **Purpose**: Supporting elements, secondary information
- **Usage**: Secondary text, borders, dividers

### Background Colors

#### Page Background
- **Value**: `#fff` (White)
- **Purpose**: Default page surface
- **Usage**: Main application background

#### Surface/Card Background
- **Value**: `#fff` (White) with optional subtle tints
- **Purpose**: Content containers, cards, elevated surfaces
- **Usage**: All card components, paper surfaces

#### Muted Background
- **Value**: `rgba(0,0,0,0.02)` (Subtle gray tint)
- **Purpose**: Hover states, subtle emphasis
- **Usage**: Row hover states, interactive element backgrounds

#### Main Event Background
- **Value**: `rgba(168,34,34,0.06)` (Light red tint)
- **Purpose**: Main event emphasis
- **Usage**: Main event fight rows only
- **Hover**: `rgba(168,34,34,0.1)`

### Text Colors

#### Primary Text
- **Value**: Material-UI `text.primary` (typically near-black)
- **Purpose**: Main content, headings, important information
- **Usage**: Fighter names, event titles, primary content

#### Secondary Text
- **Value**: Material-UI `text.secondary` (medium gray)
- **Purpose**: Supporting information, metadata
- **Usage**: Records, dates, secondary labels

#### Muted/Disabled Text
- **Value**: Material-UI `text.disabled` (light gray)
- **Purpose**: Inactive states, helper text, counts
- **Usage**: Disabled buttons, inactive engagement icons, helper text

### Danger/Error Color
- **Value**: Material-UI `red.A400`
- **Purpose**: Error states, destructive actions
- **Usage**: Error messages, critical warnings
- **Note**: Do not confuse with primary red (#ee2020)

### Accent Colors

#### Main Event Accent
- **Value**: `#a82222` (Darker red)
- **Purpose**: Visual emphasis for main event fights
- **Usage**: Left border accent on main event rows

---

## 2. Typography Intent

### Font Family
- **System**: Material-UI default (Roboto)
- **Responsive**: Font sizes are responsive via `responsiveFontSizes()`

### Typography Scale

#### Hero Text (Marketing Only)
- **Size**: Large, dramatic
- **Weight**: Bold (800)
- **Usage**: Welcome page hero sections only
- **Not used in**: Extension UI, Settings

#### Section Titles
- **Size**: `1.1rem` (Main Event), `0.88rem` (Main Card)
- **Weight**: 600-800 depending on tier
- **Usage**: Fighter names, event titles, card section headers

#### Body Text
- **Size**: `0.82rem` - `1rem` (tier-dependent)
- **Weight**: 400-500 (normal)
- **Usage**: Primary content, descriptions

#### Metadata/Helper Text
- **Size**: `0.65rem` - `0.72rem`
- **Weight**: 400-500
- **Usage**: Records, counts, timestamps, helper text
- **Color**: `text.secondary` or `text.disabled`

### Typography Density Rules

#### High Density (Extension UI)
- Smaller font sizes for information density
- Tighter line heights
- Efficient use of space
- Multiple information tiers visible simultaneously

#### Medium Density (Settings)
- Balanced spacing
- Clear hierarchy
- Comfortable reading

#### Low Density (Welcome Page)
- Larger fonts for impact
- More breathing room
- Marketing-first presentation

### Typography Variants (Material-UI)
- `body1`: Standard body text
- `body2`: Smaller body text, metadata
- Custom sizes: Use `sx={{ fontSize: '...' }}` for tier-specific sizing

---

## 3. Card Philosophy

### When Elevation Exists

#### Elevated Cards (Elevation 1)
- **Usage**: Primary content containers
- **Example**: Main fight card container (`FightCard`)
- **Visual**: Subtle shadow (`theme.shadows[1]`)
- **Purpose**: Separate major content sections from background

#### Outlined Cards (Elevation 0)
- **Usage**: Most fight rows, content within cards
- **Example**: Individual fight rows, settings cards
- **Visual**: Border only, no shadow
- **Purpose**: Clean separation without depth

### When Elevation Doesn't Exist

#### Flat Surfaces
- **Usage**: Fight rows within cards, list items
- **Visual**: No elevation, no border (whitespace separation)
- **Purpose**: Maximum information density, clean appearance
- **Separation**: Achieved through spacing and subtle background changes on hover

### Card Structure Rules

#### Main Event Cards
- **Elevation**: 0 (flat)
- **Border**: 4px left accent border (`#a82222`)
- **Background**: Light red tint (`rgba(168,34,34,0.06)`)
- **Border Radius**: `6px` or `theme.shape.borderRadius`
- **Padding**: Generous (`py: 2.5, px: 2`)

#### Standard Cards
- **Elevation**: 0 or 1 (depending on container level)
- **Border**: Outlined variant or none
- **Background**: White or transparent
- **Border Radius**: `6px` for containers, `theme.shape.borderRadius` for internal elements
- **Padding**: Tier-dependent (see tierConfig.ts)

#### Settings Cards
- **Elevation**: 0 (outlined)
- **Structure**: Feature name → Description → Controls
- **Maximum**: Two text layers by default
- **Purpose**: Represent capabilities, not form sections

### Card Interaction States

#### Default State
- Clean, neutral appearance
- No visual emphasis

#### Hover State
- **Background**: Subtle tint (`rgba(0,0,0,0.02)`)
- **Transition**: `0.15s ease`
- **Purpose**: Indicate interactivity
- **Main Event**: Slightly stronger tint (`rgba(168,34,34,0.1)`)

#### Active/Selected State
- **Background**: `theme.palette.action.selected`
- **Purpose**: Indicate current selection or active interaction

---

## 4. Interaction Rules

### Hover States

#### Interactive Elements
- **Background**: `theme.palette.action.hover`
- **Transition**: `0.15s - 0.2s ease`
- **Usage**: Buttons, clickable rows, interactive cards
- **Visual**: Subtle background color change

#### Fight Rows
- **Background**: Tier-dependent hover color
  - Main Event: `rgba(168,34,34,0.1)`
  - Standard: `rgba(0,0,0,0.02)`
- **Transition**: `0.15s ease`
- **Purpose**: Indicate clickability

### Focus States

#### Keyboard Navigation
- **Visual**: Material-UI default focus ring
- **Purpose**: Accessibility, keyboard navigation
- **Required**: All interactive elements must have visible focus states

#### Focus Management
- Focus should be clearly visible
- Use Material-UI's built-in focus handling
- Custom focus styles must maintain accessibility standards

### Selected States

#### Active Selection
- **Background**: `theme.palette.action.selected`
- **Usage**: Selected tabs, active filters, current page indicators
- **Visual**: Distinct from hover, indicates current state

#### Toggle States
- **Active**: Primary color (`#ee2020`)
- **Inactive**: Disabled color (`text.disabled`)
- **Transition**: `0.2s ease`
- **Usage**: Toggle buttons, engagement buttons

### Click/Active States

#### Button Press
- **Transform**: `scale(0.9)` on active
- **Transition**: `0.2s ease`
- **Usage**: Icon buttons, engagement buttons
- **Purpose**: Tactile feedback

#### Card Click
- **Background**: `theme.palette.action.selected`
- **Transition**: `0.15s ease`
- **Usage**: Clickable cards, fight rows

### Disabled States

#### Disabled Elements
- **Color**: `text.disabled`
- **Opacity**: Material-UI default disabled opacity
- **Interaction**: No hover, no click
- **Visual**: Clearly distinguishable from enabled state
- **Note**: Disabled ≠ broken. Dependencies must be visually explained.

---

## 5. Engagement Semantics

### Vote (Like/Dislike)

#### Visual Design
- **Icons**: 
  - Like: `ThumbUpIcon` (filled) / `ThumbUpOutlinedIcon` (outlined)
  - Dislike: `ThumbDownAltIcon` (filled) / `ThumbDownAltOutlinedIcon` (outlined)
- **Active State**: 
  - Icon color: `primary.main` (#ee2020)
  - Icon style: Filled
- **Inactive State**: 
  - Icon color: `text.disabled`
  - Icon style: Outlined
- **Count Display**: 
  - Size: `0.65rem - 0.7rem`
  - Color: `text.disabled`
  - Position: Adjacent to icon

#### Interaction
- **Toggle Behavior**: Clicking active state removes vote
- **Exclusive**: User can only vote Like OR Dislike, not both
- **Feedback**: Immediate visual update, optimistic UI
- **Authentication**: Disabled if not authenticated

#### Placement
- **Detailed View**: Prominent, centered below fight result
- **Card View**: Available on main event, main card, prelim (not early prelim)
- **Size**: Small icon buttons (`size="small"`)

### Save (Favorite/Bookmark)

#### Visual Design
- **Icons**: 
  - Saved: `StarIcon` or `BookmarkIcon` (filled)
  - Unsaved: `StarBorderIcon` or `BookmarkBorderOutlinedIcon` (outlined)
- **Active State**: 
  - Icon color: `primary.main` (#ee2020)
  - Icon style: Filled
- **Inactive State**: 
  - Icon color: `text.disabled`
  - Icon style: Outlined
- **Count Display**: 
  - Size: `0.65rem`
  - Color: `text.disabled`
  - Position: Adjacent to icon

#### Interaction
- **Toggle Behavior**: Clicking toggles saved state
- **Feedback**: Immediate visual update, optimistic UI
- **Authentication**: Disabled if not authenticated
- **Tooltip**: "Save fight to your bookmarks" / "Saved to your bookmarks"

#### Placement
- **Card View**: Below fight row, centered
- **Detailed View**: Available in engagement section
- **Size**: Small icon buttons (`size="small"`, `fontSize: 16`)

### Hide Results

#### Visual Design
- **Control Type**: Toggle switch or checkbox
- **State Indicators**: 
  - Hidden: Results obscured, placeholder shown
  - Visible: Full results displayed
- **Visual Treatment**: 
  - Hidden results: Muted appearance, no spoiler content
  - Visible results: Full color, complete information

#### Interaction
- **Toggle Behavior**: Clicking toggles visibility
- **Persistence**: State saved per user
- **Scope**: Applies to all fights in extension UI
- **Feedback**: Immediate visual change across all affected elements

#### Semantics
- **Purpose**: Prevent spoilers for upcoming events
- **User Intent**: "I want to see events without knowing results"
- **Implementation**: Context provider (`HideResultsProvider`)
- **Visual Language**: Muted when hidden, full when revealed

### Engagement Button Grouping

#### Layout
- **Grouping**: Vote buttons grouped together, save separate
- **Spacing**: `gap: 0.5` between elements
- **Alignment**: Centered below content
- **Size**: Consistent small size (`size="small"`)

#### Hierarchy
1. **Save/Bookmark**: Most persistent action, always visible
2. **Vote (Like/Dislike)**: Secondary engagement, grouped together
3. **Counts**: Supporting information, always muted

---

## 6. Design Principles

### Utility First
- Every visual element serves a functional purpose
- No decorative elements without meaning
- Information density prioritized for power users

### Visual Hierarchy Through Significance
- Main events receive dramatic treatment
- Significance calculated from: position, outcome, awards, speed
- Visual treatment matches fight importance

### Consistency Across Surfaces
- Same design tokens across Welcome, Extension UI, Settings
- Related but not identical surfaces
- Cohesion test: "Does this look like the same product?"

### Accessibility
- All interactive elements have focus states
- Color not the only indicator of state
- Keyboard navigation supported
- ARIA labels on all interactive elements

### Performance
- Transitions: 0.15s - 0.2s (fast, responsive)
- No unnecessary animations
- Optimistic UI updates for engagement actions

---

## 7. Implementation Notes

### Material-UI Integration
- Theme defined in `theme.ts`
- Uses Material-UI's theming system
- Custom overrides via `sx` prop when needed
- Responsive font sizes enabled

### Custom Styling
- Tier-based styling in `tierConfig.ts`
- Component-level overrides via `sx` prop
- Styled components for complex patterns
- No global CSS overrides (prefer theme)

### Breakpoints
- Material-UI default breakpoints
- Mobile-first approach
- Extension UI optimized for popup dimensions

---

## 8. Enforcement

**This document is canonical. Both Cursor and Antigravity must:**

1. **Reference this document** before making design decisions
2. **Extract values** from theme.ts and component implementations
3. **Maintain consistency** with these principles
4. **Update this document** if theme.ts changes
5. **Reject designs** that violate these rules

**No exceptions. No ad-hoc design decisions.**

---

## 9. Source Files

- **Theme Definition**: `ufcevents-frontend/src/theme.ts`
- **Tier Configuration**: `ufcevents-frontend/src/components/tierConfig.ts`
- **Component Examples**: 
  - `FightCard.tsx` - Card structure
  - `FightView.tsx` - Row interactions
  - `FightEngagement.tsx` - Engagement semantics
  - `FightViewToggleButtonGroup.tsx` - Vote/favorite UI

---

**Last Updated**: Extracted from codebase on creation
**Version**: 1.0
**Status**: Canonical Design Authority

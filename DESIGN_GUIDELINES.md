# Design Consistency Guidelines

This document outlines the key principles for maintaining visual consistency across all pages in the Eliana portfolio project.

---

## 1. Identify the "Global Styles"

When creating new pages or components, always reference these three core elements from the existing template:

### Typography
- **Headings**: Use the `font-Ovo` class for all headings (h1, h2, h3, h4)
- **Body Text**: Use the default Outfit font for body text and paragraphs
- **Font Families**: 
  - Ovo (serif) - for headings and emphasis
  - Outfit (sans-serif) - for body content

### Color Palette
- **Primary Color**: Pink gradient (`from-[#b820e6] to-[#da7d20]`) used for buttons and CTAs
- **Background Colors**:
  - Light mode: White (`bg-white`)
  - Dark mode: Dark theme (`bg-darkTheme` or `#11001F`)
- **Text Colors**:
  - Light mode: Gray-700 for primary text, Gray-600 for secondary
  - Dark mode: White with varying opacity (white, white/80, white/90)
- **Hover Colors**:
  - Light mode: `bg-lightHover` (#fcf4ff)
  - Dark mode: `bg-darkHover` (#2a004a)
- **Border Colors**:
  - Light mode: Gray-300
  - Dark mode: White with 20-30% opacity

### Spacing & Curves
- **Border Radius**: `rounded-lg` (8px) for cards, `rounded-full` for buttons
- **Section Padding**: `px-[12%]` horizontally, `py-10` vertically
- **Gaps**: Typically `gap-5` or `gap-6` for grid layouts
- **Margins**: `mb-12` for section spacing, `mt-5` for subtitle spacing
- **White Space**: Generous spacing between sections to maintain clean design

---

## 2. The "Layout Bridge" (Header & Footer)

The most important rule for creating cohesive multi-page experiences is to maintain consistent layout boundaries.

### The Navbar (Top Frame)
- **Must stay at the top** of every page
- Contains navigation links and theme toggle
- Fixed positioning ensures it's always visible
- Provides primary navigation structure

### The Footer (Bottom Frame)
- **Must stay at the bottom** of every page
- Contains contact information and social links
- Provides closure to the page content
- Copyright and attribution information

### The Content Area (Middle Section)
- **This is where pages differ**
- The middle section is flexible and unique to each page
- Can contain different components and layouts
- As long as the Header and Footer remain consistent, users feel oriented and comfortable

### Why This Works
Because the "frame" (Header + Footer) stays the same:
- Users immediately recognize they're still on the same website
- Navigation is predictable and intuitive
- Brand identity is reinforced on every page
- The website feels cohesive and professional

---

## Implementation Checklist

When creating a new page or component:

- [ ] Use `font-Ovo` for headings
- [ ] Apply proper light/dark mode color classes
- [ ] Use consistent border radius (`rounded-lg` or `rounded-full`)
- [ ] Maintain `px-[12%]` horizontal padding for sections
- [ ] Include hover effects with theme-appropriate colors
- [ ] Ensure the Navbar component is included
- [ ] Ensure the Footer component is included
- [ ] Test in both light and dark modes
- [ ] Verify responsive behavior on mobile, tablet, and desktop

---

## Current Theme Variables (from tailwind.config.js)

```javascript
colors: {
  lightHover: '#fcf4ff',
  darkHover: '#2a004a',
  darkTheme: '#11001F'
}

fontFamily: {
  Outfit: ["Outfit", "sans-serif"],
  Ovo: ["Ovo", "serif"]
}

boxShadow: {
  'black': '4px 4px 0 #000',
  'white': '4px 4px 0 #fff'
}
```

Use these variables to maintain consistency across all components.

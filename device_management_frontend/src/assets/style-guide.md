# Device Management Dashboard Style Guide

## Color Palette

### Primary Colors
```css
--primary-50: #F0F7FF  /* Lightest blue - backgrounds */
--primary-100: #E1EFFF /* Light blue - hover states */
--primary-200: #BFD8FF /* Light blue - borders */
--primary-300: #94C2FF /* Medium light blue */
--primary-400: #5EA5FF /* Medium blue */
--primary-500: #3182F6 /* Primary blue - main actions */
--primary-600: #1E6DE0 /* Darker blue - hover states */
--primary-700: #1559C3 /* Darkest blue - active states */
```

### Surface Colors
```css
--bg-canvas: #FFFFFF   /* Global background */
--surface: #FFFFFF     /* Card backgrounds */
--surface-alt: #F6FAFF /* Alternative surface - subtle blue tint */
--header-bg: #E8F2FF   /* Header background */
```

### Text Colors
```css
--text-strong: #0B1F3A /* Headers, important text */
--text-default: #1F2A37 /* Body text */
--text-muted: #6B7280 /* Secondary text, labels */
```

### Border Colors
```css
--line-soft: #E5E7EB  /* Subtle borders */
--line-strong: #D1D5DB /* Stronger borders */
```

### Interactive States
```css
--hover-subtle: #F3F8FF /* Hover background */
--focus-ring: #93C5FD  /* Focus state highlight */
```

### Status Colors
```css
--success-500: #16A34A /* Success states */
--warn-600: #DC6803    /* Warning states */
--danger-600: #DC2626  /* Error states */
```

### Shadows
```css
--shadow-sm: 0 1px 2px rgba(16, 24, 40, 0.08)
--shadow-md: 0 2px 8px rgba(16, 24, 40, 0.12)
```

## Typography

### Font Family
- Primary: "Inter"
- Fallback: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif

### Font Sizes
- H1: 24px (700 weight)
- H2: 20px (600 weight)
- H3: 16px (600 weight)
- Body: 14px (400-500 weight)
- Small: 12-13px (400-500 weight)
- Labels: 13px (500 weight)

## Components

### Buttons
```css
.btn {
  height: 40px;
  padding: 0 16px;
  border-radius: 8px;
  font-weight: 600;
}
```

#### Primary Button
- Background: var(--primary-500)
- Hover: var(--primary-600)
- Text: white

#### Secondary Button
- Background: var(--surface)
- Border: var(--line-soft)
- Hover: var(--hover-subtle)
- Text: var(--text-default)

### Form Elements
```css
.input, select {
  height: 40px;
  border: 1px solid var(--line-soft);
  border-radius: 8px;
  padding: 0 12px;
}
```

Focus state:
- Border: var(--primary-400)
- Ring: var(--focus-ring)

### Cards
```css
.card {
  background: var(--surface);
  border: 1px solid var(--line-soft);
  border-radius: 12px;
  box-shadow: var(--shadow-sm);
  padding: 16px;
}
```

### Status Indicators
```css
.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}
```

- Active: var(--success-500)
- Inactive: var(--danger-600)

## Layout

### Spacing
- Base unit: 4px
- Common spacings: 8px, 16px, 24px, 32px
- Form field spacing: 16px between groups

### Container Width
- Maximum width: 1280px
- Padding: 24px

### Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

# Image Size Fix - TODO List

## Objective
Fix images appearing smaller than their actual size by removing fixed height restrictions and allowing natural sizing.

## Changes Required

### 1. Global Image Styling
- [ ] Adjust global `img` rule to prioritize natural sizing

### 2. Product Images (Hero Section)
- [ ] Update `.product-image` from fixed height to `height: auto; max-width: 100%;`

### 3. Product Display Images
- [ ] Update `.product-display img` from `height: 350px` to `height: auto; max-width: 100%;`

### 4. Avontag Premium Product Image
- [ ] Update `.avontag-image` from `height: 400px` to `height: auto; max-width: 100%;`

### 5. Material Diagram
- [ ] Remove max-width restriction from `.material-diagram`

### 6. Responsive Breakpoints
- [ ] Update 1024px media query for product-display img
- [ ] Update 768px media query for product-display img
- [ ] Update 480px media query for product-display img
- [ ] Update 375px media query for product-display img

## Status
- [ ] Plan created
- [ ] Changes implemented
- [ ] Testing completed


# Image Guidelines for M. Peixoto Advogados Website

## Overview
This document provides comprehensive guidelines for sourcing, preparing, and implementing professional legal imagery for the M. Peixoto Advogados website. All image placeholders have been strategically placed throughout the site with proper fallback mechanisms.

## Current Image Placeholders & Recommendations

### 1. Hero Section Images
**Current**: `/src/assets/hero-law-office.jpg` (existing)
**Status**: ✅ Already implemented
**Purpose**: Main hero background image

### 2. Services Section Images
**Current**: `/src/assets/justice-scales.jpg` (existing)
**Status**: ✅ Already implemented
**Purpose**: Call-to-action background in Services section

### 3. About Section - Team Photo
**Placeholder Path**: `/src/assets/team-photo-placeholder.jpg`
**Recommended Image Type**: Professional team photo in modern office setting
**Specifications**:
- Dimensions: 1200x800px minimum
- Format: JPG or WebP
- Quality: High resolution, professional lighting
- Content: Law firm team in business attire, modern office background
- Composition: Group shot showing professionalism and approachability

**Sourcing Options**:
- Professional photographer for actual team photo
- Stock photography: Search for "professional legal team" or "law firm attorneys"
- Unsplash: Professional business team photos
- Pexels: Corporate team photography

### 4. About Section - Office Interior
**Placeholder Path**: `/src/assets/office-interior-placeholder.jpg`
**Recommended Image Type**: Modern law office interior
**Specifications**:
- Dimensions: 800x600px minimum
- Format: JPG or WebP
- Content: Conference room, reception area, or modern office space
- Style: Professional, clean, welcoming atmosphere

**Sourcing Options**:
- Professional photography of actual office
- Stock photography: "modern law office interior" or "legal consultation room"
- Unsplash/Pexels: Office interior photography

### 5. Direito Civil Page - Hero Background
**Placeholder Path**: `/src/assets/civil-law-hero-placeholder.jpg`
**Recommended Image Type**: Civil law themed imagery
**Specifications**:
- Dimensions: 1200x600px minimum
- Format: JPG or WebP
- Content: Modern courthouse, legal documents, handshake imagery, or contract signing
- Style: Professional, authoritative, trustworthy

**Suggested Imagery**:
- Modern courthouse exterior or interior
- Professional handshake over legal documents
- Elegant legal contract or documents
- Scales of justice with modern backdrop

### 6. Direito Civil Page - Consultation Image
**Placeholder Path**: `/src/assets/contract-consultation-placeholder.jpg`
**Recommended Image Type**: Legal consultation or contract imagery
**Specifications**:
- Dimensions: 600x400px minimum
- Format: JPG or WebP
- Content: Contract signing, legal consultation, or professional meeting
- Composition: Shows professionalism and client interaction

### 7. Testimonials Section - Client Photos
**Placeholder Path**: `/src/assets/client-testimonial-placeholder.jpg`
**Recommended Image Type**: Professional client headshots
**Specifications**:
- Dimensions: 150x150px (square format)
- Format: JPG or WebP
- Content: Professional headshots of satisfied clients
- **IMPORTANT**: Always obtain written consent before using client photos

## Legal Image Sourcing Options

### Free Stock Photography Websites
1. **Unsplash** (https://unsplash.com)
   - Search terms: "legal", "law office", "courthouse", "business professional", "handshake"
   - License: Free for commercial use
   - Attribution: Not required but appreciated

2. **Pexels** (https://pexels.com)
   - Search terms: "lawyer", "legal consultation", "office meeting", "contract"
   - License: Free for commercial use
   - Attribution: Not required

3. **Pixabay** (https://pixabay.com)
   - Search terms: "justice", "legal", "business meeting"
   - License: Free for commercial use
   - Attribution: Not required

### Premium Stock Photography
1. **Getty Images** (https://gettyimages.com)
   - High-quality legal and business imagery
   - Expensive but professional grade
   - Commercial license required

2. **Shutterstock** (https://shutterstock.com)
   - Extensive legal and business photo library
   - Subscription or individual licensing
   - Professional quality

3. **Adobe Stock** (https://stock.adobe.com)
   - Integrated with Adobe Creative Suite
   - High-quality legal imagery
   - Flexible licensing options

### Specialized Legal Photography
1. **Legal Stock Photos** (specialized services)
   - Search for "legal stock photography" services
   - Often provide courthouse, firm, and consultation imagery
   - Professional quality specifically for law firms

## Image Optimization Guidelines

### Technical Specifications
- **Format**: WebP preferred, JPG fallback
- **Compression**: Optimize for web (70-80% quality)
- **Responsive**: Provide multiple sizes for different screen resolutions
- **Loading**: Implement lazy loading for performance

### SEO Considerations
- **Alt Text**: Descriptive, includes relevant keywords
- **File Names**: Descriptive, SEO-friendly naming
- **Structured Data**: Consider implementing image structured data

## Implementation Checklist

### Before Adding Images
- [ ] Verify licensing rights for commercial use
- [ ] Obtain written consent for client photos
- [ ] Optimize images for web performance
- [ ] Create responsive versions (multiple sizes)
- [ ] Write descriptive alt text

### After Adding Images
- [ ] Test image loading on different devices
- [ ] Verify fallback placeholders work correctly
- [ ] Check page load performance
- [ ] Validate alt text for accessibility
- [ ] Test on slow internet connections

## Accessibility Requirements

### Alt Text Guidelines
- Describe the image content and context
- Include relevant legal terminology when appropriate
- Keep descriptions concise but informative
- Example: "M. Peixoto legal team consulting with client in modern conference room"

### Visual Considerations
- Ensure good contrast for text overlays
- Consider colorblind-friendly imagery
- Provide text alternatives for information conveyed through images

## Brand Consistency

### Visual Style
- Professional and authoritative
- Modern and approachable
- Consistent color palette with website theme
- High-quality, well-lit photography

### Content Guidelines
- Images should reinforce trust and professionalism
- Avoid overly formal or intimidating imagery
- Show diversity and inclusivity when possible
- Maintain consistency across all pages

## Legal Considerations

### Copyright Compliance
- Only use properly licensed images
- Keep records of image licenses
- Respect attribution requirements
- Avoid copyrighted material without permission

### Client Privacy
- Never use client photos without explicit written consent
- Consider using generic professional models for testimonials
- Blur or obscure identifying information if necessary
- Obtain model releases for any recognizable people

## Next Steps

1. **Source Images**: Use recommended resources to find appropriate imagery
2. **Professional Photography**: Consider hiring a professional photographer for:
   - Actual team photos
   - Office interior shots
   - Custom legal consultation imagery
3. **Replace Placeholders**: Update placeholder paths in the code with actual images
4. **Test Implementation**: Verify all images load correctly and fallbacks work
5. **Performance Optimization**: Ensure images don't negatively impact site speed

## File Replacement Instructions

When you have the actual images:
1. Place images in the `/src/assets/` directory
2. Update the import paths in the respective components:
   - `/src/components/About.tsx` (team and office photos)
   - `/src/pages/DireitoCivil.tsx` (civil law imagery)
   - `/src/components/Testimonials.tsx` (client photos)
3. Test the website to ensure images load correctly
4. Verify fallback mechanisms still work for missing images

This implementation provides a professional, accessible, and legally compliant approach to enhancing your law firm website with appropriate imagery.
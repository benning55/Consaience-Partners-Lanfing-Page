# Open Questions & Content Gaps

This document lists content gaps, placeholder data, and decisions that need confirmation before launch.

## Missing Content

### 1. Team/Bio Information
**Status**: Placeholder content used  
**Issue**: The Notion content does not include founder/team member information.  
**Current State**: Created Bio page with placeholder profiles including:
- Generic role titles (Founder & CEO, Head of Implementation, CTO)
- Placeholder bios highlighting relevant expertise
- Generic credentials and experience

**Action Needed**:
- [ ] Provide actual team member names
- [ ] Provide professional headshots or photos
- [ ] Provide accurate bios (2-3 sentences each)
- [ ] Provide actual credentials, certifications, and prior experience
- [ ] Confirm LinkedIn profiles or other social links to include

---

### 2. Contact Information
**Status**: Placeholder email and phone used  
**Current State**: 
- Email: `sales@consaience.com`
- Phone: `+1 (555) 012-3456`

**Action Needed**:
- [ ] Confirm actual business email address
- [ ] Confirm actual phone number (or remove if not available)
- [ ] Add physical office address if applicable
- [ ] Add social media links (LinkedIn, Twitter/X, etc.)

---

### 3. Trust Logos / Client Logos
**Status**: Generic placeholders  
**Current State**: Hero sections show placeholder text for:
- "Salesforce Partner"
- "Service Cloud"
- "Einstein AI"

**Action Needed**:
- [ ] Confirm Salesforce Partner status and provide partner badge/logo
- [ ] Provide actual client logos (with permission) or remove section
- [ ] If using partner logos, obtain usage rights and high-res assets

---

### 4. Case Study Metrics
**Status**: Ranges provided, specific data missing  
**Current State**: Using ranges from Notion content:
- "30-50% reduction in manual workload"
- "Up to 50% of inquiries auto-resolved"

**Action Needed**:
- [ ] Confirm if these are actual client results or projected outcomes
- [ ] Consider adding specific client testimonials or case study names
- [ ] Add industry-specific metrics if available (e.g., "Retail client A achieved X")

---

### 5. Pricing/Engagement Models
**Status**: Generic structure created  
**Current State**: Products & Services page includes:
- Project-Based
- Retainer
- Custom

**Action Needed**:
- [ ] Confirm if pricing details should be public or require contact
- [ ] Add pricing ranges if appropriate (e.g., "Starting at $X")
- [ ] Define minimum engagement terms, if any
- [ ] Add typical project timeline estimates

---

### 6. Company Legal/Official Information
**Status**: Basic placeholder  
**Current State**:
- Company name: "Consaience"
- Website: `https://saveboost-1e0a0.web.app/`

**Action Needed**:
- [ ] Confirm official company legal name
- [ ] Confirm founding year (currently listed as "2024" in About page schema)
- [ ] Provide company registration/incorporation details if needed for Trust & Safety
- [ ] Confirm primary business location/jurisdiction

---

### 7. Resources & Content Hub
**Status**: Placeholder resource links  
**Current State**: Home page references:
- "Contact Center Automation Guide"
- "Salesforce Agentforce Overview"
- "AI Implementation Best Practices"

**Action Needed**:
- [ ] Decide if these resources will be blog posts, PDFs, or external links
- [ ] Create actual resource content or remove the Resources section
- [ ] Set up a blog/resources section if needed

---

### 8. Imagery & Visual Assets
**Status**: Using placeholders and gradients  
**Current State**:
- No product screenshots
- No actual photos (team, office, clients)
- Generic gradient backgrounds

**Action Needed**:
- [ ] Provide product screenshots or demo videos
- [ ] Provide team photos for Bio page
- [ ] Consider adding office/company photos to About page
- [ ] Provide hero images or custom graphics if desired

---

## Design & UX Decisions

### 9. Primary CTA Strategy
**Current State**: All CTAs point to `/contact`  
**Question**: Should some CTAs link to:
- A calendar booking tool (Calendly, etc.)?
- A specific product demo page?
- A qualification form?

**Action Needed**:
- [ ] Confirm CTA destinations
- [ ] Integrate calendar booking if desired

---

### 10. Analytics & Tracking
**Status**: Adtech mock adapter in use  
**Current State**: Form tracking events fire but use mock adapter

**Action Needed**:
- [ ] Replace mock adtech adapter with actual analytics (Google Analytics, Segment, etc.)
- [ ] Set up conversion tracking for form submissions
- [ ] Set up goal tracking for demo bookings
- [ ] Confirm GDPR/privacy compliance requirements

---

## SEO & Metadata

### 11. Final SEO Review
**Status**: Basic metadata in place  
**Action Needed**:
- [ ] Review all page titles for SEO optimization (currently ≤60 chars)
- [ ] Review all meta descriptions (currently ≤155 chars)
- [ ] Add Open Graph images for social sharing
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Business Profile if applicable

---

### 12. Schema.org Structured Data
**Status**: Basic schema added  
**Current State**:
- Organization schema on About page
- Service schema on Products & Services page
- Profile schema on Bio page

**Action Needed**:
- [ ] Validate schema with Google Rich Results Test
- [ ] Add Product schema if offering packaged products
- [ ] Add FAQ schema if adding FAQ sections

---

## Technical Considerations

### 13. Form Submission Backend
**Status**: Currently simulated  
**Current State**: Contact form uses `setTimeout` to simulate submission

**Action Needed**:
- [ ] Implement actual form submission (email service, CRM integration, etc.)
- [ ] Set up email notifications for new form submissions
- [ ] Consider integrating directly with Salesforce for lead capture
- [ ] Add spam protection (currently only has honeypot field)

---

### 14. Mobile Responsiveness
**Status**: Should be working, needs testing  
**Action Needed**:
- [ ] Test all 6 pages on mobile devices (iOS/Android)
- [ ] Test on tablet breakpoints
- [ ] Validate touch targets are ≥44px for accessibility
- [ ] Test form usability on mobile

---

### 15. Accessibility Audit
**Status**: Basic semantic HTML in place  
**Action Needed**:
- [ ] Run WAVE or axe DevTools accessibility audit
- [ ] Ensure all images have meaningful alt text
- [ ] Test keyboard navigation across all pages
- [ ] Test with screen reader (NVDA, JAWS, or VoiceOver)
- [ ] Ensure color contrast meets WCAG AA standards (4.5:1 for text)

---

## Content Quality & Consistency

### 16. Voice & Tone Consistency
**Question**: Confirm target audience voice  
**Current State**: Professional, benefit-focused, B2B tone

**Action Needed**:
- [ ] Review all copy for consistency
- [ ] Confirm if "we," "our," etc. should be more formal or casual
- [ ] Ensure industry terminology is appropriate for target audience (SMEs vs. Enterprise)

---

### 17. Call-to-Action Copy
**Current State**: Using "Book a demo," "Contact us," "Learn more"  
**Question**: Should CTAs be more specific?  
- "Schedule a 30-min consultation"
- "Get your free assessment"
- "See Agentforce in action"

**Action Needed**:
- [ ] Review and optimize CTA copy for conversion

---

### 18. Legal Pages
**Status**: Existing pages preserved (Privacy, Security, Status)  
**Action Needed**:
- [ ] Review Privacy Policy page content for Salesforce/AI specific disclosures
- [ ] Update Security page if new compliance certifications are achieved
- [ ] Ensure Terms of Service page exists (if needed)

---

## Launch Checklist

### Pre-Launch
- [ ] All open questions above resolved
- [ ] Content reviewed and approved by stakeholders
- [ ] Legal pages updated and approved
- [ ] All forms tested and functional
- [ ] Analytics and tracking verified
- [ ] Mobile and accessibility testing complete
- [ ] SSL certificate active
- [ ] Custom domain configured (if moving from Firebase subdomain)

### Post-Launch
- [ ] Submit sitemap to search engines
- [ ] Monitor form submissions for 48 hours
- [ ] Set up uptime monitoring
- [ ] Schedule content updates (blog, case studies, etc.)

---

## Notes

- **Estimated Time to Resolve**: 2-4 weeks depending on content availability
- **Priority**: High priority items are #1 (Team info), #2 (Contact info), #13 (Form backend)
- **Design System**: Successfully preserved existing monochrome theme and components ✓


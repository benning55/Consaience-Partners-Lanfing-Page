# Content Mapping: Notion → Site

This document maps content from the Notion source (`content.txt`) to site pages, sections, and components.

## Mapping Table

| Notion Heading/Section | Site Page | Section/Component | Notes |
|------------------------|-----------|-------------------|-------|
| **Empowering Agentic AI Solutions** | Home (/) | ParallaxHero - title | Main value prop |
| Help enterprises automate inquiries... | Home (/) | ParallaxHero - subtitle | Supporting line |
| More Cases, Less Labor | Home (/) | CapabilitiesGrid - benefit 1 | Key benefit card |
| AI that Understands Your Business | Home (/) | CapabilitiesGrid - benefit 2 | Key benefit card |
| Fast Implementation | Home (/) | CapabilitiesGrid - benefit 3 | Key benefit card |
| **About Us** | About (/about) | Full page | Entire section |
| Who We Are | About (/about) | Hero section | Mission statement |
| What We Do | About (/about) | SplitReveal section | Core capabilities |
| Our Clients | About (/about) | Text section | Target audience |
| Our Philosophy | About (/about) | Philosophy section | Value statement |
| Our Difference | About (/about) | CapabilitiesGrid | Key differentiators |
| Our Vision | About (/about) | Vision section + CTA | Future direction |
| **Product & Services** | Products & Services (/products-services) | Full page | All 5 offerings |
| 1. Salesforce Agentic Solution Implementation | Products & Services | Service card 1 | Main offering |
| 2. AI-Driven Enquiry Automation | Products & Services | Service card 2 | Automation service |
| 3. Knowledge & CRM Intelligence Integration | Products & Services | Service card 3 | Integration service |
| 4. Advisory & Enablement Services | Products & Services | Service card 4 | Consulting service |
| 5. Continuous Optimization & Support | Products & Services | Service card 5 | Support service |
| **Industrial Use Case: Contact Center** | Use Cases (/use-cases) | Use case card 1 | Main use case |
| Challenge - Manual case handling | Use Cases | Problem section | Pain points |
| Solution - Salesforce Agentforce | Use Cases | Solution section | How it works |
| Impact - 30-50% reduction | Use Cases | Outcomes section | ROI/metrics |
| **Use Case: Retail & eCommerce** | Use Cases (/use-cases) | Use case card 2 | Industry-specific |
| Challenge - Thousands of inquiries | Use Cases | Problem section | Pain points |
| Solution - AI-driven assistant | Use Cases | Solution section | Implementation |
| Impact - 50% auto-resolved | Use Cases | Outcomes section | Results |
| **Contact** | Contact (/contact) | Contact form + info | Engagement page |
| **Team/Founder Info** | Bio (/bio) | Profile cards | Not in content.txt - placeholder |

## Content Structure by Page

### Home (/)
- **ParallaxHero**: Agentic AI value prop with CTA to book demo
- **CapabilitiesGrid**: 3 key benefits (More Cases, AI Understanding, Fast Implementation)
- **StickyPanels**: How it works (3 steps - could be Discover → Implement → Scale)
- **SplitReveal**: Enterprise/SME scalability
- **MetricTiles**: Impact metrics (30-50% reduction, faster response, etc.)
- **LogoMarquee**: Trust indicators (Salesforce partner)
- **CTAEndcap**: Final conversion

### About (/about)
- **Hero**: Mission statement
- **Grid**: What We Do (3 columns)
- **SplitReveal**: Our Clients (SME + Enterprise)
- **Philosophy Card**: Human-centered AI
- **CapabilitiesGrid**: Our Difference (3 items)
- **Vision + CTA**: Future direction

### Products & Services (/products-services)
- **Hero**: Overview of offerings
- **Service Cards**: 5 services, each with title, description, outcome, icon
- **Pricing/Engagement**: Placeholder for model
- **CTA**: Contact for consultation

### Use Cases (/use-cases)
- **Hero**: Industrial applications intro
- **Use Case 1**: Contact Center Automation (Problem → Solution → Impact)
- **Use Case 2**: Retail & eCommerce (Problem → Solution → Impact)
- **CTA**: Explore your use case

### Contact (/contact)
- **Hero**: Short intro
- **Form**: Name, email, company, role, message
- **Contact Info**: Secondary contact methods
- **CTA**: Response time expectations

### Bio (/bio)
- **Hero**: Team introduction
- **Profile Cards**: Founder/team members (placeholder content needed)
- **Link back to About**: Company context

## Design System Preservation

All pages use existing:
- **Colors**: Black, white, gray scale (monochrome theme)
- **Typography**: Inter font, fluid scale (h1-h6)
- **Spacing**: 8px unit, 96px section padding
- **Components**: Reusing ParallaxHero, CapabilitiesGrid, StickyPanels, SplitReveal, MetricTiles, LogoMarquee, CTAEndcap, Cards
- **Buttons**: `.btn-primary` (black) and `.btn-secondary` (outlined)
- **Motion**: Framer Motion with reduced motion support

## Content Improvements Made

- Tightened headlines to be benefit-focused
- Made copy more scannable with bullets and short paragraphs
- Added clear CTAs throughout
- Ensured hierarchy (H1 → H2 → H3) is semantic
- Added outcome-focused language
- Removed jargon where possible
- Used active voice consistently


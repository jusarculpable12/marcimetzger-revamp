# Codex Instructions: Revamp an Existing Website Using Next.js and Tailwind CSS

## Project Goal

Revamp the existing website using the following website as the primary design reference:

Reference website: https://marcimetzger.com/

Create a modern, professional, visually polished, responsive **single-page website** inspired by the reference website. Improve the existing website's design, user experience, layout, typography, spacing, imagery, and responsiveness.

Do not simply copy and paste the reference website's design. Study its visual style, layout patterns, typography, imagery, and interactions, then create an improved design that fits the existing website's content and purpose.

## 1. Inspect the Existing Project First

Before making any changes:

- Inspect the current project structure and identify the framework, dependencies, pages, components, stylesheets, and assets.
- Review the existing website's content, images, navigation, sections, and functionality.
- Identify which content and assets should be preserved, improved, reorganized, or replaced.
- Check whether Next.js and Tailwind CSS are already installed.
- Reuse the existing project setup whenever practical.
- Do not delete existing files, configuration, functionality, or assets without a clear reason.
- Do not create a new project inside the existing project directory.

After inspection, proceed with implementation. Do not stop after providing an analysis or plan.

## 2. Reference Website Research

Study https://marcimetzger.com/ to understand its:

- Overall visual identity and design direction.
- Header and navigation layout.
- Hero section composition.
- Typography and font hierarchy.
- Color palette and contrast.
- Image placement, sizing, and cropping.
- Section spacing and content hierarchy.
- Buttons, links, and calls to action.
- Animations, hover effects, and transitions.
- Mobile and tablet layouts.

Use the reference as design inspiration, not as a template to duplicate exactly.

Create an original design that maintains the existing website's identity while significantly improving its visual quality.

## 3. Preserve Existing Content and Images

Use the existing website's content as the primary source of truth.

Requirements:

- Preserve all meaningful existing text, headings, descriptions, labels, testimonials, biographies, calls to action, and other relevant content.
- Do not silently remove sections or rewrite important information in ways that change its meaning.
- Reorganize the content when necessary to improve readability and the user journey.
- Use the original website's images wherever appropriate.
- Download images directly from the original website when permitted and technically accessible.
- Prefer the highest-resolution version available from the website.
- Preserve image aspect ratios and use appropriate cropping.
- Use descriptive filenames and meaningful alt text.
- Store downloaded assets locally in the project's public directory when appropriate.
- Avoid unnecessary external image dependencies.
- Do not substitute unrelated stock images for original images.
- Do not invent testimonials, client results, credentials, statistics, or other factual claims.
- You may research and add relevant content if it genuinely improves the page, but clearly distinguish new content from verified original information.

If an image cannot be accessed or downloaded, document the issue and use an appropriate existing asset or a clearly identified placeholder. Do not claim to have downloaded assets that are unavailable.

Respect applicable copyright and website usage restrictions when reusing assets.

## 4. Required Technology Stack

Use the following technologies:

- **Next.js** for the application framework.
- **React** for reusable UI components.
- **TypeScript** if the existing project supports it or is already configured for it.
- **Tailwind CSS** for responsive styling and utility classes.
- **HTML5** through semantic React markup.
- **JavaScript or TypeScript** for interactions.
- **Motion** (formerly Framer Motion) for animations if it adds meaningful value.

Use basic CSS alongside Tailwind CSS when necessary for custom layouts, complex effects, or styles that are easier to maintain in a stylesheet.

Do not introduce unnecessary libraries or dependencies.

If the project already uses a compatible version of Next.js or Tailwind CSS, work with the installed version rather than upgrading everything without justification.

## 5. Single-Page Website Structure

Create one complete, cohesive landing page.

Determine the appropriate section order based on the existing website's content and the reference design. Use the following structure as a guide where relevant:

1. Header and navigation.
2. Hero section with a compelling headline, supporting content, imagery, and primary call to action.
3. Introduction or overview.
4. Main content, services, offerings, or featured information.
5. Supporting content, portfolio, projects, or other relevant sections.
6. Testimonials or social proof, if genuine testimonials exist.
7. About section or profile information, if relevant.
8. Frequently asked questions, if useful and supported by the source content.
9. Final call-to-action section.
10. Footer with relevant links and contact information.

Do not force irrelevant sections into the page. Adapt the structure to the actual content of the existing website.

Keep everything on a single page. Use anchor links for navigation between sections instead of creating additional website pages.

## 6. Design and Visual Quality

Aim for a professional, modern, production-quality design.

Focus on:

- A strong visual hierarchy.
- Consistent spacing and alignment.
- Clear typography with readable line lengths.
- A cohesive color palette.
- High-quality imagery.
- Balanced white space.
- Consistent buttons, borders, and corner radii.
- Clear primary and secondary calls to action.
- Attractive section transitions.
- Well-composed layouts rather than excessive cards.
- Appropriate visual contrast and accessibility.
- A polished appearance across the entire page.

Avoid:

- Generic template-like designs.
- Excessive gradients and unnecessary glassmorphism.
- Excessive rounded cards.
- Too many competing colors.
- Unnecessary animations.
- Oversized headings that break on mobile.
- Crowded layouts and inconsistent spacing.
- Placeholder content presented as real information.
- Reproducing the reference website pixel for pixel.

The final result should look intentionally designed, not like a collection of unrelated components.

## 7. Responsive Design

Build and verify the website for mobile, tablet, and desktop.

Use a mobile-first approach with Tailwind CSS responsive utilities.

Suggested testing widths:

- Mobile: 375px and 390px.
- Tablet: 768px.
- Desktop: 1280px and 1440px.

Check the following at each viewport:

- No unintended horizontal scrolling.
- No overlapping elements.
- No clipped headings or paragraphs.
- Proper image sizing and cropping.
- Readable text and appropriate line lengths.
- Navigation that works on small screens.
- Buttons with usable touch targets.
- Correct section spacing.
- Responsive grids and columns.
- Properly positioned fixed or sticky elements.
- Consistent margins and padding.
- Forms and interactive elements that fit the screen.

Implement a functional mobile navigation menu if the design requires one. Ensure it opens, closes, supports keyboard interaction, and provides clear navigation links.

## 8. Animation and Interactions

Use Motion only where it improves the experience.

Potential enhancements include:

- Subtle hero entrance animations.
- Scroll-triggered section reveals.
- Smooth hover transitions.
- Small image transitions.
- Button interaction feedback.
- Navigation menu transitions.

Requirements:

- Keep animations smooth and restrained.
- Avoid animations that interfere with readability or navigation.
- Do not delay access to important content.
- Respect the user's reduced-motion preferences.
- Ensure animations do not cause layout shifts or overflow.
- Avoid excessive JavaScript for simple CSS transitions.

Implement smooth scrolling for in-page navigation where appropriate.

All buttons, links, menus, and interactive elements must work as intended. Do not leave decorative buttons that appear functional but do nothing.

## 9. Performance and Accessibility

Follow good front-end development practices.

- Use semantic HTML elements.
- Use accessible heading hierarchy.
- Provide meaningful image alt text.
- Ensure adequate color contrast.
- Make interactive elements keyboard accessible.
- Include visible focus states.
- Use Next.js image optimization where appropriate.
- Avoid unnecessarily large images and dependencies.
- Prevent layout shifts where practical.
- Use appropriate loading strategies for images.
- Avoid hydration errors and browser console errors.
- Keep components reusable and code maintainable.
- Avoid unnecessary client-side components when server components are sufficient.

Use the appropriate Next.js conventions for the installed version, including the App Router if the project already uses it.

## 10. Implementation Requirements

Work directly inside the existing project.

- Build the complete single-page website, not just a wireframe or mockup.
- Create reusable components when they improve code organization.
- Separate complex sections into components when appropriate.
- Keep the page's content easy to update.
- Use Tailwind CSS consistently.
- Keep custom CSS organized.
- Remove unused imports and unnecessary dependencies introduced during development.
- Preserve unrelated existing files and project functionality.
- Ensure all referenced local images and assets exist.
- Do not leave broken image paths, unfinished sections, or temporary development content.

Do not stop after generating the initial layout. Continue through testing and refinement.

## 11. Testing and Quality Assurance

After implementation:

1. Run the available linting and type-checking commands.
2. Run the production build.
3. Fix build errors, TypeScript errors, lint errors, and React warnings introduced by the changes.
4. Start the development server.
5. Open the website in a browser using available browser tools.
6. Test the page at the specified mobile, tablet, and desktop widths.
7. Inspect the entire page from top to bottom.
8. Check image loading, cropping, and image quality.
9. Test every navigation link and button.
10. Test the mobile menu and other interactive elements.
11. Check for horizontal overflow and overlapping content.
12. Check browser console errors and failed asset requests.
13. Refine the design based on the visual results.
14. Repeat the relevant checks after making fixes.

Do not claim that browser testing or responsive verification was completed unless those checks were actually performed. If browser automation is unavailable, perform the available checks and clearly report what could not be verified.

## 12. Final Deliverables

When finished, provide:

- A fully implemented, responsive, single-page website.
- A list of the main files created or modified.
- A summary of the design improvements.
- A list of original images and assets reused or downloaded.
- Any additional dependencies installed and why they were needed.
- The testing commands executed and their results.
- The responsive viewport sizes actually tested.
- Any remaining issues, missing assets, or limitations.

## Final Instruction

Prioritize design quality, content preservation, responsiveness, maintainability, and working functionality.

First inspect the existing project and the reference website. Then implement the complete redesign, test it, review the actual rendered result, and make improvements until the page feels polished and production-ready.

Do not merely describe what you would do. Make the changes directly in the existing codebase.

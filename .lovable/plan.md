Fix header/body width alignment

The fixed navigation is currently narrower than the body sections because its horizontal padding is applied inside the `container-max` wrapper, whereas every body section (Hero, What I Build, Featured Project, etc.) applies the same padding to the outer `<section>` and keeps `container-max` unpadded.

Plan:
1. Verify the misalignment in the live preview by comparing the left edge of the nav name/link area with the left edge of the Hero content.
2. Update `src/components/Navigation.tsx`:
   - Move `px-6 md:px-12 lg:px-24` from the inner `container-max` div to the fixed `<nav>` element.
   - Keep `container-max` on the inner div with no extra horizontal padding.
   - This makes the nav content width exactly `max-w-5xl`, matching the body sections and footer.
3. Re-check the preview at desktop, tablet, and mobile breakpoints to confirm the header and Hero content share the same left/right boundaries.

This is a single-file, presentational fix; no backend, routing, or content changes.
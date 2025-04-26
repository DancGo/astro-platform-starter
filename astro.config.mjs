import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import { ContentfulContentSource } from "@stackbit/cms-contentful";

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss()]
    },
    integrations: [react()],
    adapter: netlify(),

    //stackbit
    contentSources: [
        new ContentfulContentSource({
          spaceId: process.env.CONTENTFUL_SPACE_ID,
          environment: process.env.CONTENTFUL_ENVIRONMENT,
          previewToken: process.env.CONTENTFUL_PREVIEW_TOKEN,
          accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN
        })
      ]
});

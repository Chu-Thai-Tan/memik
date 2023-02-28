import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: "n529j78w",
  dataset: "production",
  apiVersion: "2023-02-28",
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

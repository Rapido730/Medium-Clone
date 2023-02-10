import { createClient, createPreviewSubscriptionHook } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
export const config = {
  dataset:"production",
  projectId:"82mlqz6f",
  apiVersion: "v2023-02-10",

  useCdn: process.env.NODE_ENV === "production",
};

export const sanityClient = createClient(config);

export const urlFor = (source) => imageUrlBuilder(config).image(source);
// export const imageBuilder = (source) =>
//   createImageUrlBuilder(config).image(source);
// export const usePreviewSubscription = createPreviewSubscriptionHook(config);
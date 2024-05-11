import { Metadata } from "next";

export const socials = [
  {
    id: 1,
    name: "Twitter",
    url: "https://twitter.com/arkapp",
    handle: "@arkapp",
  },
  {
    id: 2,
    name: "Instagram",
    url: "https://www.instagram.com/arkapp",
    handle: "arkapp",
  },
];

const title = "Ark App";
const description =
  "Trandformando el bienerstar animal: Un futuro conectado";
const image =
  "https://harmonyearth.me/_next/image?url=%2Fimages%2FHome%2FComunidad%2F3.png&w=2048&q=75";

export const metaData: Metadata = {
  title: title,
  description: description,
  openGraph: {
    title,
    description,
    url: "https://arkapp.xyz",
    siteName: "Ark App",
    images: [{ url: image }],
    locale: "spa-MX",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: title,
    description: description,
    card: "summary_large_image",
    images: [image],
    creator: "@arkapp",
  },
};

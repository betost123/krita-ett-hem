import { SalesItem } from "./models";

export const salesItemsData: Array<SalesItem> = [
  {
    image:
      "https://i.pinimg.com/564x/f2/88/a8/f288a829a363e8ba1c2f846961279e68.jpg",
    title: "Bubbly Mug",
    cost: { cost: 350, currency: "SEK" },
    id: "njdkew178ndjew",
    sale: false,
    campaign: false,
    liked: false,
  },
  {
    image:
      "https://i.pinimg.com/564x/e2/7c/fa/e27cfa2b9d3dda5fb84f744156156a9c.jpg",
    title: "Roffe Bowl",
    cost: { cost: 550, currency: "SEK" },
    id: "dfbnjek37982",
    sale: true,
    campaign: true,
    liked: true,
  },
  {
    image:
      "https://i.pinimg.com/564x/b1/2e/fc/b12efc3f7b7946eff8d397ea5ee94c4b.jpg",
    title: "Knot Candle Stick Holder",
    cost: { cost: 220, currency: "SEK" },
    id: "cnjkfe897bwedhiekdw0",
    sale: false,
    campaign: true,
    liked: false,
  },
];

export const featuredElementSlideOne = {
  image:
    "https://img.made.com/image/upload/c_pad,d_madeplusgrey.svg,dpr_2,f_auto,q_auto:good,w_700/v1/mws-critical/e32209b9-cbbc-4fcc-a65f-5d596a593bc8_LIGHTING_HP_FEATURED_CONTENT_POD_Pink.jpg",
  title: "MADE mood lighting",
  description:
    "Whether you want to switch off and relax, or create a source of positive energy, we have lighting that’ll set the perfect mood at home – from statement ceiling pendants, to contemporary table lamps.",
  buttonText: "Shop now",
};

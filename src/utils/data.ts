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

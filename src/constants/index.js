import { 
  people01, 
  people02, 
  people03, 
  facebook, 
  instagram, 
  linkedin, 
  twitter, 
  airbnb, 
  binance, 
  coinbase, 
  dropbox, 
  send, 
  shield, 
  star
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Эхлэл",
  },
  {
    id: "about",
    title: "Бидний тухай",
  },
  // {
  //   id: "questions",
  //   title: "Асуулт",
  // },
  // {
  //   id: "clients",
  //   title: "Сэтгэгдлүүд",
  // },
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Чанартай",
    content:
      "Танд хамгийн сайн материалуудаар чанартай хөшиг урлаж өгнө.",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "100% сэтгэл ханамж",
    content:
      "Таны сэтгэлд нийцсэн хөшгийг бид урлаж өгнө.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Хямд",
    content:
      "Танд зах зээл дээр байгаа хямд үнийг санал болгоно.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    name: "Herman Jensen",
    title: "Founder & Leader",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "Money makes your life easier. If you're lucky to have it, you're lucky.",
    name: "Steve Mark",
    title: "Founder & Leader",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "It is usually people in the money business, finance, and international trade that are really rich.",
    name: "Kenn Gallagher",
    title: "Founder & Leader",
    img: people03,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "жилийн туршлага",
    value: "4+",
  },
  {
    id: "stats-2",
    title: "хөшигний захиалга",
    value: "2000+",
  },
  {
    id: "stats-3",
    title: "хөшигний сонголт",
    value: "200+",
  },
];

export const footerLinks = [
  {
    title: "Community",
    links: [
      {
        name: "Загварын хөшиг FB хуудас",
        link: "https://www.facebook.com/zagvariinhushig",
      },
      {
        name: "Загварын хөшиг FB групп",
        link: "https://www.facebook.com/groups/184596880096381",
      }
    ],
  },
  {
    title: "Хамтрагчид",
    links: [
      {
        name: "Технологийн хамтрагч",
        link: "https://www.facebook.com/E.Itgelt",
      }
    ],
  },
];

export const socialMedia = [
    {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/purevsuren.ulziijargal",
  }
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];
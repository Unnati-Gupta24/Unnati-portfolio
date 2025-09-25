import {
  displayAt,
  STOPS,
  PAGE_DEPH_MARGIN,
  Achievements,
  Glimpses,
} from './constants/pageData';

const configs = {
  title: 'INNOTECH 2025',
  subTitle: 'Coming soon',
  stars: {
    maxSize: 20,
    emissionIntencity: 40,
    dencity: 900,
  },
  navTitle: 'Innotech 2025',
  relevantStops: STOPS,
  pages: [
    {
      scale: 15,
      rotation: [Math.PI, 0, Math.PI],
      position: [0, 0, -PAGE_DEPH_MARGIN],
      displayAt: displayAt('About'),
      title: 'What is Innotech?',
      infos: [
        "World class hackathon ...........................",
      ],
    },
    {
      scale: 15,
      displayAt: displayAt('Glimpses'),
      rotation: [0, -Math.PI / 2, 0],
      position: [-PAGE_DEPH_MARGIN, 0, 0],
      title: 'Glimpses of innotech',
      imageList: Glimpses,
      footer: 'You can click the icons to find out more.',
    },
    {
      scale: 15,
      displayAt: displayAt('Achievements'),
      rotation: [-Math.PI / 2, 0, -Math.PI / 2],
      position: [0, PAGE_DEPH_MARGIN, 0],
      title: 'Achievements',
      footer: 'And more...',
      imageList: Achievements,
    },
    {
      scale: 15,
      displayAt: displayAt('Register now'),
      rotation: [0, 0, 0],
      position: [0, 0, PAGE_DEPH_MARGIN],
      title: 'Be quick Register now!!!',
      footer: 'Click the icon above to register',
      imageList: {
        rows: 1,
        separation: 3,
        leftPadding: 0,
        topPadding: 0,
        scale: 0.8,
        items: [
          {
            url: 'websites-preview/nft-place-logo.png',
            websiteURL:
              'https://docs.google.com',
          },
        ],
      },
    },
    {
      scale: 15,
      displayAt: displayAt('Previous winners'),
      rotation: [Math.PI / 2, 0, 0],
      position: [0, -PAGE_DEPH_MARGIN, 0],
      title: 'Previous winners',
      footer: '(One of the best)',
      imageList: {
        rows: 2,
        separation: 2.5,
        leftPadding: -0.4,
        topPadding: 0.2,
        scale: 0.3,
        items: [
          {
            url: 'websites-preview/nft-place-logo.png',
            websiteURL:  'https://docs.google.com',
          },
        ],
      },
    },
    {
      scale: 15,
      displayAt: displayAt('Get In Touch'),
      rotation: [0, Math.PI / 2, 0],
      position: [PAGE_DEPH_MARGIN, 0, 0],
      title: 'You can contact us:',
      footer: 'Almost done but keep scrolling :)',
      imageList: {
        rows: 2,
        separation: 1.8,
        leftPadding: -0.25,
        topPadding: 0.2,
        scale: 0.3,
        items: [
          {
            url: 'websites-preview/nft-place-logo.png',
            websiteURL: 'https://docs.google.com',
          }
        ],
      },
    },
  ],
};

export default configs;

/* 
  There are some weird things happening with the offset and the camera 
  movement because of the implementation of the smooth stop of the camera.

  My solution is to define two diferent positions.
  position is relative to the scrollComponent, that's for the nav bar, 
  displayPosition is the offset of the default camara position when facing the cube.
*/

export const PAGE_DEPH_MARGIN = 15;

export const Experience = {
  rows: 2,
  separation: 3,
  leftPadding: -0.32,
  topPadding: 0.22,
  scale: 0.2,

  webViewer: {
    position: [0, 0, -15],
    rotation: [Math.PI, Math.PI, Math.PI],
    height: 720,
    width: 1024,
  },
  items: [
    {
      url: 'Experience/iitbhu.PNG',
      websiteURL: null,
    },
    {
      url: 'Experience/gssoc.PNG',
      websiteURL: null,
    },
    {
      url: 'Experience/avaxteam1.PNG',
      websiteURL: null,
    },
    {
      url: 'Experience/bt.PNG',
      websiteURL: null,
    },
    {
      url: 'Experience/le.PNG',
      websiteURL: null,
    },
    {
      url: 'Experience/df.PNG',
      websiteURL: null,
    },
  ],
};

export const Achievements = {
  rows: 2,
  separation: 2,
  leftPadding: -0.25,
  topPadding: 0.2,
  scale: 0.4,
  items: [
    { url: 'Achievements/ntse.jpg', websiteURL: null },
    { url: 'Achievements/devrel espresso.jpg', websiteURL: "https://blog.esprezzo.io/how-to-succeed-in-web3-devrel-in-2025-tips-from-pros" },
    { url: 'Achievements/judge.jpg', websiteURL: "https://www.hackquest.io/hackathons/HackX-Buildathon" },
    { url: 'Achievements/buildspace.jpg', websiteURL: null },
  ],
};

export const STOPS = [
  { displayPosition: 0, position: 0, name: 'Title' },
  {
    position: 0.13,
    displayPosition: 0.13,
    displayPositionOffset: -0.04,
    displayPositionOffsetEnd: -0.02,
    name: 'About',
  },
  {
    position: 0.2137,
    displayPosition: 0.2007,
    displayPositionOffset: -0.03,
    displayPositionOffsetEnd: -0.07,
    name: 'Experience',
  },
  {
    position: 0.2982,
    displayPosition: 0.232,
    displayPositionOffset: 0.05,
    displayPositionOffsetEnd: -0.12,
    name: 'Achievements',
  },
  {
    position: 0.3899,
    displayPosition: 0.3009,
    displayPositionOffset: 0.08,
    displayPositionOffsetEnd: -0.17,
    name: 'Checkout resume',
  },
  {
    position: 0.48,
    displayPosition: 0.29,
    displayPositionOffset: 0.18,
    displayPositionOffsetEnd: -0.15,
    name: 'Skills',
  },
  {
    position: 0.592,
    displayPosition: 0.28,
    displayPositionOffset: 0.3,
    displayPositionOffsetEnd: -0.1,
    name: 'Get In Touch',
  },
  {
    position: 1,
    displayPosition: 1,
    displayPositionOffset: 0.03,
    displayPositionOffsetEnd: 0,
    name: 'Unnati gupta',
  },
];

export const displayAt = (stopName) =>
  STOPS.find((stop) => stop.name === stopName);

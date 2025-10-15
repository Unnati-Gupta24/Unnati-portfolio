import {
  displayAt,
  STOPS,
  PAGE_DEPH_MARGIN,
  Achievements,
  Experience,
} from './constants/pageData'

const configs = {
  title: '  UNNATI GUPTA',
  subTitle: 'Blockchain & FullStack Developer',
  stars: {
    maxSize: 20,
    emissionIntencity: 40,
    dencity: 900,
  },
  navTitle: 'Unnati Gupta',
  relevantStops: STOPS,
  pages: [
    {
      scale: 15,
      rotation: [Math.PI, 0, Math.PI],
      position: [0, 0, -PAGE_DEPH_MARGIN],
      displayAt: displayAt('About'),
      title: 'Who am I?',
      infos: [  
        "I am proficient in the MERN stack, experienced in web3, and skilled in marketing research, combining technical expertise with strategic insight.",
        'I have worked as a Research Intern at IIT (BHU), a DevRel at LayerEdge, and a Developer at BefikraTech.',
        'Feel free to reach out if you have any opportunities or just want to say hi!',
      ],
    },
    {
      scale: 15,
      displayAt: displayAt('Experience'),
      rotation: [0, -Math.PI / 2, 0],
      position: [-PAGE_DEPH_MARGIN, 0, 0],
      title: 'Experience',
      imageList: Experience,
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
      displayAt: displayAt('Checkout resume'),
      rotation: [0, 0, 0],
      position: [0, 0, PAGE_DEPH_MARGIN],
      title: 'Checkout resume',
      footer: 'Click the icon above to check',
      imageList: {
        rows: 1,
        separation: 3,
        leftPadding: 0,
        topPadding: 0,
        scale: 0.8,
        items: [
          {
            url: 'websites-preview/cv.png',
            websiteURL: 'https://drive.google.com/file/d/1VTsgkNawomllLa2pvKeLjUKNp5BtFoIk/view?usp=drivesdk',
          },
        ],
      },
    },
    {
      scale: 15,
      displayAt: displayAt('Skills'),
      rotation: [Math.PI / 2, 0, 0],
      position: [0, -PAGE_DEPH_MARGIN, 0],
      title: 'My Skillset',
      footer: 'Check out some of my skills and many more in resume :)',
      imageList: {
        rows: 3,
        separation: 2.5,
        leftPadding: -0.4,
        topPadding: 0.2,
        scale: 0.2,
        bottomPadding: 0.2,
        bottomMargin: 0.2,
        items: [
          {
            url: 'skills/mern.PNG',
            websiteURL: null,
          },
          {
            url: 'skills/java.PNG',
            websiteURL: null,
          },
          {
            url: 'skills/py.PNG',
            websiteURL: null,
          },
          {
            url: 'skills/sol.PNG',
            websiteURL: null,
          },
          {
            url: 'skills/ts.PNG',
            websiteURL: null,
          },
          {
            url: 'skills/hd.PNG',
            websiteURL: null,
          },
          {
            url: 'skills/ipfs.PNG',
            websiteURL: null,
          },
          {
            url: 'skills/eth.PNG',
            websiteURL: null,
          },
          {
            url: 'skills/btc.PNG',
            websiteURL: null,
          },
        ],
      },
    },
    {
      scale: 15,
      displayAt: displayAt('Get In Touch'),
      rotation: [0, Math.PI / 2, 0],
      position: [PAGE_DEPH_MARGIN, 0, 0],
      title: 'Get in touch with me:',
      footer: 'Almost done but keep scrolling :)',
      imageList: {
        rows: 2,
        separation: 1.8,
        leftPadding: -0.25,
        topPadding: 0.2,
        scale: 0.3,
        items: [
          {
            url: 'contact/x.PNG',
            websiteURL: null,
          },
          {
            url: 'contact/lk.PNG',
            websiteURL: null,
          },
          {
            url: 'contact/gt.PNG',
            websiteURL: null,
          },
          {
            url: 'contact/medium.PNG',
            websiteURL: null,
          },
        ],
      },
    },
  ],
}

export default configs

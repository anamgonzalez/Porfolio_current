module.exports = {
  siteTitle: 'Ana Gonzalez | Software Developer',
  siteDescription:
    'Ana Gonzalez is a software developer based in Miami, Fl.',
  siteKeywords:
    'Ana Gonzalez, Ana, Gonzalez, bchiang7, software developer, front-end developer, web developer, javascript, northeastern',
  siteUrl: 'https://anamariagonzalez.info',
  siteLanguage: 'en_US',

  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',

  name: 'Ana Gonzalez',
  location: 'Miami, FL',
  email: 'ana.m.gonzalez0496@gmail.com',
  github: 'https://github.com/anamgonzalez',
  socialMedia: [
    {
      name: 'Github',
      url: 'https://github.com/anamgonzalez',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/amg1996/',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/anamgonzalez',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/anamgonzalezart/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/an_amria',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '#about',
    },
    {
      name: 'Experience',
      url: '#jobs',
    },
    {
      name: 'Work',
      url: '#projects',
    },
    {
      name: 'Contact',
      url: '#contact',
    },
  ],

  twitterHandle: '@an_amria',
  googleAnalyticsID: 'UA-45666519-2',

  navHeight: 100,

  greenColor: '#CEECF2',
  navyColor: '#394D59',
  darkNavyColor: '#142F40',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};

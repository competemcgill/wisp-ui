module.exports = {
  url: '/signup',
  commands: [],
  // Or a page objects can also have sections
  sections: {
    container: {
      selector: '#signup',
      elements: {
        username: {
          selector: 'input[name="username"]'
        },
        password: {
          selector: 'input[name="password"]'
        },
        email: {
          selector: 'input[name="email"]'
        },
        major: {
          selector: 'input[name="major"]'
        },
        year: {
          selector: 'input[name="year"]'
        },
        university: {
          selector: 'input[name="university"]'
        },
        bio: {
          selector: 'input[name="bio"]'
        },
        codeforcesUsername: {
          selector: 'input[name="codeforcesUsername"]'
        },
      },
    },
  },
};

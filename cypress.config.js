// const { defineConfig } = require("cypress");

// // module.exports = defineConfig({
// //   projectID: '3r5fuc',
// //   e2e: {
// //     setupNodeEvents(on, config) {
// //     }
// //   }
// // });
// module.exports = {
//   projectId: '3r5fuc',
//   e2e: {
//     //     setupNodeEvents(on, config) {
//     //     }
// }
// }

const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: '3r5fuc',
  e2e: {
    baseUrl: 'https://jsonplaceholder.typicode.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})


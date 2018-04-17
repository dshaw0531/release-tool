// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAYG7OLSKr5cBSbWeg8-YSSFKoNEezKyL4',
    authDomain: 'release-tool.firebaseapp.com',
    databaseURL: 'https://release-tool.firebaseio.com',
    projectId: 'release-tool',
    storageBucket: 'release-tool.appspot.com',
    messagingSenderId: '598628109657'
  }
};

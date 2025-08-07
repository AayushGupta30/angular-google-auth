
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://AayushGupta30.github.io/angular-google-auth/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/angular-google-auth/login",
    "route": "/angular-google-auth"
  },
  {
    "renderMode": 2,
    "route": "/angular-google-auth/login"
  },
  {
    "renderMode": 2,
    "route": "/angular-google-auth/landing"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 552, hash: 'd4879649f80d3f321b0623b4739c18827e6338bd91f94c62a436c33ef89c731c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1065, hash: '34184dc10fa4d52531d1321518cc25601612bd7168bacbb3dd318060b5797c47', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'landing/index.html': {size: 3515, hash: '9172cda3969d95dc7de3bf2075700123330d57bfc283a793725121d4bc03ae07', text: () => import('./assets-chunks/landing_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 3515, hash: '9172cda3969d95dc7de3bf2075700123330d57bfc283a793725121d4bc03ae07', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};

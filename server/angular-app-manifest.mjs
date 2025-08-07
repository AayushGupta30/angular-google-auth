
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/angular-google-auth/',
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
    'index.csr.html': {size: 521, hash: '9f51dc9c1319d59007a3231a8ae85ce869c9e468f8107f76be345faf5795dbbb', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1034, hash: '33fe6caf9896dc8158afb8f651f1f980d16a9cf2c7de4a9cd1235218c122345f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'landing/index.html': {size: 3484, hash: '4f244e07526fd74a2bf17110efb02b29d6c90ac3a41ef5b6d109cc2a7accbf10', text: () => import('./assets-chunks/landing_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 3484, hash: '4f244e07526fd74a2bf17110efb02b29d6c90ac3a41ef5b6d109cc2a7accbf10', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};

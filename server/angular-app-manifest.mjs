
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/sorniak.github.io/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/sorniak.github.io"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 588, hash: '2fdd3f3c553bdaceb30755f3a74804265399f833db9e036df0d061faf5b527d0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1101, hash: '68180f4c5c4f33e2e0be399b5f6dbece047ef60e9756d49a6c61ccc583af6408', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 1625, hash: '054bd9090c11583dcf9f851039fdc03d66be87112e445888199ca9494e02d0a2', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};

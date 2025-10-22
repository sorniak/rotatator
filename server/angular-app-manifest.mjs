
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/camera-pwa/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/camera-pwa"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 581, hash: '124178d70ff5c05a82f296c4ac16f10564add8dd8a14f3628f130c8011f9af26', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1094, hash: 'e912b93ae1378f2adbe2a1b989fc9399be4503e1eaa198a0c4ad22e1992e2687', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 1618, hash: 'c5d84cf7f78891c863e5dec7976d024940768e1c505549d233300fd7c427ac21', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};

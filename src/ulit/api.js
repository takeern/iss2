const env = 'dev';
const url = env === 'dev' ? 'http://localhost:2222' : 'http://149.28.22.6:2222';
export default {
    'getPageList': '/api/getPageList',
    'getList': '/api/getList',
    'getCurrentPage': '/api/currentPage',
};
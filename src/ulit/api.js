const env = 'prod';
const url = env === 'dev' ? 'http://localhost:2222/api' : 'api';
export default {
    'getPageList': `${url}/getPageList`,
    'getList': `${url}/getList`,
    'getCurrentPage': `${url}/currentPage`,
};
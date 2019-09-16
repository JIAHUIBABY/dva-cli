import dva from 'dva';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import Router from './router/index'
const createBrowserHistory = require('history').createBrowserHistory;
const app = dva({
    history: createBrowserHistory()
});
app.router(Router);
app.start('#root');
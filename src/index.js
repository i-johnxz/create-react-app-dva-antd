import dva from 'dva';
import { hashHistory } from 'dva/router';
import createLoading from 'dva-loading';
import { message } from 'antd';
import './index.css';

const ERROR_MSG_DURATION = 3; // 3 秒

// 1. Initialize
const app = dva({
  history: hashHistory,
  onError(e) {
    message.error(e.message, ERROR_MSG_DURATION);
  },
});

// 2. Plugins
app.use(createLoading());

// 3. Model
// Moved to router.js
// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
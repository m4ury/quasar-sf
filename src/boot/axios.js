import { boot } from 'quasar/wrappers';
import axios from 'axios';

const api = axios.create({ baseURL: 'http://sfamiliar-api.test' });

app.config.globalPropperties.$axios = axios;

app.config.globalPropperties.$api;

export { api };

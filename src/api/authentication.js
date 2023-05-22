import { default as axios } from 'utils/axiosHandler';

const DEFAULT_URL = process.env.REACT_APP_MEMBER_API_SERVER + '/api';
const MEMBERS_URL = DEFAULT_URL + '/members';

export const login = async (params) => axios.post(MEMBERS_URL, params);

export const createMember = async (params) => axios.post(MEMBERS_URL, params);


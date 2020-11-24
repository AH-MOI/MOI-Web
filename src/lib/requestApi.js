import axios from 'axios';
import { AUTH } from './requestUrl';

export const BASE_URL_LIST = {
	RED: 'http://172.30.1.36:8000',
	BLUE: 'http://172.30.1.24:8888',
};

export const methodType = {
	GET: 'get',
	POST: 'post',
	PUT: 'put',
	PATCH: 'patch',
};

export const ACCESS_TOKEN_NAME = 'Authorization';

export const ACCESS_TOKEN = 'accessToken';
export const REFRESH_TOKEN = 'refreshToken';

export const requestApiWithBodyWithoutToken = async (
	BASE_URL,
	method,
	url,
	body,
	header,
) => {
	try {
		const res = await axios[method](BASE_URL + url, body, {
			headers: {
				...header,
			},
		});

		return res;
	} catch (error) {
		throw error.response;
	}
};

export const requestApiWithoutBodyWithoutToken = async (
	BASE_URL,
	method,
	url,
	header,
) => {
	try {
		const res = await axios[method](BASE_URL + url, {
			headers: {
				...header,
			},
		});

		return res;
	} catch (error) {
		throw error.response;
	}
};

export const requestApiWithoutBodyWithToken = async (
	BASE_URL,
	method,
	url,
	header,
) => {
	try {
		const accessToken = window.localStorage.getItem(ACCESS_TOKEN);

		const res = await axios[method](BASE_URL + url, {
			headers: {
				[ACCESS_TOKEN_NAME]: accessToken,
				...header,
			},
		});

		return res;
	} catch (error) {
		console.log(error.response);

		throw error.response;
	}
};

export const requestApiWithBodyWithToken = async (
	BASE_URL,
	method,
	url,
	body,
	header,
) => {
	try {
		const accessToken = window.localStorage.getItem(ACCESS_TOKEN);

		const res = await axios[method](BASE_URL + url, body, {
			headers: {
				[ACCESS_TOKEN_NAME]: accessToken,
				...header,
			},
		});

		return res;
	} catch (error) {
		console.log(error.response);

		throw error.response;
	}
};

export const checkIsLogin = async () => {
	try {
		const accessToken = window.localStorage.getItem(ACCESS_TOKEN);
		const res = await axios.post(
			BASE_URL_LIST.BLUE + AUTH.isTokenOK(),
			{},
			{
				headers: {
					[ACCESS_TOKEN_NAME]: accessToken,
				},
			},
		);

		return true;
	} catch (err) {
		return false;
	}
};

export const Logout = () => {
	try {
		window.localStorage.clear();
		alert('로그아웃되었습니다.');
	} catch (error) {
		console.log(error);
	} finally {
		window.location.href = '/';
	}
};

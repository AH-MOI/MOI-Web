export const AUTH = {
	register: () => {
		return `/auth/join`;
	},
	login: () => {
		return `/auth/login`;
	},
	isTokenOK: () => {
		return `/auth/token`;
	},
	getAcToken: () => {
		return ` /auth/access-token`;
	},
};

export const INFO = {
	getUserInfo: () => {
		return `/info/student`;
	},
	putStd: () => {
		return `/info/student`;
	},
	myProject: () => {
		return `/info/project`;
	},
	ourProject: () => {
		return `/info/participation/project`;
	},
	myProjectText: (projectId) => {
		return `/info/project/${projectId}`;
	},
	ourProjectText: (projectId) => {
		return `/info/project/participation/${projectId}`;
	},
	accessMyProjectRes: (projectId) => {
		return `/participation/project/${projectId}`;
	},
};

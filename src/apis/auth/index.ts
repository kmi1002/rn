import api from '@apis/api';

const AUTH_URL = 'http://localhost:3003';

export const login = (provider: string, accessToken?: string, email?: string, password?: string) => {
  let payload: { [k: string]: string } = { provider: provider };

  if (provider === 'email') {
    if (email === undefined || password === undefined) {
      throw new Error('이메일 & 비밀번호가 없습니다.');
    }

    payload = { ...payload, email: email, password: password };
  } else {
    if (accessToken === undefined) {
      throw new Error('accessToken이 없습니다.');
    }

    payload = { ...payload, accessToken: accessToken };
  }

  return api.post({
    url: `${AUTH_URL}/signin`,
    payload: payload,
  });
};

export const userInfo = () => {
  return api.get({
    url: `${AUTH_URL}/users/me`,
  });
};

export const updateProfile = (userId: number, firstName: string, lastName: string) => {
  return api.put({
    url: `${AUTH_URL}/users/${userId}`,
    payload: {
      firstName: firstName,
      lastName: lastName,
    },
  });
};

import Service from '../../service';
export const register = (data: object) => Service.post('/v1/auth/register', data);
export const setToken = (token: string) => Service.setBearerToken(token);

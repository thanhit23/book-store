import Service from '../../service';
export const login = (data: object) => Service.post('/v1/auth/login', data);
export const setToken = (token: string) => Service.setBearerToken(token);

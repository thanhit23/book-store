import Service from '../../service';

export const isMe = () => Service.get('/v1/user/me');
export const setHeader = (token: string) => Service.setBearerToken(token);

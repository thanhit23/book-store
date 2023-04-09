import Service from '../../../service';

export const getProduct = (id: string) => Service.get(`/v1/book/${id}`);
export const addComment = (data: object) => Service.post('/v1/comment', data);
export const editComment = (id: string, data: object) => Service.put(`/v1/comment/${id}`, data);
export const getComments = (id: string) => Service.get(`/v1/comment?bookId=${id}`);

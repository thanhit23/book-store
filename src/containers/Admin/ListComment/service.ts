import Service from '../../../service';

export const getListComment = () => Service.get('/v1/comment');
export const deleteComment = (id: string) => Service.delete(`/v1/comment/${id}`, id);

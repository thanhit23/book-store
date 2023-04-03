import Service from '../../../service';

export const getListProduct = () => Service.get('/v1/book');
export const deleteProduct = (id: string) => Service.delete(`/v1/book/${id}`, id);

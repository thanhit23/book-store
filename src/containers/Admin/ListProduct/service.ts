import Service from '../../../service';

export const getListProduct = (page: number) => Service.get(`/v1/book?page=${page}`);
export const deleteProduct = (id: string) => Service.delete(`/v1/book/${id}`, id);

import Service from '../../../service';

export const getListProduct = (page: number) => Service.get(`/v1/book?page=${page}`);

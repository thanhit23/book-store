import Service from '../../../service';

export const getProduct = (id: string) => Service.get(`/v1/book/${id}`);

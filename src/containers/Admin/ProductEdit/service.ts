import Service from '../../../service';

export const getProductDetail = (id: string) => Service.get(`/v1/book/${id}`);
export const updateProduct = (id: string, data: object) => Service.put(`/v1/book/${id}`, data);

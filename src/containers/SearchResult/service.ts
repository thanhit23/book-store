import Service from '../../service';

export const getProduct = (keyword: string) => Service.get(`/v1/book/search/${keyword}`);

import { map } from 'lodash';

import Service from '../../../service';

export const addProduct = (data: object) => Service.post('/v1/book', data);
export const uploadFile = (data: object) => {
  const formData = new FormData();
  Service.setHeaderDefault({
    'content-type': 'multipart/form-data',
  });
  map(data, i => formData.append('file', i));
  return Service.post('/file', formData);
};

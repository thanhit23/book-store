import { IsLoading } from './types';
import { IS_LOADING } from './constants';

export const isLoading = (loading: boolean): IsLoading => ({
  type: IS_LOADING,
  payload: { loading },
});

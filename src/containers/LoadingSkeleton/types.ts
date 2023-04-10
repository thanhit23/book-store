import { IS_LOADING } from './constants';

export interface Props {
  showLoading: boolean;
  children: JSX.Element;
}

export interface States {
  global: {
    loading: {
      showLoading: boolean;
    };
  };
}

export interface IsLoading {
  type: typeof IS_LOADING;
  payload: { loading: boolean };
}

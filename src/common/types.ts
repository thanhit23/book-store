import { Store } from 'redux';
import { Saga } from 'redux-saga';

export type Nullable<T> = T | null;

export interface InjectedStore extends Store {
  injectedReducers: any;
  injectedSagas: any;
  runSaga(saga: Saga<any[]> | undefined, args: any | undefined): any;
}

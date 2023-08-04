import axios, {AxiosResponse} from 'axios';
import {call, put, takeEvery} from 'redux-saga/effects';
import {fetchBeersSuccess, fetchBeersFailure} from './actions';
import Beer from './interfaces/Beer';

function* fetchBeers(action: {
  type: 'FETCH_BEERS_REQUEST';
  payload: number;
}): Generator {
  try {
    const response = yield call(
      axios.get,
      `https://api.punkapi.com/v2/beers?page=${action.payload}&per_page=20`,
    );
    yield put(fetchBeersSuccess((response as AxiosResponse<Beer[]>).data));
  } catch (error) {
    yield put(fetchBeersFailure(error));
  }
}

export default function* watchFetchBeers(): Generator {
  yield takeEvery('FETCH_BEERS_REQUEST' as const, fetchBeers);
}

export const fetchBeersRequest = (page: number) => ({
  type: 'FETCH_BEERS_REQUEST',
  payload: page,
});

export const fetchBeersSuccess = (beers: any[]) => ({
  type: 'FETCH_BEERS_SUCCESS',
  payload: beers,
});

export const fetchBeersFailure = (error: any) => ({
  type: 'FETCH_BEERS_FAILURE',
  payload: error,
});

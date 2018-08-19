import {
  FETCHING_GISTS,
  SET_GISTS_SUCCESS,
  SET_GISTS_FAILURE,
  SET_COMMENTS_SUCCESS,
  SET_COMMENTS_FAILURE
} from './types';
import createReducer from '../config';

const initialState = {
  listGists: [],
  commentsByGist: [],
  error: '',
  loading: false
};

const setListGists = (state = initialState, {
  payload
}) => ({
  ...state,
  listGists: payload,
  loading: false
});

const setListComments = (state = initialState, {
  payload
}) => ({
  ...state,
  commentsByGist: payload,
  loading: false
});

const fetching = (state = initialState) => ({
  ...state,
  loading: true
});

const setFailFetching = (state = initialState, {
  payload
}) => ({
  ...state,
  error: payload
});

const descriptor = {
  [FETCHING_GISTS]: fetching,
  [SET_GISTS_SUCCESS]: setListGists,
  [SET_GISTS_FAILURE]: setFailFetching,
  [SET_COMMENTS_SUCCESS]: setListComments,
  [SET_COMMENTS_FAILURE]: setFailFetching
};

export default createReducer(initialState, descriptor);

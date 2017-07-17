import {
  USER_INFO_FETCHING,
  USER_INFO_FETCH_SUCCESS,
  USER_INFO_FETCH_FAIL
} from '../mutation-types'

const state = {
  user: {
  }
};

const mutations = {
  [USER_INFO_FETCHING] (state, param) {
    state.user.fetching = true;
  }
}


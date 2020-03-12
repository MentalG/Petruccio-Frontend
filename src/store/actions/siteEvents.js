import { SET_VIEWPORT } from '../constants';

//Action Creator
export const setViewport = viewport => ({
  type: SET_VIEWPORT,
  payload: viewport
});

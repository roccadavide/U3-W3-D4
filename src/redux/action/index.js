export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";
export const SET_JOBS = "SET_JOBS";

export const addToFavoritesAction = data => ({ type: ADD_TO_FAVORITES, payload: data });
export const removeFromFavoritesAction = i => ({ type: REMOVE_FROM_FAVORITES, payload: i });

export const getJobsAction = endpoint => {
  return async (dispatch, getState) => {
    const globalState = getState();
    console.log("global State", globalState);
    try {
      let resp = await fetch(endpoint);
      if (resp.ok) {
        let fetchedJobs = await resp.json();
        dispatch({ type: SET_JOBS, payload: fetchedJobs });
      } else {
        console.log("error");
        throw new Error("Problema nella fetch");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

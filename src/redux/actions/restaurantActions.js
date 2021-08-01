import { GETRESTAURANTINFOS } from "./actionTypes";

export const getRestaurantInfos = (restaurantInfos) => {
  return {
    type: GETRESTAURANTINFOS,
    payload: restaurantInfos,
  };
};

export const fetchRestaurantInfos = () => {
  return function (dispatch) {
    let url = "http://localhost:3004/restaurant";

    return fetch(url)
      .then((response) => response.json())
      .then((result) => dispatch(getRestaurantInfos(result)));
  };
};

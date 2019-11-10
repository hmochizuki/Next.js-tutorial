import axios from "axios";

// ぐるなびAPI (https://api.gnavi.co.jp/api/manual/)
const GURUNAVI_API_KEY = "d1ce7b3a5cef6415a30a02f8dfa77bd1";
const GURUNAVI_RESTAURANT_SEARCH_API =
  "https://api.gnavi.co.jp/RestSearchAPI/v3/";
const GURUNAVI_RESTAURANT_REVIW_API =
  "https://api.gnavi.co.jp/PhotoSearchAPI/v3/";
const GURUNAVI_AREA_MASTER_API =
  "https://api.gnavi.co.jp/master/GAreaSmallSearchAPI/v3/";
const GURUNAVI_PREF_MASTER_API =
  "https://api.gnavi.co.jp/master/PrefSearchAPI/v3/";
const GURUNAVI_CATEGORY_LARGE_MASTER_API =
  "https://api.gnavi.co.jp/master/CategoryLargeSearchAPI/v3/";
const GURUNAVI_CATEGORY_SMALL_MASTER_API =
  "https://api.gnavi.co.jp/master/CategorySmallSearchAPI/v3/";

export const getGurunaviRestaurant = async () => {
  return await axios
    .get(GURUNAVI_RESTAURANT_SEARCH_API, {
      params: {
        keyid: GURUNAVI_API_KEY,
        area: "AREA110",
        pref: "PREF13"
      }
    })
    .then(res => {
      return res.data.rest;
    })
    .catch(e => {
      return e.response;
    });
};

export const getGurunaviPrefs = async () => {
  return await axios
    .get(GURUNAVI_PREF_MASTER_API, {
      params: {
        keyid: GURUNAVI_API_KEY,
        lang: "ja"
      }
    })
    .then(res => {
      return res.data;
    })
    .catch(e => {
      return e.response;
    });
};

export const getLargeCategories = async () => {
  return await axios
    .get(GURUNAVI_CATEGORY_LARGE_MASTER_API, {
      params: {
        keyid: GURUNAVI_API_KEY,
        lang: "ja"
      }
    })
    .then(res => {
      return res.data;
    })
    .catch(e => {
      return e.response;
    });
};

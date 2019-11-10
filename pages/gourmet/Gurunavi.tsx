import * as React from "react";
import styled from "styled-components";
import axios from "axios";

export const MainContent = styled.main`
  background-color: #f8f8f8;
  padding: 24px;
`;

export const MainTitle = styled.h2`
  color: #e65100;
  font-size: 16px;
`;

const GURUNAVI_API_URL = "https://api.gnavi.co.jp/RestSearchAPI/v3/";
const AREA_CODE_MASTER_API_URL =
  "https://api.gnavi.co.jp/master/GAreaSmallSearchAPI/v3/";

const PREF_MASTER_API_URL = "https://api.gnavi.co.jp/master/PrefSearchAPI/v3/";

// const config = {
//   headers: {
//     "Access-Control-Allow-Origin": "*",
//     "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
//   }
// };

const getAera = async () => {
  await axios
    .get(PREF_MASTER_API_URL, {
      params: {
        keyid: "d1ce7b3a5cef6415a30a02f8dfa77bd1",
        lang: "ja"
      }
    })
    .then(res => {
      console.log("success,area-master!!!!!!!!!!!!!!!", res.data);
      res.data.garea_small.map(v => {
        v.areaname_s === "自由が丘";
      });
      return res.data;
    })
    .catch(e => {
      console.log(
        "error, area-master!!!!!!!!!!!!!!!!!!!!",
        e.response.data.error
      );
      console.log(
        "request path, area-master!!!!!!!!!!!!!!!!!!!!",
        e.response.data.error
      );
      e.response.request.path;
      return e.response;
    });
};

const getStores = async () => {
  return await axios
    .get(GURUNAVI_API_URL, {
      params: {
        keyid: "d1ce7b3a5cef6415a30a02f8dfa77bd1",
        area: "AREA110",
        pref: "PREF13"
      }
    })
    .then(res => {
      console.log("success, getStore!!!!!!!!!!!!!!!", res.data);
      return res.data;
    })
    .catch(e => {
      console.log("error, getStore!!!!!!!!!!!!!!!!!!!!", e.response.data.error);
      return e.response;
    });
};

const Category = props => {
  console.log({ props });
  return (
    <MainContent>
      <MainTitle>Categories</MainTitle>
      {props.rest.map(v => (
        <MainTitle>{v.name}</MainTitle>
      ))}
    </MainContent>
  );
};

Category.getInitialProps = async () => {
  return await getStores();
};

export default Category;

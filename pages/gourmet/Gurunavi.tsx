import * as React from "react";
import styled from "styled-components";
import {
  getGurunaviRestaurant,
  getGurunaviPrefs,
  getLargeCategories
} from "../../src/util/gurunavi";
import { Restaurant } from "../../src/types/gurunavi";

const MainContent = styled.main`
  background-color: #f8f8f8;
  padding: 24px;
`;

const MainTitle = styled.h2`
  color: #e65100;
  font-size: 16px;
`;

const RestaurantArea = styled.section`
  background-color: #eeeeee;
`;

const RestaurantName = styled.p`
  color: black;
`;

const Select = styled.select`
  width: 200px;
  height: 40px;
  font-size: 18px;
`;

const Category = (props: { rest: Array<Restaurant>; pref; categories }) => {
  console.log(props);
  return (
    <MainContent>
      <MainTitle>Categories</MainTitle>
      <Select>
        {props.pref.map(p => (
          <option key={p.pref_code} value={p.pref_code}>
            {p.pref_name}
          </option>
        ))}
      </Select>
      <Select>
        {props.categories.map(c => (
          <option key={c.category_l_code} value={c.category_l_code}>
            {c.category_l_name}
          </option>
        ))}
      </Select>
      <RestaurantArea>
        {props.rest.map(v => (
          <RestaurantName key={v.id}>{v.name}</RestaurantName>
        ))}
      </RestaurantArea>
      <RestaurantArea>
        {props.pref.map(v => (
          <RestaurantName key={v.pref_code}>{v.name}</RestaurantName>
        ))}
      </RestaurantArea>
    </MainContent>
  );
};

Category.getInitialProps = async (): Promise<{ rest: Array<Restaurant> }> => {
  const pref = await getGurunaviPrefs();
  console.log({ pref });
  pref.pref.map(v => {
    console.log(v);
  });
  const rest = await getGurunaviRestaurant();
  const categories = await getLargeCategories();
  // @ts-ignore
  return { pref: pref.pref, rest, categories: categories.category_l };
};

export default Category;

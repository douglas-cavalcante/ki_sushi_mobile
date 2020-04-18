import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #ea3c4f;
  padding: 10px;
`;

export const Food = styled.View`
  background-color: #fff;
  border-radius: 20px;
  width: 100%;
  height: 150px;

  padding: 10px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin: 10px 0;
`;

export const Right = styled.View`
  flex: 1;
  justify-content: center;
  padding: 10px;
`;

export const FoodName = styled.Text`
  color: #32384f;
  font-size: 24px;
  font-weight: bold;
`;

export const Ingredient = styled.Text`
  color: #000;
  font-size: 12px;
`;

export const Price = styled.Text`
  color: #32384f;
  font-size: 26px;
`;

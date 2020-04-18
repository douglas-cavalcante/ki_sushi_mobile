import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Content = styled.ScrollView`
  flex: 1;
  background-color: #ea3c4f;
  padding: 10px;
`;

export const Box = styled.View`
  width: 100%;
  height: 100px;
  background-color: #fff;
  border-radius: 30px;

  padding: 10px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin: 10px 0;
`;

export const Title = styled.Text`
  color: #32384f;
  font-size: 25px;
  font-weight: bold;
`;

export const Count = styled.Text`
  color: #000;
  font-size: 16px;
`;

export const Next = styled.TouchableOpacity`
  background-color: #fff;
  padding: 5px 10px;
  border-radius: 50;

  border: 1px;
  border-color: #ea3c4f;
`;

export const ArrowRight = styled.Text`
  color: #ea3c4f;
  font-size: 18px;
`;

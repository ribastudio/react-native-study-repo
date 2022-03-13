import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #333;
`;

export const H1Text = styled.Text`
  font-size: 60px;
  font-weight: 700;
  color: white;
`;

export const ParagraphText = styled.Text`
  color: rgb(255,255,255);
  font-size: 30px;
  margin-top: 20px;
  text-align: center;
  width: 50%;
`;

export const DefaultButton = styled.TouchableOpacity`
  width: 100px;
  height: 40px;
  border: 2px solid white;
  border-radius: 5px;
  background-color: #000;
`;
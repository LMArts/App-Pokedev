import styled from 'styled-components/native';
import { theme } from './Theme';

interface Props {
  size: string;
  bold: string;
  color: string;
  line: string;
}

interface Title {
  color: string;
  height: string;
}

export const Texto = styled.Text<Props>`
  font-size: ${x => x.size};
  font-weight: ${x => x.bold};
  color: ${x => x.color};
  line-height: ${x => x.line};
`;

export const Titulo = styled.View<Title>`
  background-color: ${x => x.color};
  width: 100%;
  align-items: center;
  justify-content: center;
  height: ${x => x.height};
`;

// Header
export const Container = styled.View`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

// Loading
export const LoadingContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

// Listagem
export const List = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 10px;
`;
export const ContainerList = styled.View`
  width: 100%;
  padding: 10px 15px;
`;
export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 37px;
  border-bottom-width: 1px;
  border-bottom-color: ${theme.colors.gray};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

// Header Arrow
export const ButtonBack = styled.TouchableOpacity`
  margin-left: 5%;
  margin-right: 30%;
`;
export const TituloArrow = styled.View`
  background-color: ${theme.colors.primaryBlue};
  width: 100%;
  align-items: center;
  height: 58px;
  display: flex;
  flex-direction: row;
`;

// Profile
export const Imagem = styled.Image`
  width: 100px;
  height: 100px;
  border-color: ${theme.colors.gray};
  border-width: 1px;
  border-radius: 10px;
`;
export const TextMoves = styled.Text`
  font-size: 16px;
  background-color: ${theme.colors.primaryGray};
  color: ${theme.colors.black};
  font-weight: bold;
  padding: 5px;
  margin: 5px;
  border-radius: 5px;
`;










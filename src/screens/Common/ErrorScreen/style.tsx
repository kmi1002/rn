import styled from 'styled-components/native';
import { Global, colors } from '@styles/index';

export const Wrapper = styled(Global.ContainerCenterCenter)``;

export const Container = styled.View`
  padding: 0 37px 40px 38px;
`;

export const Title = styled.Text`
  font-size: 36px;
  color: ${colors.tmpText.grey};
  text-align: center;
  margin-top: 24px;
  margin-bottom: 13px;
`;

export const Description = styled.Text`
  font-family: Nunito;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.5px;
  color: ${colors.text.dark['100']};

  text-align: center;
`;

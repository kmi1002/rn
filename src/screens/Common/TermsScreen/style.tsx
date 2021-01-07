import styled from 'styled-components/native';
import { Global, colors } from '@styles/index';

export const Wrapper = styled.View``;

export const Header = styled.View`
  padding: 16px 20px;
  background: ${colors.background.grey['50']}; ;
`;

export const Tabs = styled(Global.ContainerHorizontal)``;

export const Body = styled.View`
  background: ${colors.input.white};
  border-radius: 6px;
  shadow-color: ${colors.status.default};
  shadow-offset: 0 0;
  shadow-opacity: 1;
  shadow-radius: 4px;
`;

export const ScrollView = styled.ScrollView`
  padding: 38px;
`;

export const Date = styled.Text`
  ${Global.Size16Bold};
  letter-spacing: 0.5px;
  color: ${colors.status.default};
  margin-bottom: 18px;
`;

export const Description = styled.Text`
  ${Global.Size16};

  line-height: 26px;
  color: #69686a;
`;

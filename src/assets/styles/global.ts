import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const ContainerStart = styled(Container)`
  align-items: flex-start;
`;

export const ContainerCenter = styled(Container)`
  align-items: center;
`;

export const ContainerBottom = styled(Container)`
  align-items: flex-end;
`;

export const ContainerCenterCenter = styled(ContainerCenter)`
  align-items: center;
  justify-content: center;
`;

export const ContainerHorizontal = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerVertical = styled(ContainerHorizontal)`
  flex-direction: column;
`;

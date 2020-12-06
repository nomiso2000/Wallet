import styled, { css } from 'styled-components';

const stylesDisplayFlexColumnCenterAll =
  'margin: auto; display: flex; justify-self: center; flex-direction: column; align-items: space-around; justify-content: space-around;';
const stylesDisplayFlexRow =
  'margin: 0; padding: 0; display: flex;  align-items: space-around; justify-content: space-around;';
const stylesTextArial16pxUppercase =
  "font-family: 'Arial'; text-align: center; font-size: 16px; text-transform: uppercase; text-justify: center; color: black;";
const stylesTextArial12px =
  "font-family: 'Arial'; text-align: center; font-size: 12px; color: white; font-weight: bold;";

const backgroundColor = css`
  background: ${props => props.theme.color};
`;
const StatisticsWrapper = styled.div`
  ${stylesDisplayFlexColumnCenterAll}
  ${stylesTextArial12px}
  width: 270px;
  height: 130px;
  border: 2px solid grey;
`;

const StatHeader = styled.h2`
  ${stylesTextArial16pxUppercase}

  margin:0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50%;
`;

const StatList = styled.ul`
  ${stylesDisplayFlexRow}
  height: 50%;
`;

const StatItem = styled.li`
  ${stylesDisplayFlexColumnCenterAll};
  ${backgroundColor}
  margin: 0;
  width: 20%;
`;
const StatLabel = styled.span``;
const StatPercentage = styled.span`
  font-size: 16px;
`;

export {
  StatisticsWrapper,
  StatHeader,
  StatList,
  StatItem,
  StatLabel,
  StatPercentage,
};

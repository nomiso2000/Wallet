import styled from 'styled-components';
// const stylesDisplayFlexColumnCenterAll = 'margin: auto; display: flex; justify-self: center; flex-direction: column; align-items: center; justify-content: center;'
// const stylesTextArial
const StyledProfileWrapper = styled.div`
  margin: auto;
  display: flex;
  justify-self: center;
  flex-direction: column;
  font-family: 'Arial';
  background-color: white;
  width: 250px;
  height: 330px;
  border: 2px solid grey;
  border-radius: 10px;
`;

const StyledProfileDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  height: 80%;
  justify-content: center;
`;

const StyledAvatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;

const StyledUserName = styled.p`
  font-size: 18px;
  color: rgb(18, 34, 54);
  font-weight: bold;
  margin: 0;
  padding: 15px;
`;

const StyledUserTag = styled(StyledUserName)`
  font-size: 14px;
  font-weight: normal;
  color: rgb(118, 134, 150);
  padding-top: 0;
`;

const StyledUserLocation = styled(StyledUserTag)``;

const StyledProfileStats = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  margin: 0;
  list-style-type: none;
  justify-content: space-around;
  background-color: #f3f6f9;
  height: 40%;
  border-radius: 0 0 10px 10px;
`;

const applyStyles = () => styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin: 0;
  width: 33%;
  height: 100%;
  border-left: 2px solid grey;
  border-right: 2px solid grey;
  border-top: 2px solid grey;
  list-style-type: none;
  justify-content: space-around;
  font-size: 12px;
  color: black;
`;

const StyledProfileViews = applyStyles();
const StyledProfileFollowers = styled(StyledProfileViews)`
  border-radius: 0 0 0 10px;
  border: 0;
  border-top: 2px solid grey;
`;
const StyledProfileLikes = styled(StyledProfileViews)`
  border-radius: 0 0 10px 0;
  border: 0;
  border-top: 2px solid grey;
`;
const statsQuantityTextSize = () => styled.span`
  font-size: 14px;
  font-weight: bold;
`;
const StyledStatsQuantity = statsQuantityTextSize();

export {
  StyledProfileWrapper,
  StyledProfileDescription,
  StyledAvatar,
  StyledUserName,
  StyledUserTag,
  StyledUserLocation,
  StyledProfileStats,
  StyledProfileFollowers,
  StyledProfileViews,
  StyledProfileLikes,
  StyledStatsQuantity,
};

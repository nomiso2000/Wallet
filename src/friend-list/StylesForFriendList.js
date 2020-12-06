import styled from 'styled-components';

const FriendListWrapper = styled.ul`
  list-style-type: none;
  width: 350px;
  margin: auto;
  padding-inline-start: 0;
`;

const FriendInfo = styled.li`
  margin: 10px;
  justify-self: center;
  display: flex;
  align-items: center;
  border: 2px grey solid;
  border-radius: 10px;
  height: 80px;
`;
const FriendStatus = styled.span`
  width: 16px;
  height: 16px;
  border-radius: 8px;
  margin: 20px;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;
const FriendAvatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 24px;
  margin: 10px;
`;
const FriendName = styled.p`
  font-family: 'Arial';
  font-size: 16px;
  margin: 10px;
`;

export {
  FriendListWrapper,
  FriendInfo,
  FriendAvatar,
  FriendStatus,
  FriendName,
};

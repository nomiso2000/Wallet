import React from 'react';
import PropTypes from 'prop-types';
import {
  FriendListWrapper,
  FriendInfo,
  FriendAvatar,
  FriendStatus,
  FriendName,
} from './StylesForFriendList';

const FriendList = ({ friends }) => {
  return (
    <FriendListWrapper className="friend-list">
      {friends.map(friend => (
        <FriendInfo key={friend.id} className="item">
          <FriendStatus isOnline={friend.isOnline}></FriendStatus>
          <FriendAvatar
            className="avatar"
            src={friend.avatar}
            alt={friend.name}
          />
          <FriendName className="name">{friend.name}</FriendName>
        </FriendInfo>
      ))}
    </FriendListWrapper>
  );
};
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string,
    }),
  ),
};

export default FriendList;

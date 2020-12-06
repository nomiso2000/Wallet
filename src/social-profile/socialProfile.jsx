import React from 'react';
import PropTypes from 'prop-types';
import {
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
} from './StylesForSocialProfile';

const Profile = ({ avatar, name, tag, location, stats }) => {
  // const Followers=stats.followers
  return (
    <StyledProfileWrapper className="profile">
      <StyledProfileDescription className="description">
        <StyledAvatar src={avatar} alt={name} className="avatar" />
        <StyledUserName className="name">{name}</StyledUserName>
        <StyledUserTag className="tag">@{tag}</StyledUserTag>
        <StyledUserLocation className="location">{location}</StyledUserLocation>
      </StyledProfileDescription>

      <StyledProfileStats className="stats">
        <StyledProfileFollowers>
          <span className="label">Followers</span>
          <StyledStatsQuantity className="quantity">
            {stats.followers || 0}
          </StyledStatsQuantity>
        </StyledProfileFollowers>
        <StyledProfileViews>
          <span className="label">Views</span>
          <StyledStatsQuantity className="quantity">
            {stats.views || 0}
          </StyledStatsQuantity>
        </StyledProfileViews>
        <StyledProfileLikes>
          <span className="label">Likes</span>
          <StyledStatsQuantity className="quantity">
            {stats.likes || 0}
          </StyledStatsQuantity>
        </StyledProfileLikes>
      </StyledProfileStats>
    </StyledProfileWrapper>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
Profile.defaultProps = {
  avatar: 'https://dummyimage.com/100x100/0e6ec7/fff.png&text=No+Avatar',
  Followers: 0,
  stats: { followers: 0, views: 0, likes: 0 },
};

export default Profile;

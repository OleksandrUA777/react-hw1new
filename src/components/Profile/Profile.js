import {
  Desc,
  Image,
  Label,
  Quantity,
  Stat,
  Stats,
  Wrapper,
} from './Profile.styled';
import PropTypes from 'prop-types';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <Wrapper className="profile">
      <Desc className="description">
        <Image src={avatar} alt="User avatar" className="avatar" />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </Desc>

      <Stats className="stats">
        <Stat>
          <Label className="label">Followers</Label>
          <Quantity className="quantity">{followers}</Quantity>
        </Stat>
        <Stat>
          <Label className="label">Views</Label>
          <Quantity className="quantity">{views}</Quantity>
        </Stat>
        <Stat>
          <Label className="label">Likes</Label>
          <Quantity className="quantity">{likes}</Quantity>
        </Stat>
      </Stats>
    </Wrapper>
  );
};
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

import PropTypes from 'prop-types';
import { Friend } from 'components/Friend/Friend';
import { FriendsList } from './FriendsList.styled';
import {FriendsListItem} from './FriendsListItem.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendsList>
      {friends.map(friend => {
				return (
					<FriendsListItem key={friend.id}>
            <Friend person={friend} />
          </FriendsListItem>
        );
      })}
    </FriendsList>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

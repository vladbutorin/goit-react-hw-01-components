import { List, Item, Status, Avatar, Name } from './Friends.styled';

export const FriendList = ({ friends }) => {
  return (
    <div>
      <List>
        {friends.map(({ avatar, name, isOnline, id }) => (
          <Item key={id}>
            <Status isOnline={isOnline} />
            <Avatar src={avatar} alt={name} />
            <Name>{name}</Name>
          </Item>
        ))}
      </List>
    </div>
  );
};

export default FriendList;

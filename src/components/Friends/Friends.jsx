import { List, Item, Status, Avatar, Name } from './Friends.styled';

const Friend = ({ avatar, name, isOnline, id }) => (
  <Item key={id}>
    <Status isOnline={isOnline} />
    <Avatar src={avatar} alt={name} />
    <Name>{name}</Name>
  </Item>
);

export const FriendList = ({ friends }) => {
  return (
    <div>
      <List>
        {friends.map(({ avatar, name, isOnline, id }) => (
          <Friend
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
            id={id}
          />
        ))}
      </List>
    </div>
  );
};

export default FriendList;

import { Link } from 'react-router-native';
import Tab from './Tab';
import SignOut from '../User/SignOut';

const AppTab = ({ path, activeStyle, text }) => {
  if (text === 'Sign Out') {
    return <SignOut />;
  }
  return (
    <Link to={path} activeStyle={activeStyle}>
      <Tab text={text} />
    </Link>
  );
};

export default AppTab;

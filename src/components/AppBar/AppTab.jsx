import { Link } from 'react-router-native';
import { View } from 'react-native';
import Tab from './Tab';
import SignOut from '../User/SignOut';
import styles from '../../styles';

const AppTab = ({ path, activeStyle, text }) => {
  if (text === 'Sign Out') {
    return <SignOut />;
  }
  return (
    <View style={styles.tab}>
      <Link to={path} activeStyle={activeStyle}>
        <Tab style={styles.tab} text={text} />
      </Link>
    </View>
  );
};

export default AppTab;

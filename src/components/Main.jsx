import { useState } from 'react';
import { View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';
import AppBar from './AppBar/AppBar';
import NotificationModal from './Modal/Modal';
import RepositoryList from './RepositoryList';
import styles from '../styles';
import SignIn from './User/SignIn/SignIn';
import SignOut from './User/SignOut';
import SingleRepo from './RepositoryItem/SingleRepo';
import NewReview from './RepositoryItem/Reviews/NewReview';
import SignUp from './User/SignUp/SignUp';

const Main = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [message, setMessage] = useState('');

  return (
    <View style={styles.mainContainer}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} exact />
        <Route path="/signin" element={<SignIn message={message} setMessage={setMessage} modalVisible={modalVisible} setModalVisible={setModalVisible} />} exact />
        <Route path="/signout" element={<SignOut />} exact />
        <Route path="/signup" element={<SignUp />} exact />
        <Route path="/:id" element={<SingleRepo />} exact />
        <Route path="/review" element={<NewReview message={message} setMessage={setMessage} modalVisible={modalVisible} setModalVisible={setModalVisible} />} exact />
        <Route path="*" element={<Navigate to='/' replace />} />
      </Routes>
      <NotificationModal message={message} modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </View>
  );
};

export default Main;

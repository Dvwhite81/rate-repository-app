import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import ReviewForm from './ReviewForm';
import { ReviewSchema } from '../../../validation';
import useCreateReview from '../../../hooks/useCreateReview';

const initialValues = {
  ownerName: '',
  repositoryName: '',
  rating: '',
  text: ''
};

export const NewReviewContainer = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ReviewSchema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

const NewReview = ({ setMessage, setModalVisible }) => {
  const [createReview] = useCreateReview();
  const navigate = useNavigate();

  const sendMessage = (newMessage) => {
    setMessage(newMessage);
    setModalVisible(true);
    setTimeout(() => {
      setMessage('');
      setModalVisible(false);
    }, 5000);
  };

  const onSubmit = async (values) =>{
    const { ownerName, repositoryName, rating, text } = values;

    try {
      const data = await createReview({ ownerName, repositoryName, rating: parseInt(rating), text });
      navigate(`/${data.createReview.repositoryId}`);
      sendMessage('Submitted a review!');
    } catch (e) {
      console.log(e);
      sendMessage(e.message);
    }
  };

  return (
    <NewReviewContainer onSubmit={onSubmit} />
  );
};

export default NewReview;

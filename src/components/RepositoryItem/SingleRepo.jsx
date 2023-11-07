import useRepo from '../../hooks/useRepo';
import RepositoryItem from './RepositoryItem';
import styles from '../../styles';

const SingleRepo = () => {
  const { repo } = useRepo();
  const details = repo ? repo : {};
  console.log('repo:', repo);
  console.log('details:', details);

  return (<RepositoryItem item={details} />)
};

export default SingleRepo;

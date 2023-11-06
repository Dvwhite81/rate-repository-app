import { TextInput as NativeTextInput } from 'react-native';
import styles from '../../styles';

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [
    style,
    error && styles.errorText,
    error && styles.errorBorder
  ];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;

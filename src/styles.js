import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import theme from './theme';

const buttonStyle = {
  backgroundColor: theme.colors.primary,
  borderRadius: 5,
  color: theme.colors.white,
  padding: 5,
  textAlign: 'center',
};

const styles = StyleSheet.create({
  // Text and colors
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  colorTextSecondary: {
    color: theme.colors.textSecondary,
  },
  colorWhite: {
    color: theme.colors.white,
  },
  colorGray: {
    color: theme.colors.gray,
  },
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading,
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  },
  centerText: {
    textAlign: 'center'
  },
  heading: {
    fontSize: theme.fontSizes.subheading,
    fontWeight: 'bold',
  },
  textWrap : {
    flexWrap: 'wrap',
    width: '80vw',
  },
  fullWidth: {
    width: '100%',
  },
  // Containers, rows, columns
  mainContainer: {
    flexGrow: 1,
    flexShrink: 1,
  },
  appBarContainer: {
    flexDirection: 'row',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.bg,
    padding: 20
  },
  card: {
    borderBottomColor: 'gray',
    borderBottomWidth: 10,
    display: 'flex',
    flexDirection: 'column',
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: '100%'
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  flexCol: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: 3
  },
  infoRow: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 5,
    width: '100%',
  },
  statsRow: {
    justifyContent: 'space-between',
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
    width: '90%'
  },
  imageCol: {
    width: '15%',
  },
  infoCol: {
    rowGap: 2,
    width: '85%',
  },
  // Other elements - img, button, separator
  img: {
    borderRadius: 5,
    height: 60,
    marginTop: 8,
    marginLeft: 8,
    width: 60,
  },
  languageButton: {
    ...buttonStyle,
  },
  submitButton: {
    ...buttonStyle,
    marginTop: 5,
    padding: 10,
  },
  separator: {
    height: 10,
  },
  tab: {
    marginRight: 10,
    marginVertical: 'auto'
  },
  repoLink: {
    marginHorizontal: 'auto',
    width: '90%'
  },
  // Form, inputs
  form: {
    alignItems: 'center',
    display: 'flex',
    width: '100%',
  },
  textInput: {
    borderColor: theme.colors.gray,
    borderRadius: 5,
    borderWidth: 1,
    margin: 5,
    padding: 5,
    width: '90%'
  },
  // Error
  errorText: {
    color: theme.colors.error,
    marginTop: 5,
  },
  errorBorder: {
    borderColor: theme.colors.error,
  },
});

export default styles;

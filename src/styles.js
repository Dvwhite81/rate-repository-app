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

const headingStyle= {
  fontSize: theme.fontSizes.subheading,
  fontWeight: 'bold',
};

const reviewButtonStyle = {
  ...buttonStyle,
  padding: 15,
  textAlign: 'center',
  width: '45%'
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
    ...headingStyle,
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
    alignContent: 'center',
    backgroundColor: theme.colors.bg,
    flexDirection: 'row',
    height: '15vh',
    paddingVertical: Constants.statusBarHeight,
  },
  scrollViewStyle: {
    justifyContent: 'space-evenly',
    minWidth: '100%',
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
    width: '20%',
  },
  infoCol: {
    rowGap: 2,
    width: '80%',
  },
  // Other elements - img, button, separator
  img: {
    borderRadius: 5,
    height: 50,
    marginTop: 8,
    marginLeft: 8,
    width: 50,
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
    alignSelf: 'center',
    color: 'white',
    marginHorizontal: 30,
    marginVertical: 'auto',
  },
  repoLink: {
    alignSelf: 'center',
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
  //Reviews
  reviewCircle: {
    borderColor: theme.colors.primary,
    borderRadius: 50,
    borderStyle: 'solid',
    borderWidth: 2,
    color: theme.colors.primary,
    display: 'flex',
    fontSize: 18,
    fontWeight: 'bold',
    height: 50,
    margin: 5,
    textAlign: 'center',
    verticalAlign: 'middle',
    width: 50
  },
  reviewButtons: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    width: '100vw',
  },
  viewButton: {
    ...reviewButtonStyle,
  },
  deleteButton: {
    ...reviewButtonStyle,
    backgroundColor: 'crimson',
  },
  reviewBtnText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  // Error
  errorText: {
    color: theme.colors.error,
    marginTop: 5,
  },
  errorBorder: {
    borderColor: theme.colors.error,
  },
  // Modal
  centeredView: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  modalView: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    elevation: 5,
    margin: 20,
    padding: 35,
    boxShadowColor: '#000',
    boxShadowOffset: {
      height: 2,
      width: 0,
    },
    boxShadowOpacity: 0.25,
    boxShadowRadius: 4,
  },
  modalButton: {
    borderRadius: 20,
    elevation: 2,
    padding: 10,
  },
  modalButtonOpen: {
    backgroundColor: '#F194FF',
  },
  modalButtonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  // Picker
  pickerStyles: {
    alignItems: 'center',
    backgroundColor: 'lightgray',
    elevation: 5,
    flex: 1,
    fontSize: 20,
    height: 'auto',
    justifyContent: 'center',
    marginHorizontal: 'auto',
    textAlign: 'center',
    width: '100%',
  },
  pickerContainer: {
    flex: 1,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pickerSearch: {
    backgroundColor: 'white',
    borderRadius: 5,
    fontSize: 20,
    padding: 5,
    width: '80%',
  },
});

export default styles;

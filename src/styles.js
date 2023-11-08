import { StyleSheet } from 'react-native';
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
    backgroundColor: theme.colors.bg,
    flexDirection: 'row',
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
    marginRight: 10,
    marginVertical: 'auto'
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
    textAlignVertical: 'center',
    width: 50
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
});

export default styles;

import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import theme from './theme';

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
    marginRight: 20,
    width: 50,
  },
  button: {
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    color: theme.colors.white,
    padding: 5,
    textAlign: 'center',
    width: 'min-content',
  },
  separator: {
    height: 10,
  },
  tab: {
    marginRight: 10,
    marginVertical: 'auto'
  },
});

export default styles;

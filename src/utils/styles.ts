import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import { ButtonVariant, ColorPallet } from '@utils/helper.ts';

export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pagePadding: {
    padding: 12,
  },
  paddingVertical:{
    paddingVertical:16,
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: '#d32f2f',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    paddingHorizontal: 16,
  },
  boldText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  button: {
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#c4c4c4',
  },
  bottomMargin: {
    marginBottom:60
  }
});

export const cartSnackbarStyles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 24,
    left: 16,
    right: 16,
    backgroundColor: '#323232',
    borderRadius: 8,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 6,
  },
  text: {
    color: '#fff',
    fontSize: 14,
  },
  button: {
    marginLeft: 12,
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#ffffff22',
    borderRadius: 6,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
});

export const productCardStyles = StyleSheet.create({
  card: {
    padding: 12,
    backgroundColor: '#fff',
    margin: 8,
    borderRadius: 10,
    elevation: 2,
  },
  imageWrapper: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 160,
    borderRadius: 6,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  outOfStockText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 8,
  },
  price: {
    fontSize: 14,
    color: 'green',
    marginBottom: 4,
  },
  description: {
    fontSize: 12,
    color: '#555',
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  button: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#ccc',
    marginHorizontal: 8,
  },
  qty: {
    fontSize: 16,
    minWidth: 20,
    textAlign: 'center',
  },
});

export const cardStyles = StyleSheet.create({
  container: { borderRadius: 8 },
  headerContainer: {
    paddingVertical: 12,
    paddingHorizontal: 8,
    flexDirection: 'row',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    overflow: 'hidden',
  },
  body: {
    borderBottomStartRadius: 8,
    borderBottomEndRadius: 8,
    overflow: 'hidden',
  },
});

export const cartScreenStyles = StyleSheet.create({
  cardWrapper: {
    paddingVertical: 8,
  },
});

export const buttonStyles: { [K in ButtonVariant]: ViewStyle } =
  StyleSheet.create({
    primary: {
      backgroundColor: ColorPallet.darkGreen,
      marginBottom: 24,
      padding: 20,
    },
    secondary:{
      paddingHorizontal: 4,
    },
    outlined: {
      backgroundColor: ColorPallet.white,
      paddingHorizontal: 12,
      paddingVertical: 6,
      borderRadius: 6,
      borderWidth: 1,
      borderColor: '#ccc',
      marginHorizontal: 8,
    },
    icon:{
    },

  });

export const buttonTextStyles: { [K in ButtonVariant]: TextStyle } =
  StyleSheet.create({
    primary: {
      color: ColorPallet.white,
      ...commonStyles.boldText,
    },
    outlined: {
      color: ColorPallet.black,
    },
    icon:{
    },
    secondary:{
      ...commonStyles.boldText,
    }
  });

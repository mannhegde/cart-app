import { StyleSheet } from 'react-native';
import { colors, fontSizes, spacings } from '@utils/theme';

export const commonStyles = StyleSheet.create({
  container: { flex: 1 },
  page: {
    flex: 1,
    paddingHorizontal: spacings.large,
    paddingVertical: spacings.large,
  },
  horizontalPagePadding: { paddingHorizontal: spacings.large },
  verticalPagePadding: { paddingVertical: spacings.large },
  verticalPaddingMedium: { paddingVertical: spacings.medium },

  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: colors.mediumRed,
    fontSize: fontSizes.large,
    fontWeight: '500',
    textAlign: 'center',
    paddingHorizontal: spacings.large,
  },
  boldText: {
    fontSize: fontSizes.medium,
    fontWeight: 'bold',
  },
  button: {
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: colors.grey,
  },
  bottomMarginXXXLarge: {
    marginBottom: spacings.xxxlarge,
  },
  bottomMarginXLarge: {
    marginBottom: spacings.xlarge,
  },
});

import {Platform} from 'react-native';

export const smallest = 12;
export const smaller = 14;
export const small = 16;
export const normal = 18;
export const large = 20;
export const larger = 22;
export const largest = 24;
export const XLarge = 35;

// APP FONT FAMILY
export const appFontRegular = Platform.select({
  ios: 'SFProRounded-Regular',
  android: 'SF-Pro-Rounded-Regular',
});
export const appFontBold = Platform.select({
  ios: 'SFProRounded-Bold',
  android: 'SF-Pro-Rounded-Bold',
});

export const appFontSemiBold = Platform.select({
  ios: 'SFProRounded-SemiBold',
  android: 'SF-Pro-Rounded-Semibold',
});

export const appFontItalic = Platform.select({
  ios: 'SFProRounded-Bold',
  android: 'SF-Pro-Rounded-Bold',
});
export const appFontBoldItalic = Platform.select({
  ios: 'SFProRounded-Bold',
  android: 'SF-Pro-Rounded-Bold',
});

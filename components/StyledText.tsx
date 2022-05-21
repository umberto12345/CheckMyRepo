import { Text, TextProps } from 'react-native';

export function MonoText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'space-mono' }]} />;
}

export function SansText(props?: TextProps) {
  return <Text {...props} style={[props?.style, { fontFamily: 'open-sans' }]} />;
}

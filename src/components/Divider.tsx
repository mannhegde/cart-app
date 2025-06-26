import React from 'react';
import { View } from 'react-native';

const Divider: React.FC<{ height?: number }> = ({ height = 2 }) => (
  <View style={{ width: '100%', height }} />
);
export default Divider;

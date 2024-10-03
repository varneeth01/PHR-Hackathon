import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import scanService from '../services/scanService';

const ScanShare = () => {
  const [scanned, setScanned] = useState(false);
  const [token, setToken] = useState('');

  const handleBarCodeScanned = async ({ type, data }) => {
    setScanned(true);
    const response = await scanService.generateToken(data);
    if (response.success) {
      setToken(response.token);
    }
  };

  return (
    <View>
      <BarCodeScanner onBarCodeScanned={scanned ? undefined : handleBarCodeScanned} />
      {scanned && <Button title="Tap to Scan Again" onPress={() => setScanned(false)} />}
      {token && <Text>Token: {token}</Text>}
    </View>
  );
};

export default ScanShare;

import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';

export default function ServicesCard({ item }) { // Accept item as a prop
  return (
    <View style={styles.outerContainer}>
      <Text style={styles.recentSearch}>{item.title}</Text> 
      <Image source={item.image} style={styles.servicesImg} />
    </View>
  );
}

const styles = StyleSheet.create({
  servicesImg: {
    width: "100%",
    height: 130,
  },
  recentSearch: {
    fontSize: 13,
    marginBottom: 8,
    color: "#000000",
  },
  outerContainer: {
    backgroundColor: "#fff",
    marginLeft: 8,
    width: 140,
    padding: 5,
    borderRadius: 5,
  },
});

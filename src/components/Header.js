import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header  = () => {
  return (
      <View style={styles.headerContainer}>
          <Text style={styles.headerText}>
              Cryptocurrencies
          </Text>
      </View>
  );
};

const styles = StyleSheet.create({
    headerContainer: {
        display: 'flex',
        marginTop:24,
        alignItems:'center',
        borderTopWidth: 1,
        borderBottomWidth: 1
    },

    headerText: {
        fontWeight: 'bold',
        fontSize: 24,
    }
});

export default Header;
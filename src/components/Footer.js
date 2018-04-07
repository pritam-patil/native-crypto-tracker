import React, { Component } from 'react';
import { Linking, Text, View, StyleSheet } from 'react-native';
import {
  DEVELOPER_URL,
  SOURCE_WEBSITE_URL
} from '../utils/constants';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        marginBottom: 50,
        alignItems:'center',
    },
    text: {
        fontSize: 14,
    },

    dev: {
        color: '#0000ff'
    }
});

const Footer = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}> {"The data shown here is provided by "}
                <Text style={styles.dev} onPress={() => Linking.openURL(SOURCE_WEBSITE_URL)}>
                    coinmarketcap.com
                </Text>
            </Text>
            <Text
                style={[styles.text]}
                onPress={() => Linking.openURL(DEVELOPER_URL)}
            > Developed with love by
                <Text style={styles.dev}> PP </Text>
            </Text>
        </View>
    );
};

export default Footer;
import React from 'react';
import { Button, Image, Linking, StyleSheet, Text, View } from 'react-native';
import { SOURCE_WEBSITE_URL } from '../utils/constants';
import { images } from '../utils/images';
import { round, readableNumber } from '../utils/MathUtil';

const styles = StyleSheet.create({
    container: {
        display: "flex",
        marginBottom: 10,
        borderBottomColor: "#e5e5e5",
        borderBottomWidth: 3,
        padding: 20
    },
    upperRow: {
        display: "flex",
        flexDirection: "row",
        marginBottom: 15
    },
    coinSymbol: {
        marginTop: 10,
        marginLeft: 20,
        marginRight: 5,
        fontWeight: "bold",
    },
    coinName: {
        marginTop: 10,
        marginLeft: 5,
        marginRight: 20
    },
    seperator: {
        marginTop: 10,
    },
    coinPrice: {
        marginTop: 10,
        marginLeft: "auto",
        marginRight: 10,
        fontWeight: "bold",
    },
    image: {
        width: 40,
        height: 40
    },
    statisticsContainer: {
        display: "flex",
        borderTopColor: "#FAFAFA",
        borderTopWidth: 2,
        marginLeft: 40,
        flexDirection: "row",
        justifyContent: "space-around"
    },
    percentChangePlus: {
        color: "#00BFA5",
        fontWeight: "bold",
        marginLeft: 5
    },
    percentChangeMinus: {
        color: "#DD2C00",
        fontWeight: "bold",
        marginLeft: 5
    },
    learnMore: {
        color: '#0000FF'
    }
});

const {
    coinName,
    coinSymbol,
    coinPrice,
    container,
    image,
    learnMore,
    moneySymbol,
    percentChangePlus,
    percentChangeMinus,
    seperator,
    statisticsContainer,
    upperRow
} = styles;

const CoinCard = ({ symbol, coin_name, price_inr, percent_change_24h, percent_change_7d }) => {
    return (
        <View style={container}>
            <View style={upperRow}>
                <Image
                    style={image}
                    source={{ uri: images[symbol] }}
                />
                <Text style={coinSymbol}>{symbol}</Text>
                <Text style={seperator}>|</Text>
                <Text style={coinName}>{coin_name}</Text>
                <Text style={coinPrice}>{ readableNumber(round(price_inr)) }
                    <Text style={moneySymbol}>  &#8377; </Text>
                </Text>
            </View>

            <View style={statisticsContainer}>
                <Text>24h:
                    <Text style={percent_change_24h < 0 ? percentChangeMinus : percentChangePlus }> {percent_change_24h} % </Text>
                </Text>
                <Text>7d:
                    <Text style={percent_change_7d < 0 ? percentChangeMinus : percentChangePlus }> {percent_change_7d} % </Text>
                </Text>
                <Text style={learnMore} onPress={ ()=> Linking.openURL(`${SOURCE_WEBSITE_URL}/currencies/${coin_name}`) }>
                    Learn More
                </Text>
            </View>

        </View>
    );
};

export default CoinCard;
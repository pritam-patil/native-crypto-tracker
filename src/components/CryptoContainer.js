import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { bindActionCreators } from 'redux';
import * as Actions from './../actions';
import CoinCard from './coinCard';
import { Footer } from '../components';

class CryptoContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount() {
        this.props.getData();
    }

    renderCoinCards() {
        const { data } = this.props;

        return data.map((coin) =>
            <CoinCard
                key={coin.name}
                coin_name={coin.name}
                symbol={coin.symbol}
                price_inr={coin.price_inr}
                percent_change_24h={coin.percent_change_24h}
                percent_change_7d={coin.percent_change_7d}
            />
        )
    }


    render() {
        const { isFetching } = this.props;
        const { contentContainer } = styles;

        if (isFetching) {
            return (
                <View>
                    <Spinner
                        visible={isFetching}
                        textContent={"Loading..."}
                        textStyle={{color: '#253145'}}
                        animation="fade"
                    />
                </View>
            )
        }

        return (
            <ScrollView contentContainerStyle={contentContainer}>
                {this.renderCoinCards()}
                <Footer />
            </ScrollView>
        )


    }
}

const styles = {
    contentContainer: {
        paddingBottom: 100,
        paddingTop: 55
    }
};

function mapStateToProps(state, props) {
    return {
        isFetching: state.dataReducer.isFetching,
        data: state.dataReducer.data,
        hasError: state.dataReducer.hasError,
        errorMessage: state.dataReducer.errorMessage
    }
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators(Actions , dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CryptoContainer);
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Flex } from 'grid-styled';
import styled from 'styled-components';
import { withRouter } from "react-router-dom";
import Header from './Header';
import {resetQuote} from '../actions/GetQuoteActions';

const ShowQuoteWrapper = styled(Flex)`
    flex-direction: column;
    font-family: arial;
    width: 60%;
    padding: 50px 0 0 50px;
`;

const FlexRow = styled(Flex)`
    display: flex;
    padding: 20px 20px 0 20px;
    justify-content: center;
`;

const FlexRowLeftAlign = styled(Flex)`
    display: flex;
    padding: 20px 20px 0 20px;
    justify-content: left;
`;

const ShowQuoteForm = styled(Flex)`
    flex-direction: column;
    background: #f7f7f7;
    align-items: center;
    padding-bottom: 30px;
`;
const InternalContainer = styled.div`
    width: 34%;
`;

const SubmitButton = styled.button`
    width: 202px;
    text-align: center;
    -webkit-appearance: none;
    height: 39px;
    border-radius: 35px;
    background: #2864A0;
    color: #fff;
    font-size: 13px;
    margin-top: 25px;
`;

const ShowQuoteLabel1 = styled.div`
    font-size: 24px;
    font-family: arial;
    color: #595859;
`;

const ShowQuoteLabel2 = styled.div`
    font-size: 24px;
    font-family: arial;
    color: #595859;
`;

const ShowQuoteLabel3 = styled.div`
    font-size: 24px;
    font-family: arial;
    color: #595859;
`;

const ShowQuoteValue1 = styled.div`
    color: #4FA384;
    font-size: 25px;
    font-weight: 500;
`;

const CurrencyType = styled.div`
    font-size: 25px;
    font-family: arial;
    color: #595859;
    font-weight: 600;
`;
const CurrencyAmount = styled.div`
    font-size: 24px;
    font-family: arial;
    margin-left: 15px;
    color: #2864A0;
`;

class ShowQuote extends React.Component {

    onNewQuote = () => {
        const {
            resetQuote,
            history
        } = this.props;
        resetQuote();
        history.replace("/");
    }

    render() {
        const {
            quote
        } = this.props;

        const {
            quoteRateData: {
                fromAmount,
                fromCurrency
            }
        } = quote;

        const {
            data: {
                CustomerRate,
                CustomerAmount,
                DeliveryCountry
            }
        } = quote.quoteRateData;
       
      
        return (
            <ShowQuoteWrapper>
                <Header/>
                <ShowQuoteForm>
                    <InternalContainer>
                        <FlexRowLeftAlign>
                            <ShowQuoteLabel1>OFX Customer Rate</ShowQuoteLabel1>
                        </FlexRowLeftAlign>
                        <FlexRow>
                            <ShowQuoteValue1>{CustomerRate}</ShowQuoteValue1>
                        </FlexRow>
                        <FlexRowLeftAlign>
                            <ShowQuoteLabel2>From</ShowQuoteLabel2>
                        </FlexRowLeftAlign>
                        <FlexRowLeftAlign>
                            <CurrencyType>{fromCurrency}</CurrencyType>
                            <CurrencyAmount>{fromAmount}</CurrencyAmount>
                        </FlexRowLeftAlign>
                        <FlexRowLeftAlign>
                            <ShowQuoteLabel3>To</ShowQuoteLabel3>
                        </FlexRowLeftAlign>
                        <FlexRowLeftAlign>
                            <CurrencyType>{DeliveryCountry}</CurrencyType>
                            <CurrencyAmount>{CustomerAmount}</CurrencyAmount>
                        </FlexRowLeftAlign>
                        <FlexRow>
                            <SubmitButton onClick={this.onNewQuote}>START NEW QUOTE</SubmitButton>
                        </FlexRow>
                    </InternalContainer>
                </ShowQuoteForm>
            </ShowQuoteWrapper>
        );
    }
}

function mapStateToProps(state) {
    return {
        quote: state.quoteRateData
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        resetQuote
    }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ShowQuote));
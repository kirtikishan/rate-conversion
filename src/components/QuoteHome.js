import React from 'react';
import {connect} from 'react-redux';
import Loading from './Loading';
import GetQuote from './GetQuote';
import { withRouter } from "react-router-dom";
import Header from './Header';
import styled from 'styled-components';

const HomeWrapper = styled.div`
    display: flex;
    width: 60%;
    padding: 50px 0 0 50px;
    flex-direction: column;
`;

class QuoteHome extends React.Component {

    render() {
        const {
            quote,
            history
        } = this.props;
        
        if(quote && quote.quoteRateData) {
            history.push('/showquote');
        } 
        return (
           <HomeWrapper>
                <Header/>
                {quote.isLoading ? <Loading/> : <GetQuote/>}
           </HomeWrapper>
        );
    }
}

function mapStateToProps(state) {
    return {
        quote: state.quoteRateData
    }
}

export default withRouter(connect(mapStateToProps, null)(QuoteHome));
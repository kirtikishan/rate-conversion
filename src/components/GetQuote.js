import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getQuote, showLoader} from '../actions/GetQuoteActions';
import { Flex, Box } from 'grid-styled';
import styled from 'styled-components';
import { validate } from '@babel/types';


const GetQuoteWrapper = styled(Flex)`
  flex-direction: column;
  background: #f7f7f7;
  font-family: arial;
`;

const FormWrapper = styled.form`
    display: block;
    padding: 25px;
`;

const FormRow = styled(Box)`
    display: flex;
    padding: 20px 20px 0 20px;
    justify-content: center;
`;

const FormItem = styled(Flex)`
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    width: 100%;
`;

const FormLabelWrap = styled(Flex)`
    display: flex;
    font-size: 14px;
    color: #656565;
    margin-bottom: 10px;
`;

const Required = styled.span`
    margin-left: 5px;
    color: red;
`;

const FormInput = styled.input`
    height: 30px;
    border: none;
    border: solid 1px #ccc;
    border-radius: 4px;
    padding-left: 6px;
`;

const MobileNumber = styled.input`
    height: 30px;
    border: none;
    border: solid 1px #ccc;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    width: 100%;
`;

const MobileWrap = styled(Flex)`
    flex-direction: row;
`;
const StyledSelect = styled.select`
    margin-top: 15px;
    background-color: #efebeb;
    border: thin grey blue;
    border-top-left-radius: 4px;
    border-top-right-radius: 0;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 0;
    display: inline-block;
    font: arial;
    line-height: 1.8em;
    padding: 0.5em 3.5em 0.5em 1em;

    /* reset */

    margin: 0;      
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: none;
    background-image:
    linear-gradient(45deg, transparent 50%, #5dc5ec 50%),
    linear-gradient(135deg, #5dc5ec 50%, transparent 50%),
    linear-gradient(to right, #ccc, #ccc);
    background-position:
    calc(100% - 20px) calc(1em + 2px),
    calc(100% - 15px) calc(1em + 2px),
    calc(100% - 2.5em) 0.7em;
    background-size:
    5px 5px,
    5px 5px,
    1px 1.5em;
    background-repeat: no-repeat;
`;

const AmountInput = styled.input`
    height: 30px;
    border: none;
    border: solid 1px #ccc;
    border-radius: 4px;
    width: 300px;
    padding-left: 6px;
`;

const SubmitButton = styled.input`
    width: 175px;
    text-align: center;
    -webkit-appearance: none;
    height: 39px;
    border-radius: 35px;
    background: #2864A0;
    color: #fff;
    font-size: 16px;
    margin-top: 25px;
`;

class GetQuote extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName:"",
            lastName: "",
            email: "",
            mobile: "",
            fromCurrency: "AUD",
            toCurrency: "USD",
            amount: "",
            firstNameIsValid: true,
            lastNameIsValid: true,
            amountIsValid: true
        }
        this.validate = this.validate.bind(this);
    }

    validate () {
        const {
            firstName,
            lastName,
            amount,
            fromCurrency,
            toCurrency
        } = this.state;
        this.setState({
            firstNameIsValid: firstName === '' ? false : true,
            lastNameIsValid: lastName === '' ? false : true,
            amountIsValid: amount === '' ? false : true,
        });
        if(firstName === '' || lastName === '' || amount === '') {
            return false;
        }

        if(fromCurrency === toCurrency){
            alert('select different currencies');
            return false;
        }

        return true;
    }

    onSubmit = e => {
        e.preventDefault();
        const {
            getQuote,
            showLoader
        } = this.props;

        const {
            fromCurrency, 
            toCurrency, 
            amount
        } = this.state;
        if(this.validate()){
            showLoader();
            getQuote(fromCurrency, toCurrency, amount);
        }
    };

    onCurrencyChange = e => {
        debugger;
        if(e && e.target.id){
            this.setState({
                [e.target.id]:e.target.value
            });
        }
    }

    onInputChangeHandler = e => {
        if(e && e.target.id){
            this.setState({
                [e.target.id]:e.target.value
            });
        }
    }

    render() {
        const {
            firstName, 
            lastName, 
            email, 
            mobile, 
            fromCurrency, 
            toCurrency, 
            amount,
            amountIsValid,
            firstNameIsValid,
            lastNameIsValid
        } = this.state;
        return (
            <GetQuoteWrapper>
                 <FormWrapper noValidate>
                    <FormRow>
                        <FormItem>
                            <FormLabelWrap>
                                <label htmlFor="firstName">First Name</label> <Required className="required">*</Required>
                            </FormLabelWrap>
                                <FormInput type="text" id="firstName" required="required" 
                                placeholder="FirstName" value={firstName} onChange={this.onInputChangeHandler}
                                className={firstNameIsValid ? 'is-valid': 'no-valid'}></FormInput>
                        </FormItem>
                        <FormItem>
                            <FormLabelWrap>
                                <label htmlFor="lastName">Last Name</label> <Required className="required">*</Required>
                            </FormLabelWrap>
                                <FormInput type="text" id="lastName" required="required" placeholder="LastName" 
                                value={lastName} onChange={this.onInputChangeHandler}
                                className={lastNameIsValid ? 'is-valid': 'no-valid'}></FormInput>
                        </FormItem>
                    </FormRow>

                    <FormRow>
                        <FormItem>
                            <FormLabelWrap>
                                <label htmlFor="email">Email</label>
                            </FormLabelWrap>
                                <FormInput type="text" id="email" placeholder="Email" value={email} onChange={this.onInputChangeHandler}></FormInput>
                        </FormItem>
                    </FormRow>

                    <FormRow>
                        <FormItem>
                            <FormLabelWrap>
                                <label htmlFor="mobile">Telephone/ Mobile</label>
                            </FormLabelWrap>
                            <MobileWrap>
                                <StyledSelect type="select" style={{width:'75px'}}>
                                    <option value="aus">+61</option>
                                    <option value="usa">+01</option>
                                </StyledSelect>
                                <MobileNumber type="text" placeholder="Mobile Number" id="mobile" value={mobile} onChange={this.onInputChangeHandler}>

                                </MobileNumber>
                            </MobileWrap>
                        </FormItem>
                    </FormRow>

                    <FormRow>
                        <FormItem>
                            <FormLabelWrap>
                                <label htmlFor="fromCurrency">From Currency</label> <Required className="required">*</Required>
                            </FormLabelWrap>
                            <StyledSelect type="select" style={{borderRadius: '4px'}} id="fromCurrency" onChange={this.onCurrencyChange} value={fromCurrency}>
                                    <option value="AUD">Australian Dollar(AUD)</option>
                                    <option value="USD">Unites States Dollar(USD)</option>
                                    <option value="GBP">United Kingdom</option>
                                </StyledSelect>
                        </FormItem>
                        <FormItem>
                            <FormLabelWrap>
                                <label htmlFor="toCurrency">To Currency</label> <Required className="required">*</Required>
                            </FormLabelWrap>
                            <StyledSelect type="select" style={{borderRadius: '4px'}} id="toCurrency" onChange={this.onCurrencyChange} value={toCurrency}>
                                    <option value="AUD">Australian Dollar(AUD)</option>
                                    <option value="USD">Unites States Dollar(USD)</option>
                                    <option value="GBP">United Kingdom</option>
                                </StyledSelect>
                        </FormItem>
                    </FormRow>
                    

                    <FormRow>
                        <FormItem>
                            <FormLabelWrap>
                                <label htmlFor="amount">Amount</label> <Required className="required">*</Required>
                            </FormLabelWrap>
                            <AmountInput type="text" id="amount" required="required" value={amount} onChange={this.onInputChangeHandler}
                            className={amountIsValid ? 'is-valid': 'no-valid'}></AmountInput>
                        </FormItem>
                    </FormRow>
                    <FormRow>
                        <SubmitButton type="Submit" onClick={this.onSubmit} />
                    </FormRow>
                </FormWrapper>
            </GetQuoteWrapper>

        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getQuote,
        showLoader
    }, dispatch);
}


export default connect(null, mapDispatchToProps)(GetQuote);
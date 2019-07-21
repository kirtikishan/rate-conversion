import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
    display: flex;
    height: 50px;
    border-bottom: 1px solid #61a9f1;
    align-items: center;
`;

const HeaderText = styled.div`
    display: flex;
    font-size: 24px;
    font-family: arial;
    color: #595859;
`;

const Header = () => {
    return (
        <HeaderWrapper>
            <HeaderText>Quick Quote</HeaderText>
        </HeaderWrapper>
    )
}


export default Header;
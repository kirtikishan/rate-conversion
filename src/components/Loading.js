import React from 'react';
import styled from 'styled-components';

const LoadingWrapper = styled.div`
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    align-items: center;
`;

const LoadingImage = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    background-image: url("../../loader.gif");
    background-repeat:no-repeat;
    width:48px;
    height:48px;   
    background-size: 100%; 
`;

const Loading = () => {
    return (
        <LoadingWrapper>
           <LoadingImage></LoadingImage>
        </LoadingWrapper>
    )
}


export default Loading;
import styled from 'styled-components';

export const Heading = styled.h1`
text-align: center;
color: green;
`;

export const Content = styled.div`
overflowY: scroll;
height: 2500px;
`;

export const Button = styled.div`
    position: fixed;
    width: 100%;
    left: 92%;
    right: 20px;
    bottom: 90px;
    height: 30px;
    font-size: 3.5rem;
    z-index: 1;
    cursor: pointer;
    color: #4285F4;
    // box-shadow: 2px 2px 3px #999;

    @media screen and (max-width: 767px) {
        display: none;
      }
`

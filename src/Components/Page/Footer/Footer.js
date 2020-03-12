import React, {Component} from 'react';
import styled from 'styled-components'
// import './footer.scss';

const FooterComponent = styled.footer`
    color: white;
    background-color: black;
    text-align: center;
    height: 100px;
    padding: 10px;
    a {
        text-decoration: none;
        color: ${props => props.theme.Blue200}
        &:hover {
            color: white;
        }
    }
`

class Footer extends Component {
    render() {
        return (
            <FooterComponent id="footer">
                <div>
                Footer
                </div>
                <a href="."> Company facebook </a>
                |
                <a href="."> Company instagram </a>
                |
                <a href="."> Company kakaotalk </a>
                <p> Copyright © Company </p>
            </FooterComponent>
        );
    }
}

export default Footer;
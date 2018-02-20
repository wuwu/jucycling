import React from 'react';
import styled from 'styled-components';

import * as palette from '../../config/Style';

const Content = styled.p`
    color: ${palette.SECONDARY_COLOR};
    padding: 0 ${palette.CONTENT_PADDING};
    text-align: center;
`;

const Footer = () => (
  <Content>
      &copy; 2018 by Prussian Pedal Princess -  Pictures by <a href="https://unsplash.com/" target="_blank" rel="noopener noreferrer">Unsplash</a>. Design by <a href="https://www.addtocart.de" target="_blank" rel="noopener noreferrer">addtocart</a>.
    <br />
      Have a look at the <a href="https://github.com/wuwu/gatsby-jucycling" target="_blank" rel="noopener noreferrer">Github repository</a>!
  </Content>
);

export default Footer;

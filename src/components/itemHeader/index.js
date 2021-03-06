
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Avatar from '../avatar';
import Color from '../../config/theme';

const ContainerHeader = styled.div`
  display: flex;
`;

const ContainerInfo = styled.div`
  padding-left: 10px;

  a, span {
    color: ${Color.accentcolor};
    text-decoration: none;
  }
`;

const UserName = styled.span`
  color: ${Color.lightGray};
  text-decoration: none;
`;

const Small = styled.small`
  color: ${Color.lightGray};
`;

const ItemHeader = ({
  url,
  name,
  image,
  isUserWithLink,
  date
}) => (
  <ContainerHeader>
    <Avatar image={image} />
    <ContainerInfo>
      <div>
        <UserName>
          {
            isUserWithLink
              ? <a href={url} target="_blank" rel="noopener noreferrer">{name}</a>
              : <span>{name}</span>
          }
        </UserName>
      </div>
      <Small>
        <span role="img" aria-label="Emoji">📅</span>
        &nbsp;
        {date}
      </Small>
    </ContainerInfo>
  </ContainerHeader>
);

ItemHeader.defaultProps = {
  name: '',
  image: '',
  url: '',
  date: '',
  isUserWithLink: false
};

ItemHeader.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  date: PropTypes.string,
  url: PropTypes.string,
  isUserWithLink: PropTypes.bool
};

export default ItemHeader;

import React from 'react';
import styled from 'styled-components';

import colors from '../resources/colors.json';

const Link = styled.a`
  position: relative;
  display: inline-block;
  outline: none;
  color: ${colors.darkGreen};
  vertical-align: bottom;
  text-decoration: none;
  white-space: nowrap;

  margin: 0 4px;
  padding: 0;
  font-weight: bold;
  transition: color 0.2s;

  & {
    font-weight: 500;
    transition: color 0.3s;
    perspective: 600px;
    perspective-origin: 50% 100%;
  }

  &:hover,
  &:focus {
    color: ${colors.red};
  }

  &::before,
  &::after {
    position: absolute;
    top: 0;
    left: -4px;
    z-index: -1;
    box-sizing: content-box;
    padding: 0 4px;
    width: 100%;
    height: 100%;
    content: '';
  }

  &::before {
    background-color: ${colors.yellow};
    transition: transform 0.2s;
    transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
    transform: rotateX(90deg);
    transform-origin: 50% 100%;
  }

  &:hover::before,
  &:focus::before {
    transform: rotateX(0deg);
  }

  &::after {
    border-bottom: 2px solid ${colors.yellow};
  }
`;

const ArticleLink = ({url, title}) => (
  <Link href={url} target="_blank">
    {title}
  </Link>
);

export default ArticleLink;

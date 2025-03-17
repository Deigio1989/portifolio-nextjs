import {Title as TitleStyle} from './styles';
import React from 'react';

export type Props ={
  children?: string;
  fontSize?: number;
}

const Title = ({fontSize, children}:Props) =>(
<TitleStyle fontSize ={fontSize}>{children}</TitleStyle>)

export default Title

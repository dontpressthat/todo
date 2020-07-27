import styled from 'styled-components';

export const Input = styled.input`
  width: ${props => props.width};
  height: 30px;
  font-size: 16pt;
  background-color: ${props => props.bgColor};
  border: none;
  outline: none;
`

export const Container = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  display: ${props => props.display};
  justify-content: ${props => props.justify};
  align-items: ${props => props.align};
  flex-direction: ${props => props.direction};
  background-color: ${props => props.bgColor};
  padding: ${props => props.padding};
  margin: ${props => props.margin};
`
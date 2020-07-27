import styled from 'styled-components';

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

export const Text = styled.span`
  text-decoration: ${props => props.decoration};
  height: ${props => props.height};
  line-height: ${props => props.lineHeight};
  font-size: 16pt;
`
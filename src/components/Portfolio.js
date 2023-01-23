import React from 'react';
import styled from 'styled-components';


const Portfolio = () => (
  <Container>
    <Box>Box 1</Box>
    <Box>Box 2</Box>
    <Box>Box 3</Box>
    <Box>Box 4</Box>
    <Box>Box 5</Box>
    <Box>Box 6</Box>
    <Box>Box 7</Box>
    <Box>Box 8</Box>
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (min-width: 768px) {
    flex-wrap: nowrap;
  }
`;

const Box = styled.div`
  flex: 2 1 calc(50% - 8px);
  margin: 8px;
  background-color: #eee;
  padding: 16px;

  @media (min-width: 768px) {
    flex: 1 1 calc(25% - 8px);
  }
`;

export default Portfolio;
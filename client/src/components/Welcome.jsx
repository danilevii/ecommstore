import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 3vh;
`

const Text = styled.h1`
    margin: 4% 0;
    text-align: center;
    font-size: 48px;
    letter-spacing: 4px;
    font-family: "Dancing Script", cursive;
`

const Welcome = () => {
  return (
   <Container>
       <Text>
           Welcome to D-Store
       </Text>
   </Container>
  )
}

export default Welcome
import styled from 'styled-components';
import Categories from '../components/Categories';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Welcome from '../components/Welcome';

const Container = styled.div`
    
`

const Home = () => {
  return (
    <Container>
        <Navbar />
        <Slider />
        <Welcome />
        <Categories />
    </Container>
  )
}

export default Home
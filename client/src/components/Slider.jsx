import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
    margin-top: 2%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Image = styled.img`
    height: 80vh;
    width: 80vw;
    object-fit: cover;
`

const Arrow = styled.div`
    border: 1px solid;
    border-color: #${(props) => props.color}; 
    background-color: #${(props) => props.color};
    color: #${(props) => props.font};
    padding: 14px;
    cursor: pointer;
`

const Slider = () => {
  return (
    <Container>
        <Arrow color = '111111' font='ffffff'>
            <FontAwesomeIcon icon={faArrowLeft} />
        </Arrow>
            <Image src='https://stylecaster.com/wp-content/uploads/2018/12/GettyImages-914704910-copy.jpg' /> 
        <Arrow color = 'ccc' font='111111'>
            <FontAwesomeIcon icon={faArrowRight} />
        </Arrow>
    </Container>
  )
}

export default Slider
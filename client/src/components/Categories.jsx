import styled from "styled-components";

const Container = styled.div`
  margin-top: 80px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Image = styled.img`
    margin: 0px 30px;
    width: 50vh;
    height: 50vh;
    object-fit: cover;
`;

const Text = styled.h1`
    position: absolute;
    color: #807a7a;
    font-size: 3rem;
`;

const Categories = () => {
  return (
    <Container>
      <ImageWrapper>
        <Image src="https://images.squarespace-cdn.com/content/v1/5b608212ec4eb7a5e69c9cc6/1613684790217-6ILBQN4SNQV2N1SLCG2X/Mijeong-Park--Minimalist-Clothing-Slow-Fashion-Ethical-Minimal-Style.jpg"></Image>
        <Text>#New Style</Text>
      </ImageWrapper>
      <ImageWrapper>
        <Image src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/campaign-image-3-modern-artisan-project-1605191534.jpg?crop=1.00xw:0.712xh;0,0.0204xh&resize=1200:*"></Image>
        <Text>70% Off</Text>
      </ImageWrapper>
      <ImageWrapper>
        <Image src="https://fashionista.com/.image/c_fit%2Ccs_srgb%2Cq_auto:good%2Cw_620/MTQ3MTg1MjE5MTU2NDUzMTY3/workwear-modern-citizen.png"></Image>
        <Text>#Look Book</Text>
      </ImageWrapper>
    </Container>
  );
};

export default Categories;

import * as S from './styles'

import Image from 'next/image'
import Heading from 'components/Heading'
import SearchBox from 'components/SearchBox'
import Button from 'components/Button'
import { Settings } from 'react-slick'
import Slider from 'components/Slider'

const testimonials = [
  {
    title: 'Incredible',
    description:
      'We had an incredible experience working with Landify and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the concept so quickly. It acted as a catalyst to take our design to the next level and get more eyes on our product.',
    user: {
      name: 'Jane Cooper',
      company: 'CEO, ABC Corporation'
    }
  },
  {
    title: 'Incredible Experience ojoijo',
    description:
      'We had an incredible experience working with Landify and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the concept so quickly. It acted as a catalyst to take our design to the next level and get more eyes on our product.',
    user: {
      name: 'Jane Cooper',
      company: 'CEO, ABC Corporation'
    }
  },
  {
    title: 'Incredible Experiejoijoijonce',
    description:
      'We had an incredible experience working with Landify and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the concept so quickly. It acted as a catalyst to take our design to the next level and get more eyes on our product.',
    user: {
      name: 'Jane Cooper',
      company: 'CEO, ABC Corporation'
    }
  },
  {
    title: 'Awesome experience',
    description:
      'We had an incredible experience working with Landify and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the concept so quickly. It acted as a catalyst to take our design to the next level and get more eyes on our product.',
    user: {
      name: 'Jane Cooper',
      company: 'CEO, ABC Corporation'
    }
  }
]

function HomeTemplate() {
  const settings: Settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2
  }

  return (
    <S.Wrapper>
      <S.Hero>
        <S.Container>
          <S.HeroContent>
            <S.HeroText>
              <Heading size="xlarge" color="primary" level={1}>
                Encontre o lugar perfeito para alugar
              </Heading>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Condimentum diam orci pretiu.
              </p>
            </S.HeroText>
            <SearchBox />
          </S.HeroContent>
          <S.HeroImage>
            <Image src="/image.png" objectFit="cover" layout="fill" alt="" />
          </S.HeroImage>
        </S.Container>
        <div className="square"></div>
      </S.Hero>
      {/* <S.Email>
        <S.EmailImage>
          <Image src="/architecture.png" layout="fill" />
        </S.EmailImage>
        <S.EmailContent>
          <Heading color="white" size="medium" level={2}>
            Receba as melhores promoções primeiro.
          </Heading>
          <S.EmailInput>
            <input type="text" />
            <button>Enviar email</button>
          </S.EmailInput>
        </S.EmailContent>
      </S.Email> */}
      <S.TypesContainer>
        <S.Type>
          <S.TypeContent>
            <strong>Casas</strong>
            <p>Veja os apartamentos mais requisitados do mercado.</p>
            <Button size="small">Veja mais</Button>
          </S.TypeContent>
          <S.TypeImage>
            <Image src="/home.jpg" layout="fill" />
          </S.TypeImage>
        </S.Type>
        <S.Type>
          <S.TypeContent>
            <strong>Casas</strong>
            <p>Veja os apartamentos mais requisitados do mercado.</p>
            <Button size="small">Veja mais</Button>
          </S.TypeContent>
          <S.TypeImage>
            <Image src="/home.jpg" layout="fill" />
          </S.TypeImage>
        </S.Type>
      </S.TypesContainer>
      <S.Testimonials>
        <S.TestimonialsContainer>
          <Slider settings={settings}>
            {testimonials.map((testimonial, index) => (
              <S.Testimonial key={index}>
                {/* <Image layout="fill" src={img.image_url} /> */}
                <S.TestimonialContent>
                  <h4>{testimonial.title}</h4>
                  <p>{testimonial.description}</p>
                </S.TestimonialContent>
                <S.TestimonialInfo>
                  <div className="flex">
                    <Image src="/avatar.png" width={56} height={56} />
                    <S.Perfil className="perfil">
                      <strong>{testimonial.user.name}</strong>
                      <small>{testimonial.user.company}</small>
                    </S.Perfil>
                  </div>
                </S.TestimonialInfo>
              </S.Testimonial>
            ))}
          </Slider>
        </S.TestimonialsContainer>
      </S.Testimonials>
    </S.Wrapper>
  )
}

export default HomeTemplate

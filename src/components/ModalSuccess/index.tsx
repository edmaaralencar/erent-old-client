// import Image from 'next/image'
import Button from 'components/Button'
import Heading from 'components/Heading'
import Link from 'next/link'
import * as S from './styles'

export type ModalSuccessProps = {
  title: string
  description: string
  href: string
  modalOpen: boolean
  handleCloseModal: () => void
}

function ModalSuccess({
  title,
  description,
  href,
  modalOpen,
  handleCloseModal
}: ModalSuccessProps) {
  return (
    <S.Backdrop onClick={handleCloseModal} isModalOpen={modalOpen}>
      <S.Wrapper onClick={event => event.stopPropagation()}>
        <S.ImageContainer>
          <img src="/success.png" alt="oia" />
        </S.ImageContainer>
        <Heading color="black" level={3} size="medium">
          {title}
        </Heading>
        <S.Description>{description}</S.Description>
        <Link href={href} passHref>
          <Button as="a" size="small" variant="success">
            Ok
          </Button>
        </Link>
      </S.Wrapper>
    </S.Backdrop>
  )
}

export default ModalSuccess

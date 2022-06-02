import Link from 'next/link'

import { FiAperture, FiHome, FiLogOut, FiUser } from 'react-icons/fi'

import Can from 'components/Can'

import * as S from './styles'

function NavDropdown() {
  return (
    <S.Wrapper>
      <Link href="/profile" passHref>
        <S.Link>
          <FiUser size={20} color="#18191F" />
          <span>Minha conta</span>
        </S.Link>
      </Link>
      <Link href="/rentals" passHref>
        <S.Link>
          <FiHome size={20} color="#18191F" />
          <span>Aluguéis</span>
        </S.Link>
      </Link>
      <Can>
        <Link href="/app" passHref>
          <S.Link>
            <FiAperture size={20} color="#18191F" />
            <span>Dashboard</span>
          </S.Link>
        </Link>
      </Can>
      <Link href="/" passHref>
        <S.Link>
          <FiLogOut size={20} color="#18191F" />

          <span>Sair da plataforma</span>
        </S.Link>
      </Link>
    </S.Wrapper>
  )
}

export default NavDropdown

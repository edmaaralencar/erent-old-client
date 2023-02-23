import Link from 'next/link'
import * as Dropdown from '@radix-ui/react-dropdown-menu'

import { FiAperture, FiHome, FiLogOut, FiUser } from 'react-icons/fi'

import Can from 'components/Can'
import { useAuth } from 'context/AuthContext'

import * as S from './styles'

function NavDropdown() {
  const { signOut } = useAuth()

  function onClick() {
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }))
  }

  return (
    <Dropdown.Portal>
      <S.Wrapper>
        <Dropdown.Item>
          <Link href="/profile" passHref>
            <S.Link onClick={onClick}>
              <FiUser size={20} color="#18191F" />
              <span>Minha conta</span>
            </S.Link>
          </Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link href="/rentals" passHref>
            <S.Link onClick={onClick}>
              <FiHome size={20} color="#18191F" />
              <span>Aluguéis</span>
            </S.Link>
          </Link>
        </Dropdown.Item>
        <Can isAdmin={true}>
          <Dropdown.Item>
            <Link href="/dashboard" passHref>
              <S.Link onClick={onClick}>
                <FiAperture size={20} color="#18191F" />
                <span>Dashboard</span>
              </S.Link>
            </Link>
          </Dropdown.Item>
        </Can>
        <Dropdown.Item>
          <S.Link as="button" onClick={signOut}>
            <FiLogOut size={20} color="#18191F" />

            <span>Sair da plataforma</span>
          </S.Link>
        </Dropdown.Item>
      </S.Wrapper>
    </Dropdown.Portal>
  )
}

export default NavDropdown

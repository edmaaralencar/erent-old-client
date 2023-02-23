import Button from 'components/Button'
import NavDropdown from 'components/NavDropdown'
import { useAuth } from 'context/AuthContext'
import Image from 'next/image'
import Link from 'next/link'
import { FiChevronDown } from 'react-icons/fi'
import * as Dropdown from '@radix-ui/react-dropdown-menu'

import * as S from './styles'

function Header() {
  const { user, isAuthenticated } = useAuth()

  return (
    <Dropdown.Root>
      <S.Wrapper>
        <S.Container>
          <Link href="/" passHref>
            <a>
              <Image src="/logo.svg" width={100} height={24} />
            </a>
          </Link>

          <S.NavList>
            <Link href="/" passHref>
              <S.NavLink>Início</S.NavLink>
            </Link>
            <Link href="/about" passHref>
              <S.NavLink>Sobre</S.NavLink>
            </Link>
            <Link href="/properties?page=1" passHref>
              <S.NavLink>Propriedades</S.NavLink>
            </Link>
          </S.NavList>

          {isAuthenticated ? (
            <S.Profile>
              <div className="image">
                <Image
                  src={
                    user?.avatar
                      ? `http://localhost:3333/files/${user?.avatar}`
                      : '/avatar.png'
                  }
                  layout="fill"
                />
              </div>
              <span>{user?.name}</span>
              <S.DropdownTrigger>
                <FiChevronDown className="cursor" size={24} color="#18191F" />
              </S.DropdownTrigger>
              <NavDropdown />
            </S.Profile>
          ) : (
            <Link href="/sign-in" passHref>
              <Button as="a" size="small">
                Login
              </Button>
            </Link>
          )}
        </S.Container>
      </S.Wrapper>
    </Dropdown.Root>
  )
}

export default Header

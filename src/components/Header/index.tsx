import Button from 'components/Button'
import Can from 'components/Can'
import NavDropdown from 'components/NavDropdown'
import { useAuth } from 'context/AuthContext'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'
import * as S from './styles'

function Header() {
  const { user, isAuthenticated } = useAuth()
  const [openDropdown, setOpenDropdown] = useState(false)

  return (
    <S.Wrapper>
      <S.Container>
        <Image src="/logo.svg" width={100} height={24} />

        <S.NavList>
          <Link href="/" passHref>
            <S.NavLink>Início</S.NavLink>
          </Link>
          <Link href="/about" passHref>
            <S.NavLink>Sobre</S.NavLink>
          </Link>
          <Link href="/properties" passHref>
            <S.NavLink>Propriedades</S.NavLink>
          </Link>
        </S.NavList>

        {isAuthenticated ? (
          <S.Profile>
            <div className="image">
              <Image
                src={`http://localhost:3333/files/${user?.avatar}`}
                width={40}
                height={40}
              />
            </div>
            <span>{user?.name}</span>
            <FiChevronDown
              onClick={() => setOpenDropdown(prevState => !prevState)}
              size={24}
              color="#18191F"
            />
            {openDropdown && <NavDropdown />}
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
  )
}

export default Header

import Heading from 'components/Heading'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'
import { links } from './constants'
import * as S from './styles'
import theme from 'styles/theme'
import { FiLogOut } from 'react-icons/fi'
import { useAuth } from 'context/AuthContext'

type AccountWrapperProps = {
  title: string
  children: ReactNode
}

function AccountWrapper({ title, children }: AccountWrapperProps) {
  const router = useRouter()
  const { signOut } = useAuth()

  return (
    <S.Wrapper>
      <Heading size="large">Minha conta</Heading>
      <S.Container>
        <S.Navbar>
          <ul>
            {links.map(link => (
              <S.NavLink active={router.pathname === link.path} key={link.name}>
                <Link href={link.path} passHref>
                  <a>
                    {
                      <link.icon
                        className="icon"
                        size={24}
                        color={
                          router.pathname === link.path
                            ? theme.colors.white.main
                            : theme.colors.black.main
                        }
                      />
                    }
                    {link.name}
                  </a>
                </Link>
              </S.NavLink>
            ))}
            <S.NavLink onClick={signOut} active={false}>
              <button>
                <FiLogOut size={24} />
                Sair da plataforma
              </button>
            </S.NavLink>
          </ul>
        </S.Navbar>
        <S.Content>
          <h2>{title}</h2>
          {children}
        </S.Content>
      </S.Container>
    </S.Wrapper>
  )
}

export default AccountWrapper

import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  FiAperture,
  FiHome,
  FiLogOut,
  FiUser,
  FiBookOpen,
  FiCopy
} from 'react-icons/fi'

import { signOut } from 'context/AuthContext'
import * as S from './styles'

function Sidebar() {
  const router = useRouter()

  return (
    <S.Wrapper>
      <S.NavList>
        <Link href="/dashboard" passHref>
          <S.NavLink
            className={router.pathname === '/dashboard' ? 'active' : ''}
          >
            <FiAperture size={24} color="#FFFFFF" />
          </S.NavLink>
        </Link>
        <Link href="/dashboard/properties" passHref>
          <S.NavLink
            className={
              router.pathname === '/dashboard/properties' ? 'active' : ''
            }
          >
            <FiHome size={24} color="#FFFFFF" />
          </S.NavLink>
        </Link>
        <Link href="/dashboard/users" passHref>
          <S.NavLink
            className={router.pathname === '/dashboard/users' ? 'active' : ''}
          >
            <FiUser size={24} color="#FFFFFF" />
          </S.NavLink>
        </Link>
        <Link href="/dashboard/rentals" passHref>
          <S.NavLink
            className={router.pathname === '/dashboard/rentals' ? 'active' : ''}
          >
            <FiBookOpen size={24} color="#FFFFFF" />
          </S.NavLink>
        </Link>
        <Link href="/dashboard/options" passHref>
          <S.NavLink
            className={router.pathname === '/dashboard/options' ? 'active' : ''}
          >
            <FiCopy size={24} color="#FFFFFF" />
          </S.NavLink>
        </Link>
        <S.NavButton className="nav-button" onClick={signOut} as="button">
          <FiLogOut size={24} color="#FFFFFF" />
        </S.NavButton>
      </S.NavList>
      <S.NavButton onClick={signOut} as="button">
        <FiLogOut size={24} color="#FFFFFF" />
      </S.NavButton>
    </S.Wrapper>
  )
}

export default Sidebar

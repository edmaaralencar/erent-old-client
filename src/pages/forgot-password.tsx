import AppWrapper from 'components/AppWrapper'
import { ReactElement } from 'react'
import ForgotPasswordTemplate from 'templates/ForgotPassword'

export default function ForgotPassword() {
  return <ForgotPasswordTemplate />
}

ForgotPassword.getLayout = function getLayout(page: ReactElement) {
  return <AppWrapper>{page}</AppWrapper>
}

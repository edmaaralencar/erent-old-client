import Button from 'components/Button'
import Heading from 'components/Heading'
import Input from 'components/Input'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import ResetPassword from './ResetPassword'
import SendForgotPasswordEmail from './SendForgotPasswordEmail'
import * as S from './styles'

function ForgotPasswordTemplate() {
  const [step, setStep] = useState<'send' | 'change'>('send')

  const {
    query: { token }
  } = useRouter()

  useEffect(() => {
    setStep(token ? 'change' : 'send')
  }, [token])

  return (
    <>
      {step === 'send' ? (
        <SendForgotPasswordEmail />
      ) : (
        <ResetPassword token={token as string} />
      )}
    </>
  )
}

export default ForgotPasswordTemplate

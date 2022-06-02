import { useAuth } from 'context/AuthContext'
import { FormEvent, useState } from 'react'

function SignInTemplate() {
  const { signIn } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    await signIn({ email, password })
  }

  return (
    <form onSubmit={handleSubmit} action="">
      <input
        type="email"
        value={email}
        onChange={event => setEmail(event.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={event => setPassword(event.target.value)}
      />
      <button type="submit">Enviar dados</button>
    </form>
  )
}

export default SignInTemplate

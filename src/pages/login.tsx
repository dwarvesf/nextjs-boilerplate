import React, { useEffect } from 'react'
import { Card } from 'components/Card'
import { Heading } from 'components/Heading'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { FormInput } from 'components/FormInput'
import { Button } from 'components/Button'
import { Text } from 'components/Text'
import { Checkbox } from 'components/Checkbox'
import { Divider } from 'components/Divider'
import { useAuthContext } from 'context/auth'
import { useRouter } from 'next/router'
import { ROUTES } from 'constants/routes'
import { Logo } from 'components/Logo'

const loginFormDefaultValues = { email: '', password: '' }
const validationSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters long')
    .regex(/[A-Z]/, {
      message: 'Password must contain at least 1 uppercase letter',
    })
    .regex(/\d/, {
      message: 'Password must contain at least 1 numeric digit',
    }),
})

const LoginPage = () => {
  const { push } = useRouter()
  const { login, isLogin } = useAuthContext()
  const formInstance = useForm({
    defaultValues: loginFormDefaultValues,
    resolver: zodResolver(validationSchema),
  })
  const { handleSubmit } = formInstance

  useEffect(() => {
    if (isLogin) {
      push(ROUTES.DASHBOARD)
    }
  }, [isLogin, push])

  const onSubmit = (data: typeof loginFormDefaultValues) => {
    try {
      login(data.email, data.password)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="w-full min-h-screen flex-col flex justify-center items-center space-y-8 bg-gray-100 pt-8 pb-28">
      <div className="text-center flex flex-col items-center">
        <div className="mb-6 transform scale-125">
          <Logo />
        </div>
        <div className="space-y-1">
          <Heading as="h3">Sign in to your account</Heading>
          <Text className="text-sm text-gray-500">
            Or <Button appearance="link">start your 14-day free trial</Button>
          </Text>
        </div>
      </div>
      <Card className="w-full max-w-[460px] !p-10">
        <FormProvider {...formInstance}>
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <FormInput
              label="Email"
              name="email"
              placeholder="Email"
              rules={{ required: 'Required' }}
              fullWidth
            />
            <FormInput
              label="Password"
              name="password"
              placeholder="Password"
              rules={{ required: 'Required' }}
              type="password"
              fullWidth
            />
            <div className="flex justify-between items-center">
              <Checkbox>Remember me</Checkbox>
              <Button appearance="link" type="button">
                Forgot your password?
              </Button>
            </div>

            <Button appearance="primary" type="submit" fullWidth>
              Sign in
            </Button>

            <Divider>Or continue by</Divider>

            <Button
              type="button"
              fullWidth
              onClick={() => {
                login('test@d.foundation', 'Thepassword1')
              }}
            >
              Use demo account
            </Button>
          </form>
        </FormProvider>
      </Card>
    </div>
  )
}

export default LoginPage

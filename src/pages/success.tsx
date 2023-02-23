import AppWrapper from 'components/AppWrapper'
import React, { ReactElement } from 'react'
import SuccessTemplate from 'templates/Success'

export default function Success() {
  return <SuccessTemplate />
}

Success.getLayout = function getLayout(page: ReactElement) {
  return <AppWrapper>{page}</AppWrapper>
}

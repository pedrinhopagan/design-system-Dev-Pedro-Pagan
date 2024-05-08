/* eslint-disable @typescript-eslint/ban-ts-comment */

// @ts-nocheck
import type { Meta, StoryObj } from '@storybook/react'
import { Toast, Button, ToastProps } from '@dev-pedro-pagan/react'

export default {
  title: 'Surfaces/Toast',
  component: Toast,
  args: {
    trigger: <Button>Trigger</Button>,
    title: 'Agendamento realizado',
    date: 'Quarta-feira, 23 de Outubro às 16h',
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}

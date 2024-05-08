/* eslint-disable @typescript-eslint/ban-ts-comment */

// @ts-nocheck
import type { Meta, StoryObj } from '@storybook/react'
import { Tooltip, TooltipProps, Button } from '@dev-pedro-pagan/react'

export default {
  title: 'Surfaces/Tooltip',
  component: Tooltip,
  args: {
    trigger: <Button variant="secondary">21</Button>,
    description: '21 de Outubro',
    available: true,
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}

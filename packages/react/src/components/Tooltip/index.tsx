import * as RadixTooltip from '@radix-ui/react-tooltip'
import { TooltipArrow, TooltipContent } from './styles'
import { Text } from '../Text'
import React from 'react'

export interface TooltipProps {
  trigger: React.ReactNode
  description: string
  available: boolean
}

export const Tooltip = ({ trigger, description, available }: TooltipProps) => {
  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger asChild>{trigger}</RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <TooltipContent sideOffset={5}>
            <Text>
              {description} - {available ? 'Disponível' : 'Indisponível'}
            </Text>
            <TooltipArrow />
          </TooltipContent>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  )
}

Tooltip.displayName = 'Tooltip'

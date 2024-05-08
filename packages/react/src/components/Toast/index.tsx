import * as React from 'react'
import * as RadixToast from '@radix-ui/react-toast'
import {
  ToastViewport,
  ToastRoot,
  ToastTitle,
  ToastDescription,
  ToastAction,
  Button,
} from './styles'
import { Text } from '../Text'

export interface ToastProps {
  trigger: React.ReactNode
  title: string
  date: string
}

export const Toast = ({ trigger, title, date }: ToastProps) => {
  const [open, setOpen] = React.useState(false)
  const eventDateRef = React.useRef(new Date())
  const timerRef = React.useRef(0)

  React.useEffect(() => {
    return () => clearTimeout(timerRef.current)
  }, [])

  return (
    <RadixToast.Provider swipeDirection="right">
      <RadixToast.Action
        altText="Action"
        onClick={() => {
          setOpen(false)
          window.clearTimeout(timerRef.current)
          timerRef.current = window.setTimeout(() => {
            eventDateRef.current = oneWeekAway()
            setOpen(true)
          }, 100)
        }}
        asChild
      >
        {trigger}
      </RadixToast.Action>

      <ToastRoot open={open} onOpenChange={setOpen}>
        <ToastTitle>
          <Text>{title}</Text>
        </ToastTitle>
        <ToastDescription asChild>
          <Text>{date}</Text>
        </ToastDescription>
        <ToastAction asChild altText="Goto schedule to undo">
          <Button>✖</Button>
        </ToastAction>
      </ToastRoot>
      <ToastViewport />
    </RadixToast.Provider>
  )
}

function oneWeekAway() {
  const now = new Date()
  const inOneWeek = now.setDate(now.getDate() + 7)
  return new Date(inOneWeek)
}

Toast.displayName = 'Toast'

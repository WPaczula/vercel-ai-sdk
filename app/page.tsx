'use client'

import { useState } from 'react'
import { useUIState, useActions } from 'ai/rsc'
import { type AI } from './AI'
import { Chat } from '@/components/chat'
import { Message } from '@/lib/message'

export default function Page() {
  const [inputValue, setInputValue] = useState('')
  const [messages, setMessages] = useUIState<typeof AI>()
  const { submitUserMessage } = useActions<typeof AI>()

  return (
    <form
      className="h-full"
      onSubmit={async (e) => {
        e.preventDefault()

        // Add user message to UI state
        setMessages((currentMessages: Message[]) => [
          ...currentMessages,
          {
            id: Date.now(),
            ui: <div>{inputValue}</div>,
            createdAt: new Date(),
          },
        ])

        // Submit and get response message
        const responseMessage = await submitUserMessage(inputValue)
        setMessages((currentMessages: Message[]) => [
          ...currentMessages,
          responseMessage,
        ])

        setInputValue('')
      }}
    >
      <Chat
        messages={messages}
        setInputValue={setInputValue}
        inputValue={inputValue}
      />
    </form>
  )
}

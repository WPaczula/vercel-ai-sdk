/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/HUVWTanOND3
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { MessageBox } from './message-box'
import { Message } from '@/lib/message'

type Props = {
  messages: Array<Message>
  inputValue: string
  setInputValue: (value: string) => void
}

export function Chat({ messages, inputValue, setInputValue }: Props) {
  return (
    <div className="flex h-full w-full flex-col rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-950 dark:border-gray-800">
      <div className="flex-1 overflow-y-auto">
        <div className="space-y-4">
          {messages.map((message) => (
            <MessageBox
              key={message.id}
              date={message.createdAt}
              message={message.ui}
            />
          ))}
        </div>
      </div>
      <div className="mt-4 flex items-center space-x-2">
        <Input
          className="flex-1"
          placeholder="Type your message..."
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.currentTarget.value)}
        />
        <Button type="submit">Send</Button>
      </div>
    </div>
  )
}

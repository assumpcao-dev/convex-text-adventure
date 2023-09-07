"use client"

import { useAction, useQuery } from 'convex/react'
import Image from 'next/image'
import { useState } from 'react'
import { api } from '../../convex/_generated/api'


export default function Home() {
  const handlePlayerAction = useAction(api.chat.handlePlayerAction)
  const entries = useQuery(api.chat.getAllEntries)
  const [message, setMessage] = useState("")

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className='z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex'>
        <div className="flex flex-col">
          <div className='text-black bg-white rounded-xl h-[400px] w-[300px] mb-2 p-2 overflow-y-auto'>
           {entries?.map((entry) => {
            return (
              <div key={entry._id} className='flex flex-col gap-2 text-black p-2'> 
              <div>{entry.input}</div>
              <div>{entry.response}</div>
              </div>
            )
           })}
          </div>
        <form onSubmit={(e) => {
          e.preventDefault();
          // TODO: convex action
          handlePlayerAction({ message })
          setMessage("");
        }}>
          <input 
          className='text-black p-1 rounded'
          name='message'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          />
          <button type='button'>submit</button>
        </form>
          </div>
      </div>
    </main>
  )
}

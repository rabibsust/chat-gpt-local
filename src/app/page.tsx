import Image from "next/image";
"use client"
import { useChat } from "ai/react"
import Markdown from "react-markdown"

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <div className="flex flex-col w-full max-w-lg rounded-lg bg-white/10">
              <div
                  className="min-h-[50vh] h-[50vh] max-h-[50vh] overflow-y-auto p-4"
              >
                  <div className="min-h-full flex-1 flex flex-col justify-end gap-2 w-full pb-4">
                      {messages.length ? (
                          messages.map((m, i) => {
                              return m.role === "user" ? (
                                  <div key={i} className="w-full flex flex-col gap-2 items-end">
                                      <span className="px-2">You</span>
                                      <div
                                          className="flex flex-col items-center px-4 py-2 max-w-[90%] bg-orange-700/50 rounded-lg text-neutral-200 whitespace-pre-wrap">
                                          <Markdown>{m.content}</Markdown>
                                      </div>
                                  </div>
                              ) : (
                                  <div key={i} className="w-full flex flex-col gap-2 items-start">
                                      <span className="px-2">AI</span>
                                      <div
                                          className="flex flex-col max-w-[90%] px-4 py-2 bg-indigo-700/50 rounded-lg text-neutral-200 whitespace-pre-wrap">
                                          <Markdown>{m.content}</Markdown>
                                      </div>
                                  </div>
                              );
                          })
                      ) : (
                          <div
                              className="text-center flex-1 flex items-center justify-center text-neutral-500 text-4xl">
                              <h1>Local AI Chat</h1>
                          </div>
                      )}
                  </div>
              </div>

              <form onSubmit={handleSubmit} className="w-full px-3 py-2">
                  <input
                      className="w-full px-3 py-2 border border-gray-700 bg-transparent rounded-lg text-neutral-200"
                      value={input}
                      placeholder="Ask me anything..."
                      onChange={handleInputChange}
                  />
              </form>
          </div>
      </main>
  );
}

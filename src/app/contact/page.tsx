"use client"

import { useYupForm } from "../schema/Schema"

const Page = () => {
  const { register, handleSubmit, reset, errors } = useYupForm()

  return (
    <section className="flex flex-col items-center min-h-screen justify-center p-4">
      <h2 className="text-[var(--color-primary)] text-4xl font-bold mb-6">
        Kontakt
      </h2>

      <form
        onSubmit={handleSubmit(() => reset())}
        className="w-full max-w-md space-y-4"
      >
        <div>
          <label
            htmlFor="name"
            className="text-[var(--color-primary)] font-semibold mb-2 block"
          >
            Fornavn
          </label>
          <input
            type="text"
            id="name"
            placeholder="Dit fornavn"
            {...register("name")}
            className="w-full p-3 border border-purple-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-400 placeholder-[var(--color-primary)]"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="text-[var(--color-primary)] font-semibold mb-2 block"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Din email"
            {...register("email")}
            className="w-full p-3 border border-purple-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-400 placeholder-[var(--color-primary)]"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="message"
            className="text-[var(--color-primary)] font-semibold mb-2 block"
          >
            Besked
          </label>
          <textarea
            id="message"
            rows={5}
            placeholder="Din besked"
            {...register("message")}
            className="w-full p-3 border border-purple-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-400 placeholder-[var(--color-primary)] resize-none"
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full px-6 py-2 bg-purple-700 text-white rounded-lg hover:bg-[var(--color-primary)] transition"
        >
          Kontakt
        </button>
      </form>
    </section>
  )
}

export default Page

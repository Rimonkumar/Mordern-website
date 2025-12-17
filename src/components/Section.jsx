export default function Section({ id, title, children }) {
  return (
    <section
      id={id}
      className="min-h-screen flex flex-col items-center justify-center px-6"
    >
      <h2 className="text-4xl font-bold mb-4">{title}</h2>
      <p className="max-w-2xl text-center text-gray-600">
        {children}
      </p>
    </section>
  )
}


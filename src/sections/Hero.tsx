export default function Hero() {
  return (
    <section className="bg-black px-4">
      <div className="container mx-auto grid select-none gap-6 pb-32 pt-16 text-white">
        <p className="text-xl sm:text-2xl">Hi, I'm</p>
        <h1 className="text-6xl font-bold text-black sm:text-8xl">
          <span className="bg-primary-200 leading-tight">
            Chris
            <br />
            Carinci.
          </span>
        </h1>
        <p className="text-xl sm:text-2xl">I'm a Full Stack Developer.</p>
      </div>
    </section>
  )
}

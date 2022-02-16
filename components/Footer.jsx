export default function Footer() {
  return (
    <footer className="flex h-24 w-full flex-col items-center justify-center  ">
      <a href="https://github.com/HangCcZ" className="px-5">
        <p className="underline decoration-wavy">Coded by Hang Chen</p>
      </a>
      <a
        className="flex items-center justify-center "
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{' '}
        <img src="/vercel.svg" alt="Vercel Logo" className="ml-2 h-4" />
      </a>
    </footer>
  )
}

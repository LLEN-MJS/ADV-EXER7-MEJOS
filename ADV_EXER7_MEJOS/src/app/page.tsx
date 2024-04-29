import Image from 'next/image'

export default function Home() {
  return (
    <div className="h-screen max:h-screen-auto flex justify-center items-center bg-bg-color">
      <span style={{ color: 'white', fontSize: '1.5rem' }}>WELCOME! THIS IS THE HOMEPAGE!</span>
    </div>
  )
}

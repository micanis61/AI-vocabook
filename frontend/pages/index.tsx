import Link from "next/link"
export default function HomePage() {
  return (
    <>
      <h1>ここはホームページです</h1>
      <Link href="/home">
        <button>Sign in</button>
      </Link>
      <Link href="/user">
        <button>Sign up</button>
      </Link>
    </>
  )
}
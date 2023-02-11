import Link from "next/link";
export default function User() {
  return (
    <form action="/user">
      <input type="text" name="Name" placeholder=" name" />
      <input type="email" name="email" placeholder="email" />
      <Link href="/home">
        <input type="submit" value="submit" />
      </Link>
    </form>
  )
}
import Link from "next/link";

const Nav = props => (
  <div>
    <Link href="/clothing">
      <a>clothing</a>
    </Link>
    <Link href="/art-and-books">
      <a>art & books</a>
    </Link>
    <Link href="/collectibles">
      <a>collectibles</a>
    </Link>
    <Link href="/other">
      <a>other</a>
    </Link>
    <Link href="/showcase">
      <a>showcase</a>
    </Link>
    <Link href="/sale">
      <a>on sale</a>
    </Link>
    <Link href="/ranked-merch">
      <a>ranked merch unlocks</a>
    </Link>
  </div>
);

export default Nav;

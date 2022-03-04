import Link from "next/link";

function MainNavigation() {
  return (
    <header className="w-full h-20 flex items-center justify-between bg-cyan-700 pt-0 pb-0 pr-5 pl-5">
      <div className="text-3xl text-white font-bold font-narrow">
        <Link href="/">Movie Database</Link>
      </div>
      <nav>
        <ul className="list-none m-0 p-0 flex items baseline">
          <li className="ml-5">
            <Link href="/">
              <a className="text-xl text-sky-200 hover:text-white">Home</a>
            </Link>
          </li>
          <li className="ml-5">
            <Link href="/about">
              <a className="text-xl text-sky-200 hover:text-white">About</a>
            </Link>
          </li>
          <li className="ml-5">
            <Link href="/movies">
              <a className="text-xl text-sky-200 hover:text-white">Movies</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;

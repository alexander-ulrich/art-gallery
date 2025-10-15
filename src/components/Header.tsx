export default function Header() {
  return (
    //
    <header className="bg-base-300">
      <nav className="navbar bg-base-300 shadow-sm">
        <div className="dropdown min-[589px]:hidden pl-5">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-indigo-900"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a href="/" className="navLink">
                Home
              </a>
            </li>
            <li>
              <a href="/personal-gallery" className="navLink">
                Personal Gallery
              </a>
            </li>
          </ul>
        </div>
        <div className="flex-1 max-[590px]:hidden justify-between">
          <div className="flex gap-5 pl-10 ">
            <a href="/" className="navLink text-2xl">
              Home
            </a>
            <a href="/personal-gallery" className="navLink text-2xl">
              Personal Gallery
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default function Header() {
  return (
    //
    <header className="bg-base-300">
      <nav className="navbar bg-base-300 shadow-sm">
        <div className="dropdown min-[589px]:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/personal-gallery">Personal Gallery</a>
            </li>
          </ul>
        </div>
        <div className="flex-1 max-[590px]:hidden justify-between">
          <a href="/" className="btn btn-ghost text-xl">
            Home
          </a>
          <a href="/personal-gallery" className="btn btn-ghost text-xl">
            Personal Gallery
          </a>
        </div>
        <h1 className="text-3xl pr-10">Art Gallery</h1>
      </nav>
    </header>
  );
}

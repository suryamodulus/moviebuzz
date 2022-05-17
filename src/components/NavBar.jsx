import { useLocation, useNavigate } from "react-router-dom";

const NavBar = ({ title }) => {
  let navigate = useNavigate();
  let location = useLocation();
  let canGoBack = location.pathname !== "/";
  let navigateTo = location.key === "default" ? "/" : -1;
  return (
    <nav className="px-2 py-3 bg-neutral-900 text-white-500">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <div className="flex items-center nav-right">
          {canGoBack && (
            <button
              className="text-white p-1 mr-2 text-sm focus:outline-none focus:ring-2 hover:bg-zinc-800 focus:ring-zinc-700"
              onClick={() => navigate(navigateTo)}
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 14H7M7 14L14 21M7 14L14 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}
          <span className="text-xl font-semibold whitespace-nowrap text-white">
            {title}
          </span>
        </div>
        <div className="flex items-center nav-left">
          <button
            data-collapse-toggle="drop-menu"
            type="button"
            className="text-white p-1 ml-2 text-sm focus:outline-none focus:ring-2 hover:bg-zinc-800 focus:ring-zinc-700"
            aria-controls="more-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Open more menu</span>
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 14C13 14.5523 13.4477 15 14 15C14.5523 15 15 14.5523 15 14C15 13.4477 14.5523 13 14 13C13.4477 13 13 13.4477 13 14Z"
                fill="currentColor"
              />
              <path
                d="M13 21C13 21.5523 13.4477 22 14 22C14.5523 22 15 21.5523 15 21C15 20.4477 14.5523 20 14 20C13.4477 20 13 20.4477 13 21Z"
                fill="currentColor"
              />
              <path
                d="M13 7C13 7.55228 13.4477 8 14 8C14.5523 8 15 7.55228 15 7C15 6.44772 14.5523 6 14 6C13.4477 6 13 6.44772 13 7Z"
                fill="currentColor"
              />
              <path
                d="M13 14C13 14.5523 13.4477 15 14 15C14.5523 15 15 14.5523 15 14C15 13.4477 14.5523 13 14 13C13.4477 13 13 13.4477 13 14Z"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13 21C13 21.5523 13.4477 22 14 22C14.5523 22 15 21.5523 15 21C15 20.4477 14.5523 20 14 20C13.4477 20 13 20.4477 13 21Z"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13 7C13 7.55228 13.4477 8 14 8C14.5523 8 15 7.55228 15 7C15 6.44772 14.5523 6 14 6C13.4477 6 13 6.44772 13 7Z"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

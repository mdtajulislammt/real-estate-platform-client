
const DashboardHeader = ({heading}) => {
     return (
          <div>
               {/* <!----------------- Header -----------------> */}
  <header className="flex items-center justify-between p-4 sticky top-0 bg-white">
    <div className="flex items-center justify-between">
      <a
        href="#sidenav-open"
        className="visible sm:hidden"
        title="Open Menu"
        aria-label="Open Menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 text-gray-900"
          fill="currentColor"
          viewBox="0 0 24 24"
          stroke="#2c3e50"
          
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
      </a>
      <h1 className="mx-2 text-xl font-bold text-gray-900">{heading}</h1>
    </div>
    <input
      type="text"
      className="flex-grow sm:flex-grow-0 w-36 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
      name="search"
      placeholder="Search..."
    />
  </header>
          </div>
     );
};

export default DashboardHeader;
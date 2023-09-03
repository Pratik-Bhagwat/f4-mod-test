function Navbar({ setShowHistory, showHistory }) {
  return (
    <header className="bg-[#2C2C2C] h-11 flex items-center select-none">
      <nav className="container flex items-center justify-between">
        <h1 className="text-white font-bold lg:hover:cursor-pointer">
          Dictionary App
        </h1>
        <ul className="flex items-center gap-4">
          <li className="text-white lg:cursor-pointer">Home</li>
          <li
            className="text-white lg:cursor-pointer"
            onClick={() => setShowHistory(!showHistory)}
          >
            History
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Navbar;

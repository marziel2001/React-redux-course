import Link from "./Link";

function Sidebar() {
    const links = [
        { label: 'Dropdown', path: '/' },
        { label: 'Acordion', path: '/acordion' },
        { label: 'Buttons', path: '/buttons' },
        { label: 'Modal', path: '/modal' },
        { label: 'Table', path: '/table' },
        { label: 'Counter', path: '/counter' },
    ];

  const rennderedLinks = links.map((link) => {
    return (
      <Link
        className={"mb-3"}
        to={link.path}
        key={link.label}
        activeClassName="font-bold border-l-4 border-blue-500 pl-2"
      >
        {link.label}
      </Link>
    );
  });

  return (
    <div className="sticky top-0 overflow-y-scroll flex flex-col items-start">
      {rennderedLinks}
    </div>
  );
}

export default Sidebar;

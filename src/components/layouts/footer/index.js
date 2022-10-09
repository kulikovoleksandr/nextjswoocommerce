import Link from "next/link";
const Footer = ({ footer }) => {
  const { footerMenuItems, sidebarOne, sidebarTwo, socialLinks } = footer;
  return (
    <footer className="flex p-10 mt-10 bg-cyan-100">
      <div
        className="pr-5 pb-5"
        dangerouslySetInnerHTML={{ __html: sidebarOne }}
      ></div>
      <div
        className="pr-5 pb-5"
        dangerouslySetInnerHTML={{ __html: sidebarTwo }}
      ></div>
      <ul className="pr-5 pb-5">
        {socialLinks.map((item) => (
          <li key={item.iconName}>
            <Link href={item.iconUrl}>
              <a target="_blank">{item.iconName}</a>
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  );
};
export default Footer;

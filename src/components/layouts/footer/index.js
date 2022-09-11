import Link from "next/link";
const Footer = ({ footer }) => {
  const { footerMenuItems, sidebarOne, sidebarTwo, socialLinks } = footer;
  console.log(footer);
  return (
    <footer className="flex">
      <div dangerouslySetInnerHTML={{ __html: sidebarOne }}></div>
      <div dangerouslySetInnerHTML={{ __html: sidebarTwo }}></div>
      <ul>
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

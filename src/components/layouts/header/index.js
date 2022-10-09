import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { isEmpty } from "lodash";
import { Vector } from "../../icons";

const Header = ({ header }) => {
  const { headerMenuItems, favicon, siteLogoUrl, siteDescription, siteTitle } =
    header || {};
  return (
    <>
      <Head>
        <title>{siteTitle || ""}</title>
        <meta name="description" content={siteDescription || ""} />
        <link rel="icon" href={favicon} />
      </Head>
      <header className="p-5 mb-10 bg-cyan-100 flex items-center">
        <Link href="/">
          <a className="block mr-5">
            <Image src={siteLogoUrl} alt={siteTitle} width={100} height={44} />
          </a>
        </Link>
        <div className="mr-5">
          <h2>{siteTitle}</h2>
          <h3>{siteDescription}</h3>
          <Vector />
        </div>
        <nav className="mr-5">
          {!isEmpty(headerMenuItems) && headerMenuItems.length
            ? headerMenuItems.map((menuItem) => (
                <Link key={menuItem.ID} href={menuItem?.url ?? "/"}>
                  <a className="mr-5">{menuItem.title}</a>
                </Link>
              ))
            : null}
        </nav>
      </header>
    </>
  );
};
export default Header;

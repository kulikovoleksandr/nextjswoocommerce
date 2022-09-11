import Head from "next/head";
import Link from "next/link";
import { isEmpty } from "lodash";
import { Vector } from "../../icons";

const Header = ({ header }) => {
  console.log(header);
  const { headerMenuItems, favicon, siteLogoUrl, siteDescription, siteTitle } =
    header || {};
  console.log(headerMenuItems);

  return (
    <>
      <Head>
        <title>{siteTitle || ""}</title>
        <meta name="description" content={siteDescription || ""} />
        <link rel="icon" href={favicon} />
      </Head>
      <header className="p-5 bg-cyan-100 flex items-center">
        <Link href="/">
          <a>
            <img src={siteLogoUrl} alt={siteTitle}></img>
          </a>
        </Link>
        <div>
          <h2>{siteTitle}</h2>
          <h3>{siteDescription}</h3>
          <Vector />
        </div>
        <div>
          {!isEmpty(headerMenuItems) && headerMenuItems.length
            ? headerMenuItems.map((menuItem) => (
                <Link key={menuItem.ID} href={menuItem?.url ?? "/"}>
                  <a>{menuItem.title}</a>
                </Link>
              ))
            : null}
        </div>
      </header>
    </>
  );
};
export default Header;

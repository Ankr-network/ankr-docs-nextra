// import { useTheme } from "next-themes";
import Script from "next/script";

const logo = ({ height }) => (
<svg width="88" height="32" viewBox="0 0 88 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.074 0.50083L27.5313 5.87305C29.054 6.65563 30 8.20609 30 9.9194V12.3689H26.144V9.9194C26.144 9.66077 26.0007 9.42617 25.7703 9.3077L15.3137 3.93581C15.1177 3.83536 14.8833 3.83503 14.6867 3.93614L4.22933 9.3077C3.99933 9.42617 3.85633 9.66077 3.85633 9.9194V12.3689H0V9.9194C0 8.20609 0.946 6.65563 2.46833 5.87305L12.9263 0.50083C14.2247 -0.166943 15.7747 -0.166943 17.074 0.50083ZM18.2998 15.8368C18.2998 14.0143 16.8191 12.5323 14.9991 12.5323C13.1791 12.5323 11.6984 14.0143 11.6984 15.8368C11.6984 17.6586 13.1791 19.1413 14.9991 19.1413C16.8191 19.1413 18.2998 17.6586 18.2998 15.8368ZM25.771 22.6924C26.0007 22.5742 26.144 22.34 26.144 22.081V19.6312H30V22.081C30 23.7943 29.054 25.3448 27.532 26.127L17.074 31.4992C16.437 31.8263 15.7197 31.9998 15 31.9998C14.2807 31.9998 13.563 31.8263 12.926 31.4992L2.46867 26.127C0.946 25.3448 0 23.7943 0 22.081V19.6312H3.856V22.081C3.856 22.34 3.99933 22.5742 4.22967 22.6924L13.072 27.235V22.7344C10.0597 21.8895 7.843 19.1176 7.843 15.8358C7.843 11.8849 11.0537 8.67047 15 8.67047C18.9463 8.67047 22.157 11.8849 22.157 15.8358C22.157 19.1176 19.9403 21.8895 16.928 22.7344V27.2353L25.771 22.6924Z" fill="#356DF3"/>
<path d="M44.4205 22H39.2642V7.45455H44.4631C45.9261 7.45455 47.1856 7.74574 48.2415 8.32812C49.2973 8.90578 50.1094 9.73674 50.6776 10.821C51.2505 11.9053 51.5369 13.2027 51.5369 14.7131C51.5369 16.2282 51.2505 17.5303 50.6776 18.6193C50.1094 19.7083 49.2926 20.544 48.2273 21.1264C47.1667 21.7088 45.8977 22 44.4205 22ZM42.3395 19.3651H44.2926C45.2017 19.3651 45.9664 19.2041 46.5866 18.8821C47.2116 18.5554 47.6804 18.0511 47.9929 17.3693C48.3101 16.6828 48.4688 15.7973 48.4688 14.7131C48.4688 13.6383 48.3101 12.7599 47.9929 12.0781C47.6804 11.3963 47.214 10.8944 46.5938 10.5724C45.9735 10.2505 45.2088 10.0895 44.2997 10.0895H42.3395V19.3651ZM58.6871 22.2131C57.5839 22.2131 56.6299 21.9787 55.8249 21.5099C55.0247 21.0365 54.4068 20.3783 53.9712 19.5355C53.5356 18.688 53.3178 17.7055 53.3178 16.5881C53.3178 15.4612 53.5356 14.4763 53.9712 13.6335C54.4068 12.786 55.0247 12.1278 55.8249 11.6591C56.6299 11.1856 57.5839 10.9489 58.6871 10.9489C59.7904 10.9489 60.7421 11.1856 61.5423 11.6591C62.3472 12.1278 62.9674 12.786 63.4031 13.6335C63.8387 14.4763 64.0565 15.4612 64.0565 16.5881C64.0565 17.7055 63.8387 18.688 63.4031 19.5355C62.9674 20.3783 62.3472 21.0365 61.5423 21.5099C60.7421 21.9787 59.7904 22.2131 58.6871 22.2131ZM58.7013 19.8693C59.2032 19.8693 59.6223 19.7273 59.9585 19.4432C60.2946 19.1544 60.5479 18.7614 60.7184 18.2642C60.8936 17.767 60.9812 17.2012 60.9812 16.5668C60.9812 15.9323 60.8936 15.3665 60.7184 14.8693C60.5479 14.3722 60.2946 13.9792 59.9585 13.6903C59.6223 13.4015 59.2032 13.2571 58.7013 13.2571C58.1947 13.2571 57.7686 13.4015 57.4229 13.6903C57.082 13.9792 56.824 14.3722 56.6488 14.8693C56.4783 15.3665 56.3931 15.9323 56.3931 16.5668C56.3931 17.2012 56.4783 17.767 56.6488 18.2642C56.824 18.7614 57.082 19.1544 57.4229 19.4432C57.7686 19.7273 58.1947 19.8693 58.7013 19.8693ZM70.9528 22.2131C69.8353 22.2131 68.8742 21.9763 68.0692 21.5028C67.2691 21.0246 66.6535 20.3617 66.2227 19.5142C65.7965 18.6667 65.5835 17.6913 65.5835 16.5881C65.5835 15.4706 65.7989 14.4905 66.2298 13.6477C66.6654 12.8002 67.2833 12.1397 68.0835 11.6662C68.8836 11.188 69.8353 10.9489 70.9386 10.9489C71.8903 10.9489 72.7236 11.1217 73.4386 11.4673C74.1535 11.813 74.7193 12.2983 75.136 12.9233C75.5527 13.5483 75.7823 14.2822 75.8249 15.125H72.9698C72.8893 14.5805 72.6763 14.1425 72.3306 13.8111C71.9897 13.4749 71.5423 13.3068 70.9883 13.3068C70.5195 13.3068 70.11 13.4347 69.7596 13.6903C69.4139 13.9413 69.1441 14.3082 68.9499 14.7912C68.7558 15.2741 68.6587 15.8589 68.6587 16.5455C68.6587 17.2415 68.7534 17.8333 68.9428 18.321C69.137 18.8087 69.4092 19.1804 69.7596 19.4361C70.11 19.6918 70.5195 19.8196 70.9883 19.8196C71.3339 19.8196 71.6441 19.7486 71.9187 19.6065C72.198 19.4645 72.4277 19.2585 72.6076 18.9886C72.7923 18.714 72.913 18.3849 72.9698 18.0014H75.8249C75.7776 18.8348 75.5503 19.5687 75.1431 20.2031C74.7406 20.8329 74.1843 21.3253 73.4741 21.6804C72.7638 22.0355 71.9234 22.2131 70.9528 22.2131ZM86.8388 14.2017L84.0689 14.3722C84.0215 14.1354 83.9197 13.9223 83.7635 13.733C83.6072 13.5388 83.4013 13.3849 83.1456 13.2713C82.8946 13.1529 82.594 13.0938 82.2436 13.0938C81.7749 13.0938 81.3795 13.1932 81.0575 13.392C80.7356 13.5862 80.5746 13.8466 80.5746 14.1733C80.5746 14.4337 80.6787 14.6539 80.8871 14.8338C81.0954 15.0137 81.4529 15.1581 81.9595 15.267L83.9339 15.6648C84.9946 15.8826 85.7853 16.233 86.3061 16.7159C86.8269 17.1989 87.0874 17.8333 87.0874 18.6193C87.0874 19.3343 86.8767 19.9616 86.4553 20.5014C86.0386 21.0412 85.4657 21.4626 84.7365 21.7656C84.0121 22.0639 83.1764 22.2131 82.2294 22.2131C80.7853 22.2131 79.6347 21.9124 78.7777 21.3111C77.9254 20.705 77.4259 19.8812 77.2791 18.8395L80.255 18.6832C80.3449 19.1236 80.5627 19.4598 80.9084 19.6918C81.254 19.919 81.6967 20.0327 82.2365 20.0327C82.7668 20.0327 83.1929 19.9309 83.5149 19.7273C83.8416 19.5189 84.0073 19.2514 84.0121 18.9247C84.0073 18.6501 83.8913 18.4252 83.6641 18.25C83.4368 18.0701 83.0864 17.9328 82.6129 17.8381L80.7237 17.4616C79.6584 17.2486 78.8653 16.8793 78.3445 16.3537C77.8284 15.8281 77.5703 15.1581 77.5703 14.3438C77.5703 13.643 77.7597 13.0393 78.1385 12.5327C78.522 12.026 79.0594 11.6354 79.7507 11.3608C80.4467 11.0862 81.2611 10.9489 82.1939 10.9489C83.5717 10.9489 84.656 11.2401 85.4467 11.8224C86.2422 12.4048 86.7062 13.1979 86.8388 14.2017Z" fill="#356DF3"/>
</svg>
);

const github = "https://github.com/Ankr-network/ankr-docs-nextra";

export default {
  github: github,
  docsRepositoryBase: github,
  projectLink: "https://github.com/Ankr-network/",
  titleSuffix: "— Ankr",
  unstable_faviconGlyph: "⚓️",
  unstable_flexsearch: true,
  floatTOC: true,
  defaultMenuCollapsed: true,
  nextThemes: {
    defaultTheme: "system",
  },
  search: true,
  prevLinks: true,
  nextLinks: true,
// logo and head settings
  logo: logo,
  head: ({ meta, title }) => {
    const description =
      meta.description || "Ankr is a leading Web3 Infrastructure Company";
    const title_ =
      title && !title.startsWith("Ankr")
        ? title + "at Ankr"
        : "Ankr ⚓️ The Web3 Infrastructure Company";

    return (
      <>
        {/* General */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <title>{title_}</title>
        <meta name="favicon" content="/favicon/favicon.ico" />

        {/* SEO */}
        <meta name="description" content={description} />
        <meta name="og:description" content={description} />
        <meta name="og:title" content={title_} />

        <meta name="apple-mobile-web-app-title" content="Ankr Docs" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://nextra.vercel.app/og.png" />
        <meta name="twitter:site:domain" content="docs.multichain.wiki" />
        <meta name="twitter:url" content="https://docs.multichain.wiki" />
        <meta name="og:image" content="https://nextra.vercel.app/og.png" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicon/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <meta name="msapplication-TileImage" content="/favicon/ms-icon-144x144.png" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <Script
          defer
          data-domain="docs.multichain.wiki"
          src="https://plausible.io/js/plausible.js"
        />
      </>
    );
  },
// footer settings
  footer: true,
  footerEditLink: "Edit this page on GitHub →",
  footerText: (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:space-x-16 lg:space-x-28">
      <div className="flex flex-col">
        MIT {new Date().getFullYear()} © Ankr
      </div>
      <div className="flex flex-col">
        <div className="text-current font-bold pb-3">Products</div>
        <a
          href="https://www.ankr.com/build/nodes/"
          target="_blank"
          rel="noopener"
          className="no-underline text-current font-semibold"
        >
          Node Service
        </a>
        <a
          href="https://www.ankr.com/staking/"
          target="_blank"
          rel="noopener"
          className="no-underline text-current font-semibold"
        >
          Ankr Staking
        </a>
        <a
          href="https://www.ankr.com/ankr-protocol/"
          target="_blank"
          rel="noopener"
          className="no-underline text-current font-semibold"
        >
          Ankr Protocol
        </a>
      </div>
      <div className="flex flex-col">
        <div className="text-current font-bold pb-3">About us</div>
        <a
          href="https://www.ankr.com/docs/learn/reference/ankr-vision"
          target="_blank"
          rel="noopener"
          className="no-underline text-current font-semibold"
        >
          Our Vision
        </a>
        <a
          href="https://www.ankr.com/about/our-purpose/"
          target="_blank"
          rel="noopener"
          className="no-underline text-current font-semibold"
        >
          Our Story
        </a>
        <a
          href="https://www.ankr.com/about/careers/"
          target="_blank"
          rel="noopener"
          className="no-underline text-current font-semibold"
        >
          Careers
        </a>
        <a
          href="https://www.ankr.com/about/team/"
          target="_blank"
          rel="noopener"
          className="no-underline text-current font-semibold"
        >
          Team
        </a>
        <a
          href="https://medium.com/ankr-network"
          target="_blank"
          rel="noopener"
          className="no-underline text-current font-semibold"
        >
          Community
        </a>
      </div>
      <div className="flex flex-col">
        <div className="text-current font-bold pb-3">Socials</div>
        <a
          href="https://twitter.com/ankr"
          target="_blank"
          rel="noopener"
          className="no-underline text-current font-semibold"
        >
          Twitter
        </a>
        <a
          href="https://t.me/ankrnetwork"
          target="_blank"
          rel="noopener"
          className="no-underline text-current font-semibold"
        >
          Telegram
        </a>
        <a
          href="https://discord.gg/ankr/"
          target="_blank"
          rel="noopener"
          className="no-underline text-current font-semibold"
        >
          Discord
        </a>
        <a
          href="https://medium.com/ankr-network"
          target="_blank"
          rel="noopener"
          className="no-underline text-current font-semibold"
        >
          Medium
        </a>
        <a
          href="https://www.reddit.com/r/Ankrofficial/"
          target="_blank"
          rel="noopener"
          className="no-underline text-current font-semibold"
        >
          Reddit
        </a>
      </div>
    </div>
  ),
};

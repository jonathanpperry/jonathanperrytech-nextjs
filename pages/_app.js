import "../styles/globals.css";
import Link from "next/link";
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
/* Tell Font Awesome to skip adding the CSS automatically since it's being imported above */
config.autoAddCss = false 

library.add(fab)

function MyApp({ Component, pageProps }) {
  return (
    <div className="mx-auto my-8 w-3/5">
      <header>
        <h1 className="text-6xl font-bold text-center">My Blog</h1>
        <nav className="my-4">
          <ul className="flex flex-row justify-center space-x-4">
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;

import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
export default function About() {
  return (
    <div>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h2 className="text-2xl font-bold text-center mb-4">About Me</h2>
        <div class="max-w-md mx-auto shadow-md overflow-hidden md:max-w-2xl">
          <div class="md:flex">
            <div class="md:flex-shrink-0 p-4">
              <img
                class="h-48 w-full object-cover md:w-48"
                src="/mepic.jpg"
                alt="Picture of the author"
              />
            </div>
            <div class="self-center">
              <p>
                Hello and nice to meet you! My name is Jonathan and I'm a
                software engineer living in Tokyo. Some of my hobbies include
                reading, running, and learning Japanese. If you come across my
                profile, do not hesistate to reach out to me via Linkedin.
              </p>
            </div>
          </div>
        </div>
        <div class="py-8">
          <p>
            Recently, I have been learning Next.js and Tailwindcss. Despite my
            education being in OOP, I have become interested mostly in becoming
            a front-end developer. I think I'll always be interested in
            full-stack, but designing and building beautiful, responsive layouts
            is something I can see myself focusing on in the future.
          </p>
        </div>
        <div class="flex flex-row bottom-0 border-2 h-16 content-between">
          <div className="pr-3 w-full self-center text-center">
            <a href="https://www.github.com/jonathanpperry" target="_blank">
              <FontAwesomeIcon icon={["fab", "github"]} size="2x" />
            </a>
          </div>
          <div className="pr-3 w-full self-center text-center">
            <a href="https://www.facebook.com/jonnyramen" target="_blank">
              <FontAwesomeIcon icon={["fab", "facebook"]} size="2x" />
            </a>
          </div>
          <div className="pr-3 w-full self-center text-center">
            <a href="https://www.instagram.com/jonathanpperry" target="_blank">
              <FontAwesomeIcon icon={["fab", "instagram"]} size="2x" />
            </a>
          </div>
          <div className="pr-3 w-full self-center text-center">
            <a
              href="https://www.linkedin.com/in/jonathanpperry"
              target="_blank"
            >
              <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" />
            </a>
          </div>
          <div className="pr-3 w-full self-center text-center">
            <a href="https://twitter.com/jonathanpperry" target="_blank">
              <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" />
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

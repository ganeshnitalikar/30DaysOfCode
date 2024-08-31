import React, { useEffect } from "react";
import CustomLink from "./CustomLink";

function Card() {
  const [clicked, setClicked] = React.useState(false);
  const openInNewTab = (e, url) => {
    e.preventDefault();
    window.open(url, "_blank");

  };
  return (
    <article className="rounded-xl border border-gray-700 bg-gray-800 p-4">
      <div className="flex items-center gap-4">
        <img
          alt=""
          src="https://media.licdn.com/dms/image/v2/C4E03AQEGfC9i_vDpWw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1642590084175?e=1730332800&v=beta&t=GPcFCh-k3JuYh2-ZcZB_ocgF0NZivGxzUwhdt5JT0kI"
          className="size-16 rounded-full object-cover"
        />

        <div>
          <h3 className="text-lg font-medium text-white">Ganesh Nitalikar</h3>

          <div className="flow-root">
            <ul className="-m-1 flex flex-wrap">
              <li className="p-1 leading-none">
                <a
                  className="text-xs font-medium text-gray-300 hover:cursor-pointer hover:font-bold"
                  onClick={(e) =>
                    openInNewTab(e, "https://github.com/ganeshnitalikar")
                  }
                >
                  GitHub
                </a>
              </li>
              <li className="p-1 leading-none">
                <a
                  className="text-xs font-medium text-gray-300 hover:cursor-pointer hover:font-bold"
                  onClick={(e) =>
                    openInNewTab(
                      e,
                      "https://www.linkedin.com/in/ganeshnitalikar/"
                    )
                  }
                >
                  LinkedIn
                </a>
              </li>
              <li className="p-1 leading-none">
                <a
                  className="text-xs font-medium text-gray-300 hover:cursor-pointer hover:font-bold"
                  onClick={(e) =>
                    openInNewTab(e, "https://ganeshnitalikar.netlify.app/")
                  }
                >
                  Portfolio
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <ul className="mt-4 space-y-2">
        <li>
          <p className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
            <strong className="font-medium text-white">ChattiCure</strong>

            <p className="mt-1 text-xs font-medium text-gray-300">
              
                  Medical Chatbot for health patients.

            </p>
          </p>
        </li>

        <li>
          <p
            href="#"
            className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600"
          >
            <strong className="font-medium text-white">Chatter</strong>

            <p className="mt-1 text-xs font-medium text-gray-300">
                      Realtime Chat Application.
            </p>
          </p>
        </li>
      </ul>
    </article>
  );
}

export default Card;

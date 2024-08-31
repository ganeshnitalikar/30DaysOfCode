import React from 'react'

function Skills() {
  const openInNewTab = (e, url) => {
    e.preventDefault();
    window.open(url, "_blank");
  };
  return (
    <section>
      <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
          <div className="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Frontend Developer
            </h2>

            <p className="mt-4 text-gray-600">
              I'm a Computer Science graduate with a strong foundation in Java,
              Flutter, and frontend technologies like HTML, CSS, and JavaScript.
              I've developed projects such as a short video sharing platform and
              a Firebase-integrated chat app. I'm passionate about continuous
              learning, actively participating in coding challenges and sharing
              my technical insights through blogging. I'm focused on expanding
              my skills and applying them in real-world software development
              roles.
            </p>

            <a
              onClick={(e) =>
                openInNewTab(e, "https://ganeshnitalikar.netlify.app/")
              }
              href="#"
              className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Know More About Me
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            <a
              className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
              href="#"
            >
              <span className="inline-block rounded-lg bg-gray-50 p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                >
                  <path fill="#ffd600" d="M6,42V6h36v36H6z"></path>
                  <path
                    fill="#000001"
                    d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"
                  ></path>
                </svg>
              </span>

              <h2 className="mt-2 font-bold">Javascript</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                Adept in writing efficient and interactive scripts for web
                applications.
              </p>
            </a>

            <a
              className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
              href="#"
            >
              <span className="inline-block rounded-lg bg-gray-50 p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                >
                  <linearGradient
                    id="SNASnMitCxQrIYk4GDibta_v8RpPQUwv0N8_gr1"
                    x1="18.208"
                    x2="34.159"
                    y1="2.413"
                    y2="46.236"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="#f09701"></stop>
                    <stop offset="1" stop-color="#e36001"></stop>
                  </linearGradient>
                  <path
                    fill="url(#SNASnMitCxQrIYk4GDibta_v8RpPQUwv0N8_gr1)"
                    d="M7.192,7.176l2.627,29.77c0.109,1.237,0.97,2.28,2.164,2.621l10.643,3.041	c0.898,0.257,1.849,0.257,2.747,0l10.643-3.041c1.194-0.341,2.055-1.383,2.164-2.621l2.627-29.77C40.911,6.006,39.99,5,38.816,5	H9.184C8.01,5,7.089,6.006,7.192,7.176z"
                  ></path>
                  <path
                    fill="#f09601"
                    d="M24,8v31.9l9.876-2.822c0.797-0.228,1.371-0.924,1.443-1.749l2.286-26.242	C37.656,8.502,37.196,8,36.609,8H24z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5L24,25z M32.9,17l0.3-4H24v4H32.9z"
                  ></path>
                  <path
                    fill="#d6e0e9"
                    d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"
                  ></path>
                  <path
                    d="M33.2,13l-0.3,4H24h-4.9l0.3,4H24h8.6l-0.7,11.5L24,35.1l-7.9-2.6L15.7,27h4l0.2,2.5l4.1,1.4l4.1-1.4l0.3-4.5H24h-8.4 l-0.7-12H24H33.2 M34.278,12H33.2H24h-9.1h-1.06l0.062,1.058l0.7,12L14.657,26h-0.032l0.078,1.073l0.4,5.5l0.049,0.668 l0.636,0.209l7.9,2.6L24,36.153l0.313-0.103l7.9-2.6l0.644-0.212l0.041-0.677l0.7-11.5L33.663,20H32.6H24h-3.672l-0.15-2H24h8.9 h0.928l0.069-0.925l0.3-4L34.278,12L34.278,12z M20.623,26H24h3.331l-0.185,2.769L24,29.843l-3.156-1.077l-0.148-1.846L20.623,26 L20.623,26z"
                    opacity=".05"
                  ></path>
                  <path
                    d="M33.2,13l-0.3,4H24h-4.9l0.3,4H24h8.6l-0.7,11.5L24,35.1l-7.9-2.6L15.7,27h4l0.2,2.5l4.1,1.4l4.1-1.4l0.3-4.5H24h-8.4 l-0.7-12H24H33.2 M33.739,12.5H33.2H24h-9.1h-0.53l0.031,0.529l0.7,12l0.027,0.471H15.6H24h3.866l-0.242,3.634L24,30.372 l-3.628-1.239l-0.174-2.173l-0.037-0.46H19.7h-4h-0.538l0.039,0.536l0.4,5.5l0.024,0.334l0.318,0.105l7.9,2.6L24,35.626 l0.156-0.051l7.9-2.6l0.322-0.106l0.021-0.339l0.7-11.5l0.032-0.53H32.6H24h-4.136l-0.225-3H24h8.9h0.464l0.035-0.463l0.3-4 L33.739,12.5L33.739,12.5z"
                    opacity=".07"
                  ></path>
                </svg>
              </span>

              <h2 className="mt-2 font-bold">React</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                Skilled in creating dynamic and responsive web applications
                using React hooks and state management.
              </p>
            </a>

            <a
              className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
              href="#"
            >
              <span className="inline-block rounded-lg bg-gray-50 p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#d43a02"
                    d="M23.65,24.898c-0.998-1.609-1.722-2.943-2.725-5.455C19.229,15.2,31.24,11.366,26.37,3.999	c2.111,5.089-7.577,8.235-8.477,12.473C17.07,20.37,23.645,24.898,23.65,24.898z"
                  ></path>
                  <path
                    fill="#d43a02"
                    d="M23.878,17.27c-0.192,2.516,2.229,3.857,2.299,5.695c0.056,1.496-1.447,2.743-1.447,2.743	s2.728-0.536,3.579-2.818c0.945-2.534-1.834-4.269-1.548-6.298c0.267-1.938,6.031-5.543,6.031-5.543S24.311,11.611,23.878,17.27z"
                  ></path>
                  <linearGradient
                    id="P9ujQJgz7XN9Qbny9S64Ha_Pd2x9GWu9ovX_gr1"
                    x1="22.677"
                    x2="30.737"
                    y1="21.174"
                    y2="43.318"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="#5c65d6"></stop>
                    <stop offset=".999" stop-color="#464eb0"></stop>
                  </linearGradient>
                  <path
                    fill="url(#P9ujQJgz7XN9Qbny9S64Ha_Pd2x9GWu9ovX_gr1)"
                    d="M32.084,25.055c1.754-0.394,3.233,0.723,3.233,2.01c0,2.901-4.021,5.643-4.021,5.643 s6.225-0.742,6.225-5.505C37.521,24.053,34.464,23.266,32.084,25.055z M29.129,27.395c0,0,1.941-1.383,2.458-1.902 c-4.763,1.011-15.638,1.147-15.638,0.269c0-0.809,3.507-1.638,3.507-1.638s-7.773-0.112-7.773,2.181 C11.683,28.695,21.858,28.866,29.129,27.395z"
                  ></path>
                  <linearGradient
                    id="P9ujQJgz7XN9Qbny9S64Hb_Pd2x9GWu9ovX_gr2"
                    x1="19.498"
                    x2="27.296"
                    y1="22.77"
                    y2="44.196"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="#5c65d6"></stop>
                    <stop offset=".999" stop-color="#464eb0"></stop>
                  </linearGradient>
                  <path
                    fill="url(#P9ujQJgz7XN9Qbny9S64Hb_Pd2x9GWu9ovX_gr2)"
                    d="M27.935,29.571 c-4.509,1.499-12.814,1.02-10.354-0.993c-1.198,0-2.974,0.963-2.974,1.889c0,1.857,8.982,3.291,15.63,0.572L27.935,29.571z"
                  ></path>
                  <linearGradient
                    id="P9ujQJgz7XN9Qbny9S64Hc_Pd2x9GWu9ovX_gr3"
                    x1="18.698"
                    x2="26.59"
                    y1="23.455"
                    y2="45.14"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="#5c65d6"></stop>
                    <stop offset=".999" stop-color="#464eb0"></stop>
                  </linearGradient>
                  <path
                    fill="url(#P9ujQJgz7XN9Qbny9S64Hc_Pd2x9GWu9ovX_gr3)"
                    d="M18.686,32.739 c-1.636,0-2.695,1.054-2.695,1.822c0,2.391,9.76,2.632,13.627,0.205l-2.458-1.632C24.271,34.404,17.014,34.579,18.686,32.739z"
                  ></path>
                  <linearGradient
                    id="P9ujQJgz7XN9Qbny9S64Hd_Pd2x9GWu9ovX_gr4"
                    x1="18.03"
                    x2="25.861"
                    y1="24.198"
                    y2="45.712"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="#5c65d6"></stop>
                    <stop offset=".999" stop-color="#464eb0"></stop>
                  </linearGradient>
                  <path
                    fill="url(#P9ujQJgz7XN9Qbny9S64Hd_Pd2x9GWu9ovX_gr4)"
                    d="M36.281,36.632 c0-0.936-1.055-1.377-1.433-1.588c2.228,5.373-22.317,4.956-22.317,1.784c0-0.721,1.807-1.427,3.477-1.093l-1.42-0.839 C11.26,34.374,9,35.837,9,37.017C9,42.52,36.281,42.255,36.281,36.632z"
                  ></path>
                  <linearGradient
                    id="P9ujQJgz7XN9Qbny9S64He_Pd2x9GWu9ovX_gr5"
                    x1="20.725"
                    x2="28.228"
                    y1="24.582"
                    y2="45.197"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="#5c65d6"></stop>
                    <stop offset=".999" stop-color="#464eb0"></stop>
                  </linearGradient>
                  <path
                    fill="url(#P9ujQJgz7XN9Qbny9S64He_Pd2x9GWu9ovX_gr5)"
                    d="M39,38.604 c-4.146,4.095-14.659,5.587-25.231,3.057C24.341,46.164,38.95,43.628,39,38.604z"
                  ></path>
                </svg>
              </span>

              <h2 className="mt-2 font-bold">Java</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                Proficient in object-oriented programming, data structures, and
                Java collections.
              </p>
            </a>

            <a
              className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
              href="#"
            >
              <span className="inline-block rounded-lg bg-gray-50 p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                >
                  <linearGradient
                    id="gFTOxFpGMtrTwKmyJmDVma_pCvIfmctRaY8_gr1"
                    x1="34.31"
                    x2="21.223"
                    y1="47.31"
                    y2="34.223"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="#0176d0"></stop>
                    <stop offset=".454" stop-color="#0275ce"></stop>
                    <stop offset=".617" stop-color="#0472c7"></stop>
                    <stop offset=".733" stop-color="#076bbc"></stop>
                    <stop offset=".827" stop-color="#0d63ab"></stop>
                    <stop offset=".907" stop-color="#135895"></stop>
                    <stop offset=".933" stop-color="#16538c"></stop>
                  </linearGradient>
                  <polygon
                    fill="url(#gFTOxFpGMtrTwKmyJmDVma_pCvIfmctRaY8_gr1)"
                    points="37,44 25,44 14,33 20,27"
                  ></polygon>
                  <polygon
                    fill="#50e6ff"
                    points="5,24 25,4 37,4 11,30"
                  ></polygon>
                  <polygon
                    fill="#50e6ff"
                    points="37,22 20,39 14,33 25,22"
                  ></polygon>
                  <rect
                    width="8.485"
                    height="8.485"
                    x="15.757"
                    y="28.757"
                    fill="#35c1f1"
                    transform="rotate(-45.001 20 33)"
                  ></rect>
                </svg>
              </span>

              <h2 className="mt-2 font-bold">Flutter</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                Experienced in building cross-platform mobile apps with rich UI
                and seamless performance.
              </p>
            </a>

            <a
              className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
              href="#"
            >
              <span className="inline-block rounded-lg bg-gray-50 p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                >
                  <linearGradient
                    id="SNASnMitCxQrIYk4GDibta_v8RpPQUwv0N8_gr1"
                    x1="18.208"
                    x2="34.159"
                    y1="2.413"
                    y2="46.236"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="#f09701"></stop>
                    <stop offset="1" stop-color="#e36001"></stop>
                  </linearGradient>
                  <path
                    fill="url(#SNASnMitCxQrIYk4GDibta_v8RpPQUwv0N8_gr1)"
                    d="M7.192,7.176l2.627,29.77c0.109,1.237,0.97,2.28,2.164,2.621l10.643,3.041	c0.898,0.257,1.849,0.257,2.747,0l10.643-3.041c1.194-0.341,2.055-1.383,2.164-2.621l2.627-29.77C40.911,6.006,39.99,5,38.816,5	H9.184C8.01,5,7.089,6.006,7.192,7.176z"
                  ></path>
                  <path
                    fill="#f09601"
                    d="M24,8v31.9l9.876-2.822c0.797-0.228,1.371-0.924,1.443-1.749l2.286-26.242	C37.656,8.502,37.196,8,36.609,8H24z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5L24,25z M32.9,17l0.3-4H24v4H32.9z"
                  ></path>
                  <path
                    fill="#d6e0e9"
                    d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"
                  ></path>
                  <path
                    d="M33.2,13l-0.3,4H24h-4.9l0.3,4H24h8.6l-0.7,11.5L24,35.1l-7.9-2.6L15.7,27h4l0.2,2.5l4.1,1.4l4.1-1.4l0.3-4.5H24h-8.4 l-0.7-12H24H33.2 M34.278,12H33.2H24h-9.1h-1.06l0.062,1.058l0.7,12L14.657,26h-0.032l0.078,1.073l0.4,5.5l0.049,0.668 l0.636,0.209l7.9,2.6L24,36.153l0.313-0.103l7.9-2.6l0.644-0.212l0.041-0.677l0.7-11.5L33.663,20H32.6H24h-3.672l-0.15-2H24h8.9 h0.928l0.069-0.925l0.3-4L34.278,12L34.278,12z M20.623,26H24h3.331l-0.185,2.769L24,29.843l-3.156-1.077l-0.148-1.846L20.623,26 L20.623,26z"
                    opacity=".05"
                  ></path>
                  <path
                    d="M33.2,13l-0.3,4H24h-4.9l0.3,4H24h8.6l-0.7,11.5L24,35.1l-7.9-2.6L15.7,27h4l0.2,2.5l4.1,1.4l4.1-1.4l0.3-4.5H24h-8.4 l-0.7-12H24H33.2 M33.739,12.5H33.2H24h-9.1h-0.53l0.031,0.529l0.7,12l0.027,0.471H15.6H24h3.866l-0.242,3.634L24,30.372 l-3.628-1.239l-0.174-2.173l-0.037-0.46H19.7h-4h-0.538l0.039,0.536l0.4,5.5l0.024,0.334l0.318,0.105l7.9,2.6L24,35.626 l0.156-0.051l7.9-2.6l0.322-0.106l0.021-0.339l0.7-11.5l0.032-0.53H32.6H24h-4.136l-0.225-3H24h8.9h0.464l0.035-0.463l0.3-4 L33.739,12.5L33.739,12.5z"
                    opacity=".07"
                  ></path>
                </svg>
              </span>

              <h2 className="mt-2 font-bold">HTML/CSS</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                Competent in crafting clean, semantic HTML and styling with
                modern CSS techniques.
              </p>
            </a>

            <a
              className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
              href="#"
            >
              <span className="inline-block rounded-lg bg-gray-50 p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#F4511E"
                    d="M42.2,22.1L25.9,5.8C25.4,5.3,24.7,5,24,5c0,0,0,0,0,0c-0.7,0-1.4,0.3-1.9,0.8l-3.5,3.5l4.1,4.1c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3c0,0.5-0.1,0.9-0.3,1.3l4,4c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3s-1.3,3-3,3c-1.7,0-3-1.3-3-3c0-0.5,0.1-0.9,0.3-1.3l-4-4c-0.1,0-0.2,0.1-0.3,0.1v10.4c1.2,0.4,2,1.5,2,2.8c0,1.7-1.3,3-3,3s-3-1.3-3-3c0-1.3,0.8-2.4,2-2.8V18.8c-1.2-0.4-2-1.5-2-2.8c0-0.5,0.1-0.9,0.3-1.3l-4.1-4.1L5.8,22.1C5.3,22.6,5,23.3,5,24c0,0.7,0.3,1.4,0.8,1.9l16.3,16.3c0,0,0,0,0,0c0.5,0.5,1.2,0.8,1.9,0.8s1.4-0.3,1.9-0.8l16.3-16.3c0.5-0.5,0.8-1.2,0.8-1.9C43,23.3,42.7,22.6,42.2,22.1z"
                  ></path>
                </svg>
              </span>

              <h2 className="mt-2 font-bold">Git/GitHub</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                Proficient in version control using Git, with experience in
                managing and collaborating on projects through GitHub.
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills
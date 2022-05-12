import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: style */

const LogoHeader = (props: SvgProps) => (
  <Svg
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    x={0}
    y={0}
    viewBox="0 0 331 208"
    style={{
      enableBackground: "new 0 0 331 208",
    }}
    xmlSpace="preserve"
    {...props}
    width={167.717} height={74.064}
  >
    <Path
      d="M112.9 191.8C-56.2 122 81.2-4.1 257.4 27.4 99.7-16.4-86.2 112.2 112.9 191.8z"
      fill="#026a3a"
    />
    <Path
      className="st1"
      d="M326.6 44.2C261.7 6.2 163.2 1.7 93 30-28.9 79.6 5.4 176.2 148.2 204 31.1 186.5-36.6 115 28.1 55 97-10.4 255-9.1 326.6 44.2z"
      fill={'#20285A'}
    />
    <Path
      className="st2"
      d="M275.7 58.8v21.8c1.7-1.7 3.5-3.7 5.4-4.6 1.9-.9 4-1.3 6.3-1.3 8.8 0 12.6 5.5 12.7 10.7l-.4 62.2h-17.9l-.6-56.7c-.2-3.3-4.9-3.1-4.9-.1l-.6 56.8h-19.6l-.1-88.7h19.7v-.1zM202.8 112.8h-25.3v15.1c0 11.6 6.6 8.4 6.6-1.4v-8.1h18.7v13.9c0 6.6-3.1 11.1-11.2 14.1-6.9 1.6-13.8 1.5-20.8.3-7.4-1.3-12.1-8.7-12.1-18.7V90.4c0-24.6 43.3-21.7 43.6-3l.5 25.4zm-19.6-11V94c0-3.7-.2-6.1-.5-7.2-.4-1.1-1.1-1.6-2.2-1.6-1.4 0-2.2.5-2.5 1.4-.3.9-.5 3.4-.5 7.4v7.7h5.7v.1zM150.5 63.6v13.1h5.6v11.4h-5.6v38.4c0 4.7.2 7.4.7 7.9.4.5 1.7 1.5 4.9 1.5v11.6h-6.9c-18.5 0-16.8-5.3-17-12.9-.1-2 0-2.8 0-10V88.1h-4.7V76.7h4.8V63.6h18.2zM86.2 58.9h39.2v11.9h-18.7v20.7H125v12.9h-18.3v29.5H125v13.6H86l.2-88.6zM251.2 99.5h-18.5v-6.8c0-3.6-.2-5.9-.6-6.8-.4-.9-1.3-1.4-2.6-1.4-1.5 0-2.5.5-2.9 1.6-.4 1.1-.6 3.5-.6 7.1v33.5c0 3.5.2 5.8.6 6.9.4 1.1 1.3 1.6 2.8 1.6 1.4 0 2.3-.5 2.7-1.6.4-1.1.8-3.6.6-7.5l-.2-8.3h18.3c0 13.7 4.9 28.7-21.2 29.6-5.4.2-10.1-1-13.7-2.8-7-3.7-7.8-8.5-8-16.8V88.5c0-5.6 2.5-15.5 18.2-15.5h5.8c12.1 0 19 5.8 19.2 13.6v12.9h.1z"
      fill={'#026A3A'}
    />
    <Path
      d="M86 173v-12.9h1.5v1.2c.3-.5.7-.8 1.2-1.1.4-.2 1-.4 1.6-.4.8 0 1.5.2 2.2.6.6.4 1.1 1 1.4 1.7.3.7.5 1.6.5 2.5 0 1-.2 1.8-.5 2.6-.4.8-.9 1.4-1.5 1.8-.7.4-1.4.6-2.1.6-.5 0-1-.1-1.5-.3-.4-.2-.8-.5-1.1-.8v4.5H86zm1.4-8.2c0 1.2.3 2.1.8 2.7.5.6 1.1.9 1.8.9s1.3-.3 1.9-.9c.5-.6.8-1.5.8-2.8 0-1.2-.3-2.1-.8-2.7-.5-.6-1.1-.9-1.8-.9s-1.3.3-1.8.9c-.6.7-.9 1.6-.9 2.8zm9.7 4.7v-12.9h1.6v12.9h-1.6zm11.4-1.2c-.6.5-1.2.8-1.7 1.1-.6.2-1.2.3-1.8.3-1.1 0-1.9-.2-2.4-.8-.6-.5-.8-1.1-.8-1.9 0-.5.1-.9.3-1.3.2-.4.5-.7.8-.9.3-.2.7-.4 1.2-.5.3-.1.8-.2 1.4-.2 1.3-.2 2.3-.3 2.9-.5v-.4c0-.6-.2-1.1-.5-1.4-.4-.4-1-.5-1.9-.5-.8 0-1.3.1-1.7.4-.4.3-.6.7-.8 1.4l-1.6-.2c.1-.7.4-1.2.7-1.6.3-.4.8-.7 1.4-.9.6-.2 1.4-.3 2.2-.3.8 0 1.5.1 2 .3.5.2.9.4 1.1.7.2.3.4.6.5 1.1.1.3.1.8.1 1.5v2.1c0 1.5 0 2.4.1 2.8.1.4.2.8.4 1.1h-1.7c-.1-.6-.2-1-.2-1.4zm-.2-3.5c-.6.2-1.5.4-2.7.6-.7.1-1.1.2-1.4.3-.3.1-.5.3-.6.5-.2.2-.2.5-.2.8 0 .4.2.8.5 1.1.3.3.8.4 1.4.4.6 0 1.2-.1 1.7-.4.5-.3.8-.6 1.1-1.1.2-.4.3-.9.3-1.6v-.6h-.1zm5 8.2-.2-1.5c.4.1.7.1.9.1.4 0 .7-.1.9-.2.2-.1.4-.3.5-.5.1-.2.3-.5.5-1.2 0-.1.1-.2.1-.4l-3.6-9.4h1.8l2 5.4c.3.7.5 1.4.7 2.2.2-.7.4-1.4.7-2.1l2.1-5.4h1.6l-3.7 9.5c-.4 1-.7 1.7-.9 2.1-.3.5-.6.9-1 1.1-.4.2-.8.4-1.3.4-.4.1-.7.1-1.1-.1zm10.3-14.6v-1.8h1.6v1.8h-1.6zm0 11.1v-9.3h1.6v9.3h-1.6zm5 0v-9.3h1.5v1.3c.7-1 1.7-1.5 3.1-1.5.6 0 1.1.1 1.6.3.5.2.8.5 1.1.8.2.3.4.7.5 1.2.1.3.1.8.1 1.5v5.7h-1.6v-5.7c0-.6-.1-1.1-.2-1.4-.1-.3-.4-.6-.7-.8-.3-.2-.7-.3-1.1-.3-.7 0-1.3.2-1.8.6-.5.4-.8 1.2-.8 2.4v5.1h-1.7v.1zm10.9.7 1.6.2c.1.5.3.8.5 1 .4.3 1 .4 1.7.4.8 0 1.3-.1 1.7-.4.4-.3.7-.7.8-1.2.1-.3.1-1 .1-2-.7.8-1.6 1.2-2.7 1.2-1.3 0-2.3-.5-3.1-1.4-.7-.9-1.1-2-1.1-3.3 0-.9.2-1.7.5-2.5s.8-1.3 1.4-1.7c.6-.4 1.4-.6 2.2-.6 1.1 0 2.1.4 2.8 1.3v-1.1h1.5v8.1c0 1.5-.2 2.5-.5 3.1-.3.6-.8 1.1-1.4 1.4-.7.4-1.5.5-2.4.5-1.1 0-2.1-.3-2.8-.8-.5-.4-.9-1.2-.8-2.2zm1.3-5.6c0 1.2.3 2.1.8 2.7.5.6 1.1.8 1.9.8.7 0 1.4-.3 1.9-.8.5-.6.8-1.4.8-2.6 0-1.1-.3-2-.8-2.6-.5-.6-1.2-.9-1.9-.9s-1.3.3-1.8.9c-.6.5-.9 1.4-.9 2.5zm16.8 4.9h-1.5v-12.9h1.6v4.6c.7-.8 1.6-1.3 2.6-1.3.6 0 1.2.1 1.7.3.5.2 1 .6 1.3 1 .3.4.6.9.8 1.5.2.6.3 1.2.3 1.9 0 1.6-.4 2.8-1.2 3.7-.8.9-1.8 1.3-2.9 1.3-1.1 0-2-.5-2.7-1.4v1.3zm0-4.8c0 1.1.2 1.9.5 2.4.5.8 1.2 1.2 2.1 1.2.7 0 1.3-.3 1.8-.9.5-.6.8-1.5.8-2.7 0-1.2-.3-2.1-.7-2.7-.5-.6-1.1-.9-1.8-.9s-1.3.3-1.8.9c-.6.7-.9 1.6-.9 2.7zm9.7 8.3-.2-1.5c.4.1.7.1.9.1.4 0 .7-.1.9-.2.2-.1.4-.3.5-.5.1-.2.3-.5.5-1.2 0-.1.1-.2.1-.4l-3.6-9.4h1.8l2 5.4c.3.7.5 1.4.7 2.2.2-.7.4-1.4.7-2.1l2.1-5.4h1.6l-3.7 9.5c-.4 1-.7 1.7-.9 2.1-.3.5-.6.9-1 1.1-.4.2-.8.4-1.3.4-.4.1-.8.1-1.1-.1zm18.9-5 .2 1.4c-.5.1-.9.1-1.2.1-.6 0-1.1-.1-1.4-.3-.3-.2-.6-.4-.7-.7-.1-.3-.2-.9-.2-1.9v-5.4h-1.2V160h1.2v-2.3l1.6-.9v3.3h1.6v1.2h-1.6v5.5c0 .5 0 .7.1.9l.3.3c.1.1.3.1.6.1.2 0 .4 0 .7-.1zm2.5 1.5v-12.9h1.6v4.6c.8-.9 1.7-1.3 2.9-1.3.7 0 1.3.1 1.9.4.5.3.9.6 1.1 1.1.2.5.3 1.2.3 2.1v5.9h-1.6v-5.9c0-.8-.2-1.4-.5-1.7-.4-.4-.9-.5-1.5-.5-.5 0-.9.1-1.4.4-.4.2-.7.6-.9 1-.2.4-.3 1-.3 1.7v5.1h-1.6zm17.8-3.1 1.7.2c-.3 1-.8 1.7-1.5 2.2-.7.5-1.6.8-2.8.8-1.4 0-2.5-.4-3.3-1.3-.8-.8-1.2-2-1.2-3.5 0-1.6.4-2.8 1.2-3.7.8-.9 1.9-1.3 3.2-1.3 1.3 0 2.3.4 3.1 1.3.8.8 1.2 2 1.2 3.6v.4H201c.1 1 .4 1.8.9 2.4.5.5 1.2.8 2 .8.6 0 1.1-.2 1.5-.5.5-.2.8-.7 1.1-1.4zm-5.4-2.5h5.4c-.1-.8-.3-1.4-.6-1.8-.5-.6-1.2-.9-2-.9-.7 0-1.4.2-1.9.7-.5.5-.8 1.2-.9 2zm15.1 5.6v-9.3h1.5v1.4c.4-.7.7-1.1 1-1.3.3-.2.7-.3 1-.3.5 0 1.1.2 1.7.5l-.6 1.5c-.4-.2-.8-.3-1.2-.3-.4 0-.7.1-1 .3-.3.2-.5.5-.6.9-.2.6-.3 1.2-.3 1.8v4.9h-1.5v-.1zm13.4 0v-1.4c-.8 1.1-1.8 1.6-3.1 1.6-.6 0-1.1-.1-1.6-.3-.5-.2-.9-.5-1.1-.8-.2-.3-.4-.7-.5-1.2-.1-.3-.1-.8-.1-1.5v-5.8h1.6v5.2c0 .8 0 1.4.1 1.7.1.4.3.7.7 1 .3.2.7.4 1.2.4s.9-.1 1.4-.4c.4-.2.7-.6.9-1 .2-.4.3-1 .3-1.8v-5h1.6v9.3h-1.4zm4.9 0v-12.9h1.6v12.9h-1.6zm11.6-3.1 1.7.2c-.3 1-.8 1.7-1.5 2.2-.7.5-1.6.8-2.8.8-1.4 0-2.5-.4-3.3-1.3-.8-.8-1.2-2-1.2-3.5 0-1.6.4-2.8 1.2-3.7.8-.9 1.9-1.3 3.2-1.3 1.3 0 2.3.4 3.1 1.3.8.8 1.2 2 1.2 3.6v.4h-7.2c.1 1 .4 1.8.9 2.4.5.5 1.2.8 2 .8.6 0 1.1-.2 1.5-.5.6-.2 1-.7 1.2-1.4zm-5.3-2.5h5.4c-.1-.8-.3-1.4-.6-1.8-.5-.6-1.2-.9-2-.9-.7 0-1.4.2-1.9.7-.6.5-.9 1.2-.9 2zm9.3 2.8 1.6-.2c.1.6.3 1.1.8 1.4.4.3 1 .5 1.7.5s1.3-.2 1.7-.4c.4-.3.5-.6.5-1s-.2-.6-.5-.8c-.2-.1-.8-.3-1.7-.5-1.2-.3-2-.5-2.5-.8-.5-.2-.8-.5-1.1-.9-.2-.4-.4-.8-.4-1.3 0-.4.1-.8.3-1.2.2-.4.5-.7.8-.9.3-.2.6-.3 1-.5.4-.1.9-.2 1.4-.2.8 0 1.4.1 2 .3.6.2 1 .5 1.3.9.3.4.5.8.6 1.4l-1.6.2c-.1-.5-.3-.9-.6-1.1-.3-.3-.8-.4-1.5-.4s-1.3.1-1.6.4c-.3.2-.5.5-.5.8 0 .2.1.4.2.6.1.2.3.3.6.4.2.1.6.2 1.4.4 1.2.3 2 .5 2.4.7.5.2.8.5 1.1.8.3.4.4.8.4 1.4 0 .5-.2 1-.5 1.5s-.8.8-1.4 1.1c-.6.3-1.3.4-2 .4-1.3 0-2.2-.3-2.9-.8-.4-.5-.8-1.2-1-2.2z"
      fill="#20285a"
    />
    <Path
      className="st1"
      d="M258.3 157.6v-3.4h-1.1v-.6h2.8v.6h-1.1v3.4h-.6zm2.1 0v-4h.8l.9 3.2.8-3.2h.8v4h-.5v-3.4l-.9 3.4h-.5l-.9-3.4v3.4h-.5zM307.4 136.3c.9 0 1.8.2 2.7.7.9.5 1.6 1.2 2.1 2s.8 1.8.8 2.8c0 1-.3 1.9-.8 2.8-.5.9-1.2 1.6-2 2.1-.9.5-1.8.7-2.8.7v-.9c.8 0 1.5-.2 2.3-.6.8-.4 1.3-1 1.7-1.7.4-.7.6-1.5.6-2.3 0-.8-.2-1.5-.6-2.3s-1-1.3-1.8-1.7c-.7-.4-1.5-.6-2.3-.6v-1h.1zm0 6.4c.3.2.5.6.9 1.3l.5 1h1.2l-.8-1.2c-.3-.5-.6-1-.9-1.2-.1-.1-.3-.3-.5-.3.5 0 .9-.2 1.3-.5.3-.3.5-.7.5-1.1 0-.3-.1-.6-.3-.9-.2-.3-.4-.5-.8-.6-.3-.1-.6-.1-1.1-.2v.8c.3 0 .5 0 .6.1.2 0 .3.2.4.3.1.2.1.3.1.5 0 .3-.1.5-.3.6-.2.2-.5.3-.8.3v1.1zm0 4.6c-1 0-1.9-.3-2.8-.7-.9-.5-1.5-1.2-2-2.1-.5-.9-.8-1.8-.8-2.8 0-1 .3-1.9.8-2.8.5-.9 1.2-1.6 2.1-2 .9-.5 1.8-.7 2.7-.7v.9c-.8 0-1.5.2-2.3.6-.8.4-1.3 1-1.8 1.7-.4.8-.6 1.5-.6 2.3 0 .8.2 1.6.6 2.3.4.8 1 1.3 1.7 1.7.8.4 1.5.6 2.3.6v1h.1zm0-8.4H305v6h1v-2.5h.5c.4 0 .6.1.8.2l.1.1v-1.2H306v-1.8h1.5v-.8z"
      fill={'#20285A'}
    />
  </Svg>
)

export default LogoHeader
import { RecoilRoot } from 'recoil'
import '../styles/globals.css'
import ProgressBar from "@badrap/bar-of-progress";
import Router from 'next/router'

// const progress = new ProgressBar({
//   size:4,
//   color:'white',
//   className:'z-50',
//   delay:100,
// })

// Router.events.on('routeChange', progress.start)
// Router.events.on('routeChangeComplete', progress.finish)
// Router.events.on('routeChangeError', progress.finish)


function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
    )
}

export default MyApp

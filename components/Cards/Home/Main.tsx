import clsx from "clsx";
import { lazy, Suspense, useEffect, useState } from "react";
import CardTemplate from "../Template";
import dynamic from 'next/dynamic'
import axios from "axios";

const DynamicComponentWithCustomLoading = dynamic(
  () => import("../../lazyVideo"),
  { loading: () => <h1 className="text-xl white">LOADING</h1>}
)

const LazyVideo = lazy(() => import("../../lazyVideo"));

export default function Contact(): JSX.Element {
  return (
    <CardTemplate>
      <div className="flex flex-col md:flex-row my-auto">
        <section className="mb-4 md:mr-4 md:mb-0">
          {/* <img
            className="max-w-sm md:max-w-md"
            src="/logo-static-1080.png"
            alt="DJ clan logo"
            /> */}
          {/* <video className="max-w-sm md:max-w-md" loop autoPlay muted>
              <source src="/0001-0060.webm"></source>
            </video> */}
          <AnimatedClanLogo />
        </section>
        <section className="mt-4 md:ml-4 md:mt-0 w-md">
          <article>
            <h1 className="text-3xl">Announcements</h1>
            <p>This is part of the announcements</p>
            <p>This is part of the announcements</p>
            <p>This is part of the announcements</p>
            <p>This is part of the announcements</p>
            <p>This is part of the announcements</p>
          </article>
          <article>
            <h1 className="text-3xl">Announcements</h1>
            <p>This is part of the announcements</p>
            <p>This is part of the announcements</p>
            <p>This is part of the announcements</p>
            <p>This is part of the announcements</p>
            <p>This is part of the announcements</p>
            <p>This is part of the announcements</p>
            <p>This is part of the announcements</p>
            <p>This is part of the announcements</p>
            <p>This is part of the announcements</p>
            <p>This is part of the announcements</p>
          </article>
        </section>
      </div>
    </CardTemplate>
  );
}

function AnimatedClanLogo(): JSX.Element {
  const [blob, setBlob] = useState<string>("")
  const [loading, setLoading] = useState<Boolean>(true)
  const [ready, setReady] = useState<Boolean>(false)

  useEffect(() => {
    console.log('开始获取动画视频')
    console.time('动画视频-timer')
    axios.get('http://localhost:3000/0001-0060.webm', { headers: { Accept: 'video/webm;charset=UTF-8' }, responseType: "blob" } )
    .then(response => {
        const myUrl = (window.URL || window.webkitURL).createObjectURL( new Blob([response.data]) ); // response.data.data
        console.log(myUrl)
        setLoading(false)
        setBlob(myUrl)
        console.timeEnd('动画视频-timer')
    })
  }, [])

  return (
    <div className="relative animated-logo">
      <div className="absolute">
        <img 
          src="untitled1.png" 
          className={clsx("opacity-100 transition-opacity duration-500", ready && !loading && "opacity-0")}
        />
      </div>
      
      {
        <video
        className={clsx(!loading && "!opacity-100", "opacity-0 transition-opacity duration-500")}
          loop
          autoPlay
          muted
          src={blob}
          preload="metadata"
          onLoadedData={() => setReady(true)}
        >
        </video>
      }
    </div>
  );
}

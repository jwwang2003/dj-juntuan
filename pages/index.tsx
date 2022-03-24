import type { NextPage } from 'next'

import Main from '../components/Cards/Home/Main'
import Contact from '../components/Cards/Home/Contact'
import { useEffect } from 'react'

const Home: NextPage = () => {
  useEffect(() => {
    if(typeof window !== "undefined") {
      const resourcesStatus = window.performance.getEntriesByType('resource')
      .reduce((formattedOutput, resourceDetails) => formattedOutput.concat({
          resourceName: resourceDetails.name,
          cached: resourceDetails.transferSize ? false : true
        }), [] as object[])
        console.log(resourcesStatus)
    }
  })

  return (
    <>
      <Main />
      <Contact />
    </>
    // <div className="overflow-hidden h-screen flex p-4 mx-auto">
    //   
    // </div>
  )
}

export default Home

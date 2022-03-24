import type { NextPage } from 'next'

import { HomeMain, HomeContacts } from '@/components/FullScreenSlides'

const Home: NextPage = () => {
  return (
    <div id="main-container" className='flex flex-col'>
      <HomeMain />
      <HomeContacts />
    </div>
  )
}

export default Home

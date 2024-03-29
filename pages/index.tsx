import moment from 'moment'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Layout } from '../components/layout'
import { AboutSection } from '../src/page-components/aboutSection/AboutSection'
import { AvailableSection } from '../src/page-components/availableSection/AvailableSection'
import { ContactSection } from '../src/page-components/contactSection/ContactSection'
import { HomePageCarousel } from '../src/page-components/homepage/Carousel'
import { ServiceSection } from '../src/page-components/servicesSection/ServiceSection'
import { SkillSection } from '../src/page-components/skillsSection/SkillSection'


const Home: NextPage = () => {
  return (
    <Layout >
      <Head>
        <title>Fahad Ali - Full Stack Web Developer</title>
        <meta name="description" content="Fahad Ali" />
        <meta name="description" content="Best Web Developer" />
        <meta name="description" content="React js Developer" />
        <meta name="description" content="Next js Developer" />
        <meta name="description" content="Javascript Developer" />
        <meta name="description" content="Full Stack Developer" />
        <meta name="description" content="Full-Stack Developer" />
        <meta name="description" content="Fahad Ali - Full Stack Web Developer" />
        <meta name="keywords" content="javascript, reactjs, nextjs, fullstack web developer, mongodb, expressjs, nodejs, express" />
        <link rel="icon" href="/fav.ico" />
      </Head>

      <div id='home' className='h-auto w-full'>
        <HomePageCarousel />
      </div>
      <div id='about' className='mt-20'>
        <AboutSection />
      </div>
      <div id='service' className='my-20 '>
        <ServiceSection />
      </div>

      <div id='skill' className='my-20'>
        <SkillSection />
      </div>

      <div id='available' className='my-20 h-96'>
        <AvailableSection />
      </div>

      <div id='contact' className='my-20 h-auto'>
        <ContactSection />
      </div>
      <div className='mt-20 flex items-end justify-center h-28'>
        <div>Fahad Ali &copy; <span className='font-bold text-yellow-300'>Jan 25th 2022</span> - <span className='font-bold text-yellow-300'>{moment().format('MMM DDD, YYYY')}</span></div>
      </div>
    </Layout>
  )
}

export default Home

import type { NextPage } from 'next'
import { Atoms, Box, Text, BackgroundColorProvider } from '@upstart/patina-design-system'
// import * as customStyles from './index.module.css'
import * as customStyles from './index.css'

const flexBg: Atoms = {
  display: { tablet: "flex" },
  justifyContent: "spaceBetween",
  alignItems: "center",
  paddingX: "l",
  paddingY: "3xl"
}

const card: Atoms = {
  backgroundColor: "baseBackground",
  padding: "l",
  borderRadius: "card",
  width: "third",
  textAlign: "center"
}

const Hero = () => {
  return (
    <Box className={customStyles.bgImage}>
      <BackgroundColorProvider value={{mobile: "dangerousBlack", tablet: "dangerousBlack", desktop: "dangerousBlack"}}>
        <Box atoms={flexBg}>
          <Box atoms={card}>
            <Text>Hello, Patina!</Text>
            <Box atoms={{paddingBottom: "s"}}/>
            <Text>Hello, Patina!</Text>
            <Box atoms={{paddingBottom: "s"}}/>
            <Text>Hello, Patina!</Text>
          </Box>
          <Text>Hello, Patina!</Text>
        </Box>
      </BackgroundColorProvider>
    </Box>
  )
}

const Home: NextPage = () => {
  return (
    <Hero/>
  )
}

export default Home

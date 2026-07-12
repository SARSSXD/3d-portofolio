import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Education, Achievements, Hero, Navbar, Tech, Works, StarsCanvas, ErrorBoundary } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Education />
        <Tech />
        <Works />
        <Achievements />
        <div className='relative z-0'>
          <Contact />
          <ErrorBoundary fallback={null}>
            <StarsCanvas />
          </ErrorBoundary>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;


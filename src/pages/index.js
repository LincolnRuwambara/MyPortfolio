
import Main from '../components/Main/Main';
import Experience from '../components/Experience/Experience';
import SovTech from '../components/Why SovTech/SovTech';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import Education from '../components/Education/Education';

const Home = () => {
  return (
    <Layout>
       <Section grid> 
        <Main />
     </Section> 
      <Experience />
      <Education />
      <SovTech />
    </Layout>
  );
};

export default Home;

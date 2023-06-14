import { Navbar, Footer } from "../components/";

import { Hero, Course, Category, Stats, About } from "../../sections/";
const Home = () => (
  <div className="bg-white overflow-hidden">
    <Navbar />
    <Hero />
    <Stats />
    <Category />
    <About />
    <Course />
    <Footer />
  </div>
);

export default Home;

import FormHero from "@views/components/formHero";
import HeroList from "@views/components/heroList";
import LayoutRoot from "@views/layouts/layoutRoot";

function Home() {
  return (
    <LayoutRoot>
      <div className="mx-6 lg:w-3/5 lg:mx-auto">
        <FormHero />
        <HeroList />
      </div>
    </LayoutRoot>
  );
}

export default Home;

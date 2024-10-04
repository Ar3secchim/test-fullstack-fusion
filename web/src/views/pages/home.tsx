import LayoutRoot from "@views/layouts/layoutRoot";

export interface ITasksProps {
  name: string;
  status: boolean;
}

function Home() {
  return (
    <LayoutRoot>
      <div className="mx-6 lg:w-3/5 lg:mx-auto">
        Hellou World
      </div>
    </LayoutRoot>
  );
}

export default Home;

import Layout from "./layout/Layout";
import TaskItem from "./components/TaskItem";
import "rsuite/dist/rsuite.css";
import Searching from "./components/Searching";
import ControlPanel from "./components/ControlPanel";
import { useAdditem } from "./hooks/useAdditem";

function App() {

  let { dataArr } = useAdditem();

  return (
    <div className="app mt-3">
      <Layout >
        <Searching/>
        <div className="flex h-3/6 items-center mt-5 gap-5 flex-col overflow-scroll">
          {
            dataArr.map(
              (task,i) => (
                <TaskItem data={task} key={i} order={i}/>
              )
            )
          }
        </div>

        <ControlPanel/>
      </Layout>
    </div>
  );
}

export default App;

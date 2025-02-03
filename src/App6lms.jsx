import { AppBar } from "./pr6/components/AppBar/AppBar.jsx";
import { Layout } from "./pr6/components/Layout/Layout.jsx";
import { TaskForm } from "./pr6/components/TaskForm/TaskForm.jsx";
import { TaskList } from "./pr6/components/TaskList/TaskList";

export const App6lms = () => {
    return (
        <div>
        <Layout>
            <AppBar />
            <TaskForm />
            <TaskList />
        </Layout>
      </div>
    );
};
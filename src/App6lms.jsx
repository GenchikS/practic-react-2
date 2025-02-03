import { AppBar } from "./pr6lms/components/AppBar/AppBar.jsx";
import { Layout } from "./pr6lms/components/Layout/Layout.jsx";
import { TaskForm } from "./pr6lms/components/TaskForm/TaskForm.jsx";
import { TaskList } from "./pr6lms/components/TaskList/TaskList";

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
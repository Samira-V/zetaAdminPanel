import Dashboard from './pages/Dashboard/Dashboard'
import Widgets from './pages/Widgets/Widgets'
import Projects from './pages/Projects/Projects'
import FileManager from './pages/FileManager/FileManager'
import PageLayout from './pages/PageLayout/PageLayout'
import General from './pages/Widgets/General'






let routes = [
    { path: '/', element: <Dashboard /> },
    { path: '/dashboard/:subPage', element: <MainPost /> },
    { path: '/widgets', element: <Widgets /> },
    { path: '/widgets/general', element: <General /> },
    { path: '/projects', element: <Projects /> },
    { path: '/filemanager', element: <FileManager /> },
    { path: '/pagelayout', element: <PageLayout /> },
]
export default routes


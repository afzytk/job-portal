import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AppLayout from "./layout/AppLayout";
import LandingPage from "./Pages/LandingPage";
import Onboarding from "./Pages/Onboarding";
import JobListings from "./Pages/JobListings";
import Job from "./Pages/Job";
import PostJob from "./Pages/PostJob";
import SavedJobs from "./Pages/SavedJobs";
import MyJobs from "./Pages/MyJobs";
import { ThemeProvider } from "@/components/theme-provider"

const App = () => {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <LandingPage />,
        },
        {
          path: "/onboarding",
          element: <Onboarding />,
        },
        {
          path: "/jobs",
          element: <JobListings />,
        },
        {
          path: "/job/:id",
          element: <Job />,
        },
        {
          path: "/post-job",
          element: <PostJob />,
        },
        {
          path: "/saved-jobs",
          element: <SavedJobs />,
        },
        {
          path: "/my-jobs",
          element: <MyJobs />
        },
        
      ]
    }
  ])
  return(
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router}/>
    </ThemeProvider>
  )
}

export default App;
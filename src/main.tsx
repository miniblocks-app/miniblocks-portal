import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "@material-tailwind/react";

import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import BackendPage from "./pages/backend";
import FrontendPage from "./pages/fronted";
import MyProjects from "./pages/myprojects/myprojects";
import LoginPage from "./pages/login/login";
import GetStarted from "./pages/documents/getstarted";
import LessonCreator from "./pages/lesson-creator";
import JavascriptDoc from "./pages/documents/javascript";
import HTMLDoc from "./pages/documents/html";
import CSSDoc from "./pages/documents/css";
import CodeSplitter from "./pages/codeExplain/CodeSplitter";
import MainPage from "./pages/home/MainPage";
import ServerCreationDocs from "./pages/documents/serverCreationDocs";
import APIBlocksDocPage from "./pages/documents/apiBlocksDoc";
import DatabaseBlocksDocPage from "./pages/documents/databaseDoc";
import AuthenticationDocs from "./pages/documents/authenticationDocs";
import SignUpPage from "./pages/sign-up/sign-up";
import GuidebookList from "./pages/GuideBooks/GuideBook";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false, // default: true
        },
    },
});

const router = createBrowserRouter([
    {
        path: "/backend/:id",
        element: <BackendPage />,
    },
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "/signup",
        element: <SignUpPage />,
    },
    {
        path: "/frontend/:id",
        element: <FrontendPage />,
    },
    {
        path: "/my/projects",
        element: <MyProjects />,
    },
    {
        path: "/get-started",
        element: <GetStarted />,
    },
    {
        path: "/guide-books",
        element: <GuidebookList />,
    },
    {
        path: "/lesson-creator/:id",
        element: <LessonCreator />,
    },
    {
        path: "/doc-js",
        element: <JavascriptDoc />,
    },
    {
        path: "/doc-html",
        element: <HTMLDoc />,
    },
    {
        path: "/doc-css",
        element: <CSSDoc />,
    },
    {
        path: "/doc-server-creation",
        element: <ServerCreationDocs />,
    },
    {
        path: "/doc-api-blocks",
        element: <APIBlocksDocPage />
    },
    {
        path: "/doc-database-blocks",
        element: <DatabaseBlocksDocPage />
    },
    {
        path: "/doc-auth",
        element: <AuthenticationDocs />,
    },
    {
        path: "/crunchCode",
        element: <CodeSplitter />,
    },
    {
        path: "/*",
        element: <Navigate to="/my/projects" replace />,
    },
    {
        path: "/home",
        element: <MainPage />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <ThemeProvider>
                <RecoilRoot>
                    <RouterProvider router={router} />
                </RecoilRoot>
            </ThemeProvider>
        </QueryClientProvider>
    </React.StrictMode>
);

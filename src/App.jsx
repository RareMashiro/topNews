import { DescriptionPageContainer } from "./pages/description-page/container";
import { NewsPageContainer } from "./pages/news-page/container";
import { Provider } from "react-redux";
import { store } from "./redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { LayoutContainer } from "./components/layout/container";
import { CommentsListContainer } from "./components/commentsList/container";

const router = createBrowserRouter([
	{
		path: "/",
		element: <LayoutContainer />,
		children: [
			{
				index: true,
				element: <NewsPageContainer />
			},
			{
				path: "description",
				element: <DescriptionPageContainer />,
				children: [
					{
						path: ":commentId",
						element: <CommentsListContainer />
					}
				]
			}
		]
	}
])

export const App = () => {
	return (
		<Provider store={store}>
			{/* <DescriptionPageContainer /> */}
			<RouterProvider router={router}/>
		</Provider>
	);
}

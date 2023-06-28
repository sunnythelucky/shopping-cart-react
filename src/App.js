import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Contact } from "./pages/contact";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import { useRouterHistory } from "react-router";
import { createHistory } from "history";

function App() {
	const history = useRouterHistory(createHistory)({
		basename: "/shopping-cart-react",
	});

	return (
		<div className="App">
			<ShopContextProvider>
				<Router history={history}>
					<Navbar />
					<Routes>
						<Route path="/" element={<Shop />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/cart" element={<Cart />} />
					</Routes>
				</Router>
			</ShopContextProvider>
		</div>
	);
}

export default App;

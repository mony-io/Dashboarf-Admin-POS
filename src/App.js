import Home from "./pages/Home";
import PrivateRoutes from "./utils/PrivateRoutes";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Category from "./components/category/Category";
import Sale from "./components/sale/Sale";
import AddProduct from "./components/product/AddProduct";
import AddCustomer from "./components/customer/AddCustomer";
import AddSupplier from "./components/supplier/AddSupplier";
import ListProducts from "./components/product/ListProducts";
import ListCustomers from "./components/customer/ListCustomers";
import AddStaff from "./components/staff/AddStaff";

function App() {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/category" element={<Category />} />
        <Route exact path="/sale" element={<Sale />} />
        <Route exact path="/addproduct" element={<AddProduct />} />
        <Route exact path="/lisitproducts" element={<ListProducts />} />
        <Route exact path="/addcustomer" element={<AddCustomer />} />
        <Route exact path="/listcustomers" element={<ListCustomers />} />
        <Route exact path="/addsupplier" element={<AddSupplier />} />
        <Route exact path="/addstaff" element={<AddStaff />} />
      </Route>
    </Routes>
  );
}

export default App;

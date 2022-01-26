import { Outlet, Link } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import {ProductCard, ProductCardConnect} from "./components/ProductCard";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import Grid from "@mui/material/Grid";
export default function App() {
  return (
    <>
      <Header />
      
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <SearchBar />
        <ProductCard />
      </Grid>
      <Footer />
    </>
  );
}

import React, { Component } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";

import * as cartActions from "./actions/cartActions";

class ProductCard extends Component {
  constructor(props) {
    super(props);
    const createHandlers = (dispatch) => {
      let _addToCart = function (id) {
        dispatch(cartActions.addToCart(id));
      };
      let _getProductData = function () {
        dispatch(cartActions.getProductData());
      };
      let _search = function (filter) {
        dispatch(cartActions.search(filter));
      };
      return {
        _addToCart,
        _getProductData,
        _search,
      };
    };
    this.handlers = createHandlers(props.dispatch);
    this.classes = makeStyles((theme) => ({
      root: {
        marginTop: 80,
      },
    }));
    this.state = {
      products: [],
    };
  }
  handleClick = (id) => {
    this.handlers._addToCart(id);
  };
  componentDidMount() {
    this.state.products = this.handlers._getProductData();
}
  render() {
    return this.state.products.map((product) => (
      <Grid item xs={2} sm={3} md={3} key={product.id}>
        <Paper sx={{ p: 2, margin: "auto", maxWidth: 500, flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase
                sx={{ width: 128, height: 128 }}
                href={`./details/${product.id}`}
                imgUrl={product.imgUrl}
              >
                <img height="100%" alt="complex" src={product.imgUrl} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography
                    gutterBottom
                    variant={`${product.brand} ${product.model}`}
                    component="div"
                  >
                    {product.brand}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {product.model}
                  </Typography>
                </Grid>
                <Grid item>
                  <span
                    to="/"
                    className="btn-floating halfway-fab waves-effect waves-light red"
                    onClick={() => {
                      this.handleClick(product.id);
                    }}
                  >
                    <i className="material-icons">Add to cart</i>
                  </span>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1" component="div">
                  {`${product.price} €`}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    ));
  }
}
export default connect()(ProductCard);

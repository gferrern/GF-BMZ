import React, { Component } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import { makeStyles } from "@material-ui/core/styles";
import { getProductData,getProductsSuccess, getProductsFailure} from "./actions/productActions";
import { connect } from "react-redux";

export class ProductCard extends Component {
  state = {
    products: [],
    loading: {},
    error: {}
  };
  constructor(props) {
    super(props);
    const classes = makeStyles((theme) => ({
      root: {
        marginTop: 80,
      },
    }));
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


const mapDispatchToProps = (dispatch) => {
  return {
    state: () => dispatch(getProductData())
  }
}
export const ProductCardConnect = connect(
  mapDispatchToProps)(ProductCard);

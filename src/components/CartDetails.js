import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import Box from '@mui/material/Box';
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {
  removeItem,
  addQuantity,
  subtractQuantity,
} from "./actions/cartActions";
import IconButton from "@material-ui/core/IconButton";
 
class CartDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDrawerOpened: false,
    };
  }

  classes = makeStyles({
    // This group of buttons will be aligned to the right
    rightToolbar: {
      marginLeft: "auto",
      marginRight: -12
    },
    menuButton: {
      marginRight: 16,
      marginLeft: -12
    }
  })

  toggleDrawer = (open) => (event) => {
    this.setState({ isDrawerOpened: open });
  };

  //to remove the item completely
  handleRemove = (id) => {
    this.props.removeItem(id);
  };
  //to add the quantity
  handleAddQuantity = (id) => {
    this.props.addQuantity(id);
  };
  //to substruct from the quantity
  handleSubtractQuantity = (id) => {
    this.props.subtractQuantity(id);
  };

  render() {
    return (
      <React.Fragment key="cart">
        <section className={this.classes.rightToolbar} onClick={this.toggleDrawer(true)}>
          <IconButton color="inherit" aria-label="cart">
            <ShoppingCartIcon />
          </IconButton>
        </section>
        <Drawer
          sx={{
            width: 240,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: 240,
              boxSizing: "border-box",
            },
          }}
          variant="temporary"
          anchor="right"
          open={this.state.isDrawerOpened}
          onClose={this.toggleDrawer(false)}
        >
          {this.state.items!=undefined && this.state.items.map((item) => {
            <li className="collection-item avatar" key={item.id}>
              <div className="item-desc">
                <span className="title">
                  {item.brand} {item.model}
                </span>
                <p>{item.desc}</p>
                <p>
                  <b>Price: {item.price}$</b>
                </p>
                <p>
                  <b>Quantity: {item.quantity}</b>
                </p>
                <button
                  className="waves-effect waves-light btn pink remove"
                  onClick={() => {
                    this.handleRemove(item.id);
                  }}
                >
                  Remove
                </button>
              </div>
            </li>;
          })}
        </Drawer>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  if (state != undefined) {
    return {
      items: state.addedItems,
      //addedItems: state.addedItems
    };
  } else {
    return {
      items: [],
      //addedItems: state.addedItems
    };
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (id) => {
      dispatch(removeItem(id));
    },
    addQuantity: (id) => {
      dispatch(addQuantity(id));
    },
    subtractQuantity: (id) => {
      dispatch(subtractQuantity(id));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CartDetails);

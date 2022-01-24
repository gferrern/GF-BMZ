import ReactDOM from "react-dom";
import React, { Component } from "react";
import Box from "@mui/material/Box";
import { alpha } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core/styles";

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.classes = makeStyles((theme) => ({
      root: {
        marginTop: 80,
        width: "100%",
      },
    }));
    this.state = {
      isShow: true,
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className={this.classes.root}>
          <Box
            justify="center"
            align="center"
            pad="xlarge"
            background="linear-gradient(102.77deg, #865ED6 -9.18%, #18BAB9 209.09%)"
            round="large"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              bgcolor: "background.paper",
              overflow: "hidden",
              borderRadius: "12px",
              boxShadow: 1,
              fontWeight: "bold",
            }}
          >
            <Box
              component="img"
              justify="center"
              align="center"
              pad="xlarge"
              background="linear-gradient(102.77deg, #865ED6 -9.18%, #18BAB9 209.09%)"
              round="large"
              sx={{
                height: 233,
                width: 350,
                maxHeight: { xs: 233, md: 167 },
                maxWidth: { xs: 350, md: 250 },
              }}
              alt="mobile phone photo"
              src={this.imgUrl}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "center", md: "flex-start" },
                m: 3,
                minWidth: { md: 350 },
              }}
            >
              <Box component="span" sx={{ fontSize: 16, mt: 1 }}>
                123 Main St, Phoenix AZ
              </Box>
              <Box
                component="span"
                sx={{ color: "primary.main", fontSize: 22 }}
              >
                $280,000 — $310,000
              </Box>
              <Box
                sx={{
                  mt: 1.5,
                  p: 0.5,
                  backgroundColor: (theme) =>
                    alpha(theme.palette.primary.main, 0.1),
                  borderRadius: "5px",
                  color: "primary.main",
                  fontWeight: "medium",
                  display: "flex",
                  fontSize: 12,
                  alignItems: "center",
                  "& svg": {
                    fontSize: 21,
                    mr: 0.5,
                  },
                }}
              >
                CONFIDENCE SCORE 85%
              </Box>
            </Box>
            <Box>ACTIONS</Box>
          </Box>
        </div>
      </React.Fragment>
    );
  }
}

export default ProductDetails;

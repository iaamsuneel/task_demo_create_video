import React from "react";
import { Dialog, DialogTitle, Slide, Typography } from "@mui/material";
import PropTypes from "prop-types";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import DialogContent from "@mui/material/DialogContent";
//import AppScrollbar from "../AppScrollbar";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const AppDialog = ({
  sxStyle,
  maxWidth,
  hideClose,
  open,
  onClose,
  children,
  dividers,
  title,
  actionTitle,
  fullHeight,
}) => {
  return (
    <Dialog
      sx={{
        "& .MuiDialog-paper": {
          width: "100%",
        },
        "& .MuiDialogContent-root": {
          overflowY: "hidden",
          paddingLeft: 0,
          paddingRight: 0,
        },
        ...sxStyle,
      }}
      maxWidth={maxWidth}
      TransitionComponent={Transition}
      open={open}
      // onClose={onClose} // remove out side click
    >
      <DialogTitle
        sx={{
          fontSize: 28,
          fontWeight: 800,
        }}
        id="app-dialog-title"
      >
        <Typography /* variant="h5" */>{title}</Typography>
        {hideClose ? null : (
          <IconButton
            aria-label="close"
            sx={{
              position: "absolute",
              right: 4,
              top: 4,
              color: "grey.500",
            }}
            onClick={onClose}
            size="large"
          >
            <CloseIcon />
          </IconButton>
        )}
      </DialogTitle>
      <DialogContent dividers={dividers}>
        {/*   <AppScrollbar
                    sx={{
                        paddingTop: 1,
                        height: fullHeight ? "70vh" : "100%",
                        minHeight: "150px",
                        maxHeight: "400px",
                        paddingRight: 6,
                        paddingLeft: 6,
                    }}
                >  */}
        {children}
        {/*  </AppScrollbar> */}
      </DialogContent>
    </Dialog>
  );
};
export default AppDialog;

AppDialog.propTypes = {
  maxWidth: PropTypes.string,
  open: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.node,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  dividers: PropTypes.bool,
  hideClose: PropTypes.bool,
  fullHeight: PropTypes.bool,
  actionTitle: PropTypes.string,
  sxStyle: PropTypes.object,
};
AppDialog.defaultProps = {
  dividers: false,
  fullHeight: false,
  maxWidth: "sm",
  hideClose: false,
};

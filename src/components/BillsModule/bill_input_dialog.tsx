import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@material-ui/lab/AdapterDateFns";

import LocalizationProvider from "@material-ui/lab/LocalizationProvider";
import DatePicker from "@material-ui/lab/DatePicker";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
  const [open, setOpen] = React.useState(false);

  const [BillDate, setValueBillDate] = React.useState<Date | null>(new Date());
  const [productDate, setValueProductDate] = React.useState<Date | null>(
    new Date()
  );

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (newValue: Date | null) => {
    setValueBillDate(newValue);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Generate New Bill{" "}
      </Button>
      <Dialog
        fullScreen={true}
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"New Bill"}</DialogTitle>
        <DialogContent>
          <div className="">
            <div className="row">
              <Autocomplete
                className="input-style"
                disablePortal
                id="combo-box-demo"
                options={["Abhinav", "Yadav"]}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="Company Name" />
                )}
              />

              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Date"
                  value={BillDate}
                  onChange={(newValue) => {
                    setValueBillDate(newValue);
                  }}
                  renderInput={(params: any) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </div>
            <Autocomplete
              className="input-style"
              style={{ width: "100%" }}
              disablePortal
              id="combo-box-demo"
              options={["Abhinav", "Yadav"]}
              sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField {...params} label="Company Address" />
              )}
            />

            <div className="row">
              <Autocomplete
                className="input-style"
                style={{ width: "100%", margin: "0rem .5rem 0rem .0rem" }}
                disablePortal
                id="combo-box-demo"
                options={["Abhinav", "Yadav"]}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="Truck Number" />
                )}
              />{" "}
              <Autocomplete
                className="input-style"
                style={{ width: "100%", margin: "0rem .5rem 0rem .0rem" }}
                disablePortal
                id="combo-box-demo"
                options={["Abhinav", "Yadav"]}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="LR Number" />
                )}
              />{" "}
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Date"
                  value={productDate}
                  onChange={(newValue) => {
                    setValueProductDate(newValue);
                  }}
                  renderInput={(params: any) => <TextField {...params} />}
                />
              </LocalizationProvider>
              <Autocomplete
                className="input-style"
                style={{ width: "100%", margin: "0rem .5rem 0rem .0rem" }}
                disablePortal
                id="combo-box-demo"
                options={["Abhinav", "Yadav"]}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="Quantity" />
                )}
              />{" "}
              <Autocomplete
                className="input-style"
                style={{ width: "100%", margin: "0rem .5rem 0rem .0rem" }}
                disablePortal
                id="combo-box-demo"
                options={["Abhinav", "Yadav"]}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Rate" />}
              />
              <Autocomplete
                className="input-style"
                style={{ width: "100%", margin: "0rem .5rem 0rem .0rem" }}
                disablePortal
                id="combo-box-demo"
                options={["Abhinav", "Yadav"]}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="Particular" />
                )}
              />
              <Autocomplete
                className="input-style"
                disablePortal
                id="combo-box-demo"
                options={["Abhinav", "Yadav"]}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="Amount" />
                )}
              />
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose}>Agree</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

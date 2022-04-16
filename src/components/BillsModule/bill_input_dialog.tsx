import * as React from "react";
import { useState } from "react";
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
import { BillModal, RideModel } from "./billModel";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
  let BillDetails: BillModal;
  let listOfProduct: Array<RideModel> = [];
  const [open, setOpen] = useState(false);
  const [BillDate, setValueBillDate] = useState<Date | null>(new Date());
  const [productDate, setValueProductDate] = useState<Date | null>(new Date());
  const [productList, setProductValue] = useState(listOfProduct);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (newValue: Date | null) => {
    setValueBillDate(newValue);
  };

  function addRideToArray() {}

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
            <div className="row" style={{ alignItems: "center" }}>
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
              <div style={{ width: "60rem", margin: "0rem .5rem 0rem .0rem" }}>
                <TextField
                  style={{ width: "100%" }}
                  id="outlined-basic"
                  label="L.R Number"
                  variant="outlined"
                />
              </div>{" "}
              <div style={{ width: "100%", margin: "0rem .5rem 0rem .0rem" }}>
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
              </div>
              <div style={{ width: "80rem", margin: "0rem .5rem 0rem .0rem" }}>
                <TextField
                  style={{ width: "100%" }}
                  id="outlined-basic"
                  label="Quantity"
                  type={"number"}
                  variant="outlined"
                />
              </div>{" "}
              <div style={{ width: "80rem", margin: "0rem .5rem 0rem .0rem" }}>
                <TextField
                  style={{ width: "100%" }}
                  id="outlined-basic"
                  label="Rate"
                  type={"number"}
                  variant="outlined"
                />
              </div>
              <div style={{ width: "108rem", margin: "0rem .5rem 0rem .0rem" }}>
                <TextField
                  style={{ width: "100%" }}
                  id="outlined-basic"
                  label="Particular"
                  variant="outlined"
                  multiline
                  rows={2}
                />
              </div>
              <div style={{ width: "80rem", margin: "0rem .5rem 0rem .0rem" }}>
                <TextField
                  style={{ width: "100%" }}
                  id="outlined-basic"
                  label="Amount"
                  variant="outlined"
                />
              </div>
            </div>
            <div
              style={{
                justifyContent: "end",
                margin: "1rem 0rem",
                textAlign: "end",
              }}
            >
              <Button onClick={(click) => addRideToArray} variant="contained">
                Add To Bill
              </Button>
            </div>

            <div className="table-container">
              <table>
                <tr>
                  <th>Truck Number</th>
                  <th>LR Number</th>
                  <th>Date</th>
                  <th>Quantity</th>
                  <th>Rate </th>
                  <th>Particular </th>
                  <th>Amount</th>
                </tr>
                <tr>
                  <td>Truck Number</td>
                  <td>LR Number</td>
                  <td>Date</td>
                  <td>Quantity</td>
                  <td>Rate </td>
                  <td>Particular </td>
                  <td>Amount</td>
                </tr>
              </table>
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

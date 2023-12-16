import React from "react";
import Typography from "@mui/material/Typography";
import { Box, Button, FormControl, InputLabel, MenuItem, Modal, Select, TextField } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const UpdateModal = ({
  modalOpen,
  handleClose,
  data,
  handleUpdate,
  handleSave,
  isNew,
}) => {

  return (
    <Modal
      open={modalOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          style={{
            marginBottom: "16px",
            fontWeight: 500,
          }}
        >
          Update rule
        </Typography>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <TextField
           disabled={!isNew}
            label="Zip Code"
            
            defaultValue=""
            name="zipcode"
            variant="outlined"
            size="medium"
            value={data?.zipcode}
            onChange={(e) => {
              handleUpdate(e);
            }}
          />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Type of Shipping</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={data?.typeOfShipping}
              label="Type of Shipping"
              name="typeOfShipping"
              onChange={(e) => {
                handleUpdate(e);
              }}
            >
              <MenuItem value={'Standard'}>Standard</MenuItem>
              <MenuItem value={'Express'}>Express</MenuItem>
              <MenuItem value={'Priority'}>Priority</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="Shipping Cost"
            defaultValue=""
            name="shippingCost"
            variant="outlined"
            size="medium"
            value={data?.shippingCost}
            onChange={(e) => {
              handleUpdate(e);
            }}
          />
          <TextField
            label="Delivery Duration"
            defaultValue=""
            name="deliveryDuration"
            variant="outlined"
            size="medium"
            value={data?.deliveryDuration}
            onChange={(e) => {
              handleUpdate(e);
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "flex-end",
            marginTop: "16px",
            gap: "8px",
          }}
        >
          <Button variant="outlined" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="outlined" color="success" onClick={()=>handleSave(isNew)}>
            Save
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

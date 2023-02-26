import { useState } from "react";
import { Box, Modal } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "white",
  p: 4,
};

export default function StepCard(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="w-full md:w-1/2 lg:w-1/3 px-4">
      <div
        className="
               p-10
               md:px-7
               xl:px-10
               rounded-[20px]
               bg-white
               hover:bg-blue-200
               shadow-md
               hover:shadow-lg
               mb-8
               "
        onClick={handleOpen}
      >
        <div
          className="
                  w-[70px]
                  h-[70px]
                  flex
                  items-center
                  justify-center
                  bg-primary
                  rounded-2xl
                  mb-8
                  "
        >
          {props.icon}
        </div>
        <h4 className="font-semibold text-xl text-dark mb-3">{props.text}</h4>
        <p className="text-body-color"></p>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="rounded-md w-[70%]">
          <img src={props.image} alt="Step" />
        </Box>
      </Modal>
    </div>
  );
}

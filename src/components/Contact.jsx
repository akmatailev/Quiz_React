import { useState } from "react";
import "./contact.css";
import Modal from "./Modal";

const Contact = () => {

  const [open, setOpen] = useState(false);

  return (
    <div className="contact">
      <button className="open_modal" onClick={() => setOpen(true)}>Открыть окно</button>
      <Modal open={open} setOpen={setOpen}>
        <img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" alt="" />
      </Modal>
    </div>
  );
};

export default Contact;

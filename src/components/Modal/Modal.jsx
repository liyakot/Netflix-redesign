import styles from "./Modal.module.scss";

const Modal = ({ isActiveModal, setIsActiveModal, link }) => {
  return (
    <div
      className={
        isActiveModal ? `${styles.modal_active} ${styles.modal}` : styles.modal
      }
      onClick={() => setIsActiveModal(false)}
    >
      <div
        className={
          isActiveModal
            ? `${styles.modal_content_active} ${styles.modal_content}`
            : styles.modal_content
        }
        onClick={(e) => e.stopPropagation()}
      >
        <iframe
          width="616"
          height="346"
          src={`https://www.youtube.com/embed/${link}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Modal;

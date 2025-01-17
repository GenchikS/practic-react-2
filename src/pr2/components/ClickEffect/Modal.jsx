import { useEffect } from "react";

// приклад монтування модального вікна з очисткою витоку пам'яті
const Modal = () => {
    useEffect(() => {
      const intervalId = 
    setInterval(() => {
      console.log(`Interval - ${Date.now()}`);
    }, 2000);
        return clearInterval(intervalId)
  }, []);

  return <div>Modal</div>;
};


export default Modal;
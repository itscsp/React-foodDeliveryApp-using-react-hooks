 import { Fragment } from 'react';
 import ReactDOM from 'react-dom';


 import classes from './Modal.module.css'

//  for creating background shadow effect

 const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={ () => props.displayHandler(false)}></div>
 };

 const ModalOverlay = (props) => {
     return (
         <div className={classes.modal}>
             <div className={classes.content}>{props.children}</div>
         </div>
     );
 };


 const portalElements = document.getElementById('overlays');

 const Modal = (porps) => {
   return (
     <Fragment>
         {ReactDOM.createPortal(<Backdrop displayHandler={porps.displayHandler} />, portalElements)}

         {ReactDOM.createPortal(
             <ModalOverlay>{porps.children}</ModalOverlay>, portalElements
         )}
     </Fragment>
   )
 }

 export default Modal

import { Fragment } from 'react';
import classes from './Modal.module.css';
import  ReactDOM from 'react-dom';

const Backdrop = (props) =>
{
    return <div className={classes.backdrop} onClick={props.onClose} />;

};

const ModalOverlay = (props) =>
{
    return (
     <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
    );
};
// Learn About Portal Element in detail.. and  about ReactDOM.createPortal
//.... also, 'overlays' passed in next line is something passed in index.html file line no. 31 or 32.
// Read ABOUT that too and also watch the video of Modal Wali from Earlier Section..

const portalElement = document.getElementById('overlays');

const Modal = (props) =>
{
    return(
        <Fragment>
            {ReactDOM.createPortal(<Backdrop  onClose={props.onClose}/> ,portalElement)}
            {ReactDOM.createPortal(
            <ModalOverlay>{props.children}</ModalOverlay> , portalElement)}
        </Fragment>
    );
};

export default Modal;
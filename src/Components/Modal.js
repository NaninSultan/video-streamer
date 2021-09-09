import { Typography } from '@material-ui/core'
import React from 'react'
import ReactDOM from 'react-dom'

const Modal = ({ title, content, actionButtons, onDissmiss }) => {
   
    return ReactDOM.createPortal(
        <div style={{position: "relative", top: "200px", textAlign: "center"}}
            onClick={()=> onDissmiss()}
            >
            <div
                onClick={(e)=> e.stopPropagation()}
                >
                <div className="header">
                    <Typography variant="h4">
                        {title}
                    </Typography>
                </div>
                <div className="content">
                    <Typography style={{marginTop: "20px"}} variant="h5">
                        {content}
                    </Typography>
                </div>
                <div className="actions">
                    {actionButtons}
                </div>
            </div>
        </div>,
        document.querySelector('#root')
    )
}

export default Modal
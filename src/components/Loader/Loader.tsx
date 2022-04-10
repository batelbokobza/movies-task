import React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import classes from "./styles.module.css";

const Loader:React.FC = () => {
    return (
        <div className={classes.loaderWrapper}>
            <div className={classes.loadingMessage}>Loading movies...</div>
            <LinearProgress className={classes.loader}/>
        </div>
    );
}

export default Loader; 
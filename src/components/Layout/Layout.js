import React from 'react';
import classes from './Layout.css';
import Auxx from '../../hoc/Auxx';

const layout = (props) => (
    <Auxx>
        <div>
      Toolbar, Side drawer, backdrop
    </div>
    <main className={classes.Content}>
        {props.children}
    </main>
    </Auxx>
  );

export default layout

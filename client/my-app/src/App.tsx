import React, { Fragment, FunctionComponent } from 'react';

type ChildrenProps = {
    children?: React.ReactNode
}

const App: FunctionComponent<ChildrenProps> = ({ children }) => (
    <Fragment>
        { children }
    </Fragment>
);

export default App;


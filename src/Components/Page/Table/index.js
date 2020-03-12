import React from 'react';
import Table1 from './Table1';
import Table2 from './Table2';

class Table extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h1>Table 1</h1>
                <Table1/>

                <h1>Table 2</h1>
                <Table2/>
            </React.Fragment>
        );
    }
}

export default Table;
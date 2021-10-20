import React from 'react';
import './tile.css';

export default class Tiles extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const {num, style, snake, ladder, playerPos} = this.props;
        return (
            <div className={`tile ${style}`}>
                {num}
                {snake && (
                    <div className='info'>
                        {`SHead: ${snake?.from}`}
                        {`STail: ${snake?.to}`}
                        {`SId: ${snake?.id}`}  
                    </div>
                )}
                {ladder && (
                    <div className='info'>
                        {`LHead: ${ladder?.to}`}
                        {`LTail: ${ladder?.from}`}
                        {`LId: ${ladder?.id}`}  
                    </div>
                )}
                {playerPos && (
                    <div className='info'>
                        {playerPos}
                    </div>
                )}
            </div>
        )
    }
}
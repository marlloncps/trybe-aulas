import React from 'react';

class Title extends React.Component {
    render (){
        // console.log(this.props);
        const { titulo } = this.props;
        return (
            <h1>{titulo}</h1>
        )
    }
}

export default Title;
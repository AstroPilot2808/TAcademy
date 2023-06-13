import React from 'react';

export default class CountDown extends React.Component {

    constructor(props)
    {
        super(props);
        this.state={
            count:5
        }
    }
    componentDidMount() {
        this.timer = setInterval(()=> {
            let {count} = this.state;
            this.setState({
                count: count - 1
            })
        }, 1000)
    }

    componentDidUpdate(prevProps, prevState, snapshot)
    {
        if(this.state.count === 0)
        {
            clearInterval(this.timer);
        }
    }

    render() {
        let {count} = this.state;

        return ( 
        <>

            {count}

        </>
        )
    }
}
import React from 'react';

export default class CountDown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 5,
        };
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState((prevState) => ({
                count: prevState.count - 1,
            }));
        }, 1000);
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.count <= 0) {
            clearInterval(this.timer);
        }
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        const { count } = this.state;
        return <>{count > 0 && count}</>;
    }
}

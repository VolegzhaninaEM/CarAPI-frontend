const e = React.createElement;
class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }
    toggleClass() {
        const like = this.state.liked;
        this.setState({ liked: !like });
    }
    render() {
        return e('button', { onClick: () => this.toggleClass()
        }, this.state.liked ? 'You liked it' : 'Like');
    }
}
const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);

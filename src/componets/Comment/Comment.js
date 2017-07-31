import React,{Component} from 'react'
import CommentAdd from '../CommentAdd/CommentAdd'
import CommentList from '../CommentList/CommentList'


class Comment extends Component {
    constructor(props){
        super(props);
        let time=new Date();
        this.state= {
            comments: [
                {id: time, username: '123213', content: '12321321'},
                {id: time+1, username: '2222', content: '222222'}
            ]
        }
        this.addComment=this.addComment.bind(this);
    }

    addComment(comment){

        const comments=this.state.comments;
        comments.unshift(comment);
        this.setState({
                comments
            })
    }

    deleteComment=(index)=>{
        const  comments=this.state.comments;
        comments.splice(index,1);
        this.setState({
            comments
            })
    }

    render() {
        return (
            <div>
                <header className="site-header jumbotron">
                    <div className="container">
                        <div className="row">
                            <h1>Speak Some Comment on React!</h1>
                        </div>
                    </div>
                </header>
                <div className="container">
                    <CommentAdd addComment={this.addComment}/>
                    <CommentList comments={this.state.comments} delcom={this.deleteComment}/>
                </div>
            </div>

        )
    }
}

export default Comment
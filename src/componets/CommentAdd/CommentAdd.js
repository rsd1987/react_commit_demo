import React,{Component,PropTypes} from 'react'

class CommentAdd extends Component{

    constructor(props){
        super(props);
        this.state={
            username:''
        }
    }

    add=()=>{
        const comment={
            id:Date.now(),
            username:this.state.username,
            content:this.refs.content.value
        }
        this.props.addComment(comment);

    }

    usernameHandle(event){
        let username=this.state.username;
        username=event.target.value;
        this.setState({username})
    }

    nameHandle=(event)=>{
        let username=this.state.username;
        username=event.target.value;
        this.setState({username})
    }

    render(){
        return (
            <div className="col-md-4">
                <form className="form-horizontal">
                    <div className="form-group">
                        <label>用户名</label>
                        <input type="text" className="form-control" value={this.state.username} onChange={this.nameHandle.bind(this)}  placeholder="用户名"/>
                    </div>
                    <div className="form-group">
                        <label>评论内容</label>
                        <textarea className="form-control" ref="content" rows="6" placeholder="评论内容"></textarea>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="button" className="btn btn-default pull-right" onClick={this.add}>提交</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
CommentAdd.PropTypes={
    addComment:PropTypes.func.isRequired
}

export default CommentAdd
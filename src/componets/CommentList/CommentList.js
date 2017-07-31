import React,{Component} from 'react'
import CommentItem from '../CommentItem/CommentItem'
import './CommentList.css'


class CommentList extends Component{
    render(){


        const comments=this.props.comments;
        const display=comments.length===0 ? 'block':'none';
        return (
            <div className="col-md-8">
                <h3 className="reply">评论回复：</h3>
                <h2 style={{display:display}}>暂无评论，点击左侧添加评论！！！</h2>
                <ul className="list-group">
                    {
                        comments.map((comment,index)=>
                        {
                            return <CommentItem comment={comment} key={index} delcom={this.props.delcom} index={index}/>
                        })
                    }
                </ul>
            </div>
        )
    }
}

CommentList.PropTypes={
    comments:React.PropTypes.array.isRequired,
    delcom:React.PropTypes.func.isRequired
}

export default CommentList

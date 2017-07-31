import React,{Component} from 'react'
import './CommentItem.css'

class CommentItem extends Component{
    deldata(){
        let usrname=this.props.comment.username;

        if(confirm(`确认删除${usrname}的数据吗?`))
        {
            this.props.delcom(this.props.index);
        }

    }

    render(){
        const comment=this.props.comment;
        return (
           <div>
               <li className="list-group-item">
                   <div className="handle">
                       <a onClick={this.deldata.bind(this)}>删除</a>
                   </div>
                   <p className="user"><span >{comment.username}</span><span>说:</span></p>
                   <p className="centence">{comment.content}</p>
               </li>
           </div>
        )
    }
}

export default CommentItem

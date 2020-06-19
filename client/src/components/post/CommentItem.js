import React from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { deleteComment } from '../../actions/post';


const CommentItem = ({
    postId,
    comment: { _id, text, name, avatar, user, date },
    auth
}) => {
    return (
        <div class="post bg-white p-1 my-1">
            <div>
                <a href="profile.html">
                    <img
                        class="round-img"
                        src={avatar}
                        alt=""
                    />
                    <h4>{name}</h4>
                </a>
            </div>
            <div>
                <p class="my-1">
                    {text}
                </p>
                <p class="post-date">
                    Posted on <Moment format="YYYY-MM-DD">{date}</Moment>
                </p>
                {!auth.loading && user === auth.user._id && (
                    <button
                        onClick={() => deleteComment(postId, _id)}
                        type='button'
                        className='btn btn-danger'
                    >
                        <i className='fas fa-times' />
                    </button>
                )}
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(CommentItem)
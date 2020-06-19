import axios from 'axios';
import {
    GET_POSTS,
    POST_ERROR,
    UPDATE_LIKES,
    DELETE_POST,
    ADD_POST,
    GET_POST,
    ADD_COMMENT,
    REMOVE_COMMENT
} from './types';
import setAlert from './alert';

export const getPosts = () => async dispatch => {
    try {
        const res = await axios.get('http://localhost:5000/api/posts');
        dispatch({
            type: GET_POSTS,
            payload: res.data
        });
    } catch (error) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status }
        })
    }
}

export const addLikes = id => async dispatch => {
    try {
        const res = await axios.put(`http://localhost:5000/api/posts/like/${id}`);
        dispatch({
            type: UPDATE_LIKES,
            payload: {id, likes: res.data}
        });
    } catch (error) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status }
        })
    }
}

export const removeLikes = id => async dispatch => {
    try {
        const res = await axios.put(`http://localhost:5000/api/posts/unlike/${id}`);
        dispatch({
            type: UPDATE_LIKES,
            payload: {id, likes: res.data}
        });
    } catch (error) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status }
        })
    }
}

export const deletePost = id => async dispatch => {
    try {
         await axios.delete(`http://localhost:5000/api/posts/${id}`);
        dispatch({
            type: DELETE_POST,
            payload: id
        });
        dispatch(setAlert('Post deleted', 'success'));
    } catch (error) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status }
        })
    }
}

export const addPost = formData => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    try {
        const res = await axios.post('http://localhost:5000/api/posts', formData, config);
        dispatch({
            type: ADD_POST,
            payload: res.data
        });
        dispatch(setAlert('Post created', 'success'));
    } catch (error) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status }
        })
    }
}

export const getPost = id => async dispatch => {
    try {
         const res = await axios.get(`http://localhost:5000/api/posts/${id}`);
        dispatch({
            type: GET_POST,
            payload: res.data
        });
    } catch (error) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status }
        })
    }
}
export const addComment = (postId, formData) => async dispatch => {
    try {
      const res = await axios.post(`http://localhost:5000/api/posts/comment/${postId}`, formData);
  
      dispatch({
        type: ADD_COMMENT,
        payload: res.data
      });
  
      dispatch(setAlert('Comment Added', 'success'));
    } catch (err) {
      dispatch({
        type: POST_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };

  export const deleteComment = (postId, commentId) => async dispatch => {
    try {
      await axios.delete(`http://localhost:5000/posts/comment/${postId}/${commentId}`);
  
      dispatch({
        type: REMOVE_COMMENT,
        payload: commentId
      });
  
      dispatch(setAlert('Comment Removed', 'success'));
    } catch (err) {
      dispatch({
        type: POST_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };

import * as Msg from '../components/Common/Common'

import API from '../fetch/fetch';

export const POSTLIST = 'POSTLIST';
export const POSTLIKE = 'POSTLIKE';
export const POSTCOLLECT = 'POSTCOLLECT';


export const getpostlist = (data) => ({
	    type: POSTLIST,
	    ...data
	})
export const setlike = (data) => ({
	    type: POSTLIKE,
	    data:data
	})
export const setcollect = (data) => ({
	    type: POSTCOLLECT,
	    data:data
	})
export const fetchPostList = (params) =>{
	return (dispatch, getState) => {
		API.getFetch('/api/Circle/postlist',params)
		.then((data)=>{
			dispatch(getpostlist(data));
			if(data.state == 0){
				Msg.showSuccess(data.msg)
			}else {
				Msg.showError(data.msg)
			}
    	})
		.catch((err)=>{Msg.showError(err)});
	}
}

export const fetchlike = (params) =>{
	return (dispatch, getState) => {
		API.getFetch('/api/Post/like',params)
		.then((data)=>{
			if(data.state == 0){
				dispatch(setlike(data.data));
				console.log(data)
				Msg.showSuccess(data.msg)
			}else {
				Msg.showError(data.msg)
			}
    	})
		.catch((err)=>{Msg.showError(err)});
	}
}
export const fetchcollect = (params) =>{
	return (dispatch, getState) => {
		API.getFetch('/api/Post/collect',params)
		.then((data)=>{
			if(data.state == 0){
				dispatch(setcollect(data.data))
				Msg.showSuccess(data.msg)
			}else {
				Msg.showError(data.msg)
			}
    	})
		.catch((err)=>{Msg.showError(err)});
	}
}






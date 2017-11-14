import { POSTLIST,POSTLIKE,POSTCOLLECT } from '../actions/postlist'

const initialState = {}

function postlist (state = initialState, action) {
	console.log('action',action)
    switch (action.type) {
        case POSTLIST:
            return {
            	...state,
            	...action
            }

        case POSTLIKE:
        	 state.data.list.map(function(item){
        		if(item.postid == action.data.postid){
        			item.islike = action.data.islike;
        			if(action.data.islike){
        				item.like = parseInt(item.like)+1;
        			}else {
        				item.like = parseInt(item.like)-1;
        			}
        		}
        	})
            return {
            	...state,
            }
        case POSTCOLLECT:
        	 state.data.list.map(function(item){
        		if(item.postid == action.data.postid){
        			item.iscollect = action.data.iscollect;
        			if(action.data.iscollect){
        				item.collect = parseInt(item.collect)+1;
        			}else {
        				item.collect = parseInt(item.collect)-1;
        			}
        		}
        	})
            return {
            	...state,
            }
        default:
            return state
    }
}

export default postlist;
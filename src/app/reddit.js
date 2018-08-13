import React, {component} from 'react';
import {Text, TouchableOpacity, View} from "react-native";
import {connect} from 'react-redux';
import {ADD_POST} from "./reducers";

const _Reddit = (props) => (
    <View>
        {props.posts.map(item => <Text>{item.name}</Text>)}
        <TouchableOpacity onPress={props.addRedditPost}>
            <Text>Add</Text>
        </TouchableOpacity>
    </View>
);

const mapStateToProps = (state) => ({
        posts: state.reddit
    }
);


const mapActionsToMap = (dispatch) => ({
    addRedditPost(post= {name: 'new post'}){
        dispatch({type: ADD_POST, payload: post});
    }

});
export const Reddit = connect(mapStateToProps, mapActionsToMap)(_Reddit);
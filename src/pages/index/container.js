import { connect } from 'react-redux';
import Index from './index';
import { addTodo, deleteTodo, alterTodo } from '../../redux/action';

const mapStateToProps = (state) => {
    const { todo = {} } = state;
    const { list = [] } = todo;
    return {
        list,
    }
};

const mapDispatchTopProps = (dispatch) => {
    return {
        addTodo: (name) => {
            dispatch(addTodo(name));
        },
        deleteTodo: (index) => {
            dispatch(deleteTodo(index));
        },
        alterTodo: (index) => {
            dispatch(alterTodo(index));
        },
    }
}

export default connect(
    mapStateToProps,
    mapDispatchTopProps,
)(Index);
import React, { Component } from 'react';

export default class Index extends Component {

    completed = (index) => {
        const { alterTodo } = this.props;
        alterTodo(index);
    }

    deleted = (index) => {
        const { deleteTodo } = this.props;
        deleteTodo(index);
    }

    onInput = (e) => {
        this.newTodo = e.target.value;
    }

    addTodo = () => {
        const { addTodo } = this.props;
        addTodo(this.newTodo);
    }
    renderList (list, completedShow) {
        
        list.length > 0 && list.map((item, index) => {
            const visible = completedShow ? item.completed : !item.completed;
            return !item.deleted && visible && (
                <div className='item' key={index}>
                    <div className='item-name'>{item.name}</div>
                    <div className='item-completed' onClick={this.completed.bind(this, index)}>完成</div>
                    <div className='item-completed' onClick={this.deleted.bind(this, index)}>删除</div>
                </div>
            )
        })
    }
    
   
    render () {
        const { list = [] } = this.props;
        // debugger
        return (
                <div className='app'>
                    <div className='add'>
                        <div className='add-input'>
                            <input type='text' onInput={this.onInput} />
                        </div>
                        <div className='add-btn' onClick={this.addTodo}>添加</div>
                    </div>
                    <div>
                        {/* <div>待办事项</div> */}
                        {/* {this.renderList(list, false)} */}
                        {/* <div>已办事项</div> */}
                        {/* {this.renderList(list, true)} */}
                    </div>
                </div>
        )
    } 
}
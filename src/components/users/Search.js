import React, { Component } from 'react';

export class Search extends Component {
	state = {
		text: '',
	};

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
    }

	render() {
		return (
			<div>
				<form onSubmit={this.onSubmit} className='form'>
					<input type='text' name='text' placeholder='Search Users...' />
					<input
						type='submit'
						value={this.state.text}
						className='btn btn-dark btn-block'
                        onChange={this.onChange}
					/>
				</form>
			</div>
		);
	}
}

export default Search;

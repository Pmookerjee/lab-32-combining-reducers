import React from 'react';
import Enzyme, {simulate, mount, shallow} from 'enzyme';
import uuid from 'uuid/v1';

import categoryReducer from '../components/categories/categoryState/category-reducer';
import expenseReducer from '../components/expenses/expenseState/expense-reducer';

describe('Reducer tests', () => { 

	describe('Category Reducer tests', () => {
		
		let category = {name: 'Fabulous', createDate: new Date(), id: uuid()};
		let state =[];		

		test('add a new category', () => {
			let action = {type: 'CATEGORY_ADD', payload: category};
			state = categoryReducer(state, action);

			expect(state.length).toEqual(1);
			expect(state[0].name).toEqual('Fabulous');
				
		});

		test('update a category', () => {
			
			let newCategory = {name: 'New and improved!'};			

				state = categoryReducer(state, {
				type: 'CATEGORY_UPDATE',
				payload: {
					name: newCategory.name,
					createDate: new Date(),
					id: category.id,
				}
			});

			expect(state[0].name).toEqual('New and improved!');
			expect(state.length).toEqual(1);
		});

		test('delete a category', () => {
		
			let cat1 = {name: 'Cat1', budget: '50', expenses: {}, id: uuid()};
		  let cat2 = {name: 'Cat2', budget: '100', expenses: {}, id: uuid()};
		
			state = [{...cat1}, {...cat2}];
			
			state = categoryReducer(state, {
				type: 'CATEGORY_DESTROY', 
				payload: cat1.id
			});

			expect(state.length).toEqual(1);
			expect(state[0].name).toEqual('Cat2');
		});
	})

	describe('Expense Reducer tests', () => {
		
		let category = {
			name: 'Groceries',
			budget: '300',
			createDate: new Date(),
			id: uuid(),
			expenses: {}
		};	
	
		let expense = { 
			expense: '', 
			cost: '', 
			createDate: new Date(), 
			id: uuid(),
			categoryId: category.id
		 
		};
		
		test('add a new expense', () => {
			let action = {type: 'EXPENSE_ADD', payload: expense};
			let state = expenseReducer(state, action);
	
			expect(state.length).toEqual(1);
			expect(state[0].expense).toEqual('PCC');
			expect(state[0].cost).toEqual('200');
				
		});
		
			// test('update a expense', () => {
				
			// 	let newexpense = {name: 'New and improved!'};			
		
			// 		state = reducer(state, {
			// 		type: 'EXPENSE_UPDATE',
			// 		payload: {
			// 			name: newexpense.name,
			// 			createDate: new Date(),
			// 			id: expense.id,
			// 		}
			// 	});
		
			// 	expect(state[0].name).toEqual('New and improved!');
			// 	expect(state.length).toEqual(1);
			// });
		
			// test('delete a expense', () => {
			
			// 	let cat1 = {name: 'Cat1', id: uuid()};
			// 	let cat2 = {name: 'Cat2', id: uuid()};
			// 	state = [{...cat1}, {...cat2}];
				
			// 	state = reducer(state, {
			// 		type: 'EXPENSE_DELETE', 
			// 		payload: cat1.id
			// 	});
		
			// 	expect(state.length).toEqual(1);
			// 	expect(state[0].name).toEqual('Cat2');
			// });
		})
})


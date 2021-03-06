import React , {useContext}from 'react';
import OrderItem from '../components/OrderItem';
import '../styles/MyOrder.scss';
import AppContext from '../context/AppContext';

const MyOrder = () => {
	const{state} = useContext(AppContext);

	const sumTotal02 = () => {
		let sum = 0;
		state.cart.forEach(item => {
			sum += item.price;
		});
		return sum;
	}
	const sumTotal = () => {
		const reducer = (accumulator, currentValue) => accumulator + currentValue.price
		const sum = state.cart.reduce(reducer, 0);
		return sum;
	}

	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img src="./icons/flechita.svg" alt="arrow" />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				{state.cart.map(product => (
					<OrderItem product={product} key ={`orderItem-${product.id}`}/>
				))}
				
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${sumTotal02()}</p>
					
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
	);
}

export default MyOrder;

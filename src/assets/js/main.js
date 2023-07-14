const counters = document.querySelectorAll('.section__list-item-valuecount')


counters.forEach(function(counter) {
	counter.addEventListener('click', function(e) {
		const operator = e.target.dataset.action
		const number = counter.querySelector('.section__list-item-number')
		const sectionList = counter.closest('.section__list')
		const price = sectionList.querySelector('.section__list-item-price')

		if (operator == 'plus' && number.innerText < 30) {
			number.innerText = ++number.innerText

			if (e.target.hasAttribute('guest')) {
				price.innerText = parseInt(price.innerText) + 87
			}
			
		}
		
		if (operator == 'minus' && number.innerText > 1) {
			number.innerText = --number.innerText

			if (e.target.hasAttribute('guest')) {
				price.innerText = parseInt(price.innerText) - 87
			}
		}
	})
})


const productPoints = document.querySelectorAll('.shop__product-point')
const shop = document.querySelector('.shop')

productPoints.forEach(function(productPoint) {
	productPoint.addEventListener('click', function() {
		productPoint.classList.toggle('shop__product-point--active')

		productPoint.querySelector('.shop__product-point-content').addEventListener('click', function(e) {
			e.stopPropagation()
		})
	})
})

shop.addEventListener('click', function(e) {
	productPoints.forEach(function(productPoint) {
			productPoint.classList.remove('shop__product-point--active')

			productPoint.addEventListener('click', function(e) {
				e.stopPropagation()
			})
		})
	})












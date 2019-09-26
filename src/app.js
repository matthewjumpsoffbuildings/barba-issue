import barba from '@barba/core';

barba.init({
	views: [{
			namespace: 'home',
			beforeLeave(data) {
				SOME_BROKEN_STUFF()
			},
		},
		{
			namespace: 'about',
			beforeEnter(data) {
				SOME_BROKEN_STUFF()
			},
		}
	]
});
// SIDEBAR DROPDOWN
const allDropdown = document.querySelectorAll('#sidebar .side-dropdown');
const sidebar = document.getElementById('sidebar');

allDropdown.forEach(item => {
	const a = item.parentElement.querySelector('a:first-child');
	a.addEventListener('click', function (e) {
		e.preventDefault();

		if (!this.classList.contains('active')) {
			allDropdown.forEach(i => {
				const aLink = i.parentElement.querySelector('a:first-child');

				aLink.classList.remove('active');
				i.classList.remove('show');
			})
		}

		this.classList.toggle('active');
		item.classList.toggle('show');
	})
})





// SIDEBAR COLLAPSE
const toggleSidebar = document.querySelector('nav .toggle-sidebar');
const allSideDivider = document.querySelectorAll('#sidebar .divider');

if (sidebar.classList.contains('hide')) {
	allSideDivider.forEach(item => {
		item.textContent = '-'
	})
	allDropdown.forEach(item => {
		const a = item.parentElement.querySelector('a:first-child');
		a.classList.remove('active');
		item.classList.remove('show');
	})
} else {
	allSideDivider.forEach(item => {
		item.textContent = item.dataset.text;
	})
}

toggleSidebar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');

	if (sidebar.classList.contains('hide')) {
		allSideDivider.forEach(item => {
			item.textContent = '-'
		})

		allDropdown.forEach(item => {
			const a = item.parentElement.querySelector('a:first-child');
			a.classList.remove('active');
			item.classList.remove('show');
		})
	} else {
		allSideDivider.forEach(item => {
			item.textContent = item.dataset.text;
		})
	}
})




sidebar.addEventListener('mouseleave', function () {
	if (this.classList.contains('hide')) {
		allDropdown.forEach(item => {
			const a = item.parentElement.querySelector('a:first-child');
			a.classList.remove('active');
			item.classList.remove('show');
		})
		allSideDivider.forEach(item => {
			item.textContent = '-'
		})
	}
})



sidebar.addEventListener('mouseenter', function () {
	if (this.classList.contains('hide')) {
		allDropdown.forEach(item => {
			const a = item.parentElement.querySelector('a:first-child');
			a.classList.remove('active');
			item.classList.remove('show');
		})
		allSideDivider.forEach(item => {
			item.textContent = item.dataset.text;
		})
	}
})


// MENU
const allMenu = document.querySelectorAll('main .content-data .head .menu');

allMenu.forEach(item => {
	const icon = item.querySelector('.icon');
	const menuLink = item.querySelector('.menu-link');

	icon.addEventListener('click', function () {
		menuLink.classList.toggle('show');
	})
})



window.addEventListener('click', function (e) {
	if (e.target !== imgProfile) {
		if (e.target !== dropdownProfile) {
			if (dropdownProfile.classList.contains('show')) {
				dropdownProfile.classList.remove('show');
			}
		}
	}

	allMenu.forEach(item => {
		const icon = item.querySelector('.icon');
		const menuLink = item.querySelector('.menu-link');

		if (e.target !== icon) {
			if (e.target !== menuLink) {
				if (menuLink.classList.contains('show')) {
					menuLink.classList.remove('show')
				}
			}
		}
	})
})





// PROGRESSBAR
// const allProgress = document.querySelectorAll('main .card .progress');

// allProgress.forEach(item=> {
// 	item.style.setProperty('--value', item.dataset.value)
// })

// light
function light(value) {
	var pic;
	if (value == 0) {
		pic = "image/offbulb.png";
	} else {
		pic = "image/onbulb.png";
	}
	document.getElementById('bulb').src = pic;
}

const button = document.getElementById('colorButton');

button.addEventListener('click', function () {
	if (button.textContent === 'Off') {
		button.textContent = 'On';
		button.classList.add('active');
	} else {
		button.textContent = 'Off';
		button.classList.remove('active');
	}

	// Gọi hàm light với tham số tương ứng với trạng thái của nút
	light(button.classList.contains('active') ? 1 : 0);
});

//fan
const toggleButton = document.getElementById('toggleButton');
const fanIcon = document.getElementById('fanIcon');

toggleButton.addEventListener('click', function () {
	if (toggleButton.textContent === 'Off') {
		toggleButton.textContent = 'On';
		toggleButton.classList.add('active');
		fanIcon.classList.add('rotate');
	} else {
		toggleButton.textContent = 'Off';
		toggleButton.classList.remove('active');
		fanIcon.classList.remove('rotate');
	}
});



// APEXCHART
var options = {
	series: [{
		name: 'Temp',
		data: [31, 29, 28, 30, 29, 30, 26]
	}, {
		name: 'Humi',
		data: [40, 40, 27, 36, 41, 28, 15]
	}, {
		name: 'Light',
		data: [30, 32, 45, 32, 34, 52, 41]
	}],
	chart: {
		height: 450,
		type: 'area'
	},
	dataLabels: {
		enabled: false
	},
	stroke: {
		curve: 'smooth'
	},
	// xaxis: {
	// 	type: 'datetime',
	// 	categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
	// },
	tooltip: {
		x: {
			format: 'dd/MM/yy HH:mm'
		},
	},
	colors: ['#eb853b', '#5ee1e2', '#e3ed4d']
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
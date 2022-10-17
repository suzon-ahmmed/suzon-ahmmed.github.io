$(document).ready(function () {

	const Navigation = () => {
		let navBar = ['Home', 'About', 'Skills', 'Portfolio', 'Services', 'Contact'];

		console.log(navBar);
		for (let i = 0; i < navBar.length; i++) {
			let isActive = (i === 0) ? 'active' : '';
			let isCurrent = (i === 0) ? 'aria-current="page"' : '';

			// console.log(isActive, isCurrent);
			$('#renderNavbar').append(`
			<li class="nav-item">
				<a class="nav-link ${isActive}" ${isCurrent} href="#${navBar[i].toLowerCase()}">${navBar[i]}</a>
			</li>
			`);
		}
	}


	const Protfolio = () => {
		$.ajax({
			url: './src/repository/portfolio.json',
			success: (response) => {
				if (response) {
					for (let i = 0; i < response.length; i++) {
						$('#renderProtfolio').append(`
                  <div class=" col-md-4 col-sm-6">
                     <div class="item">
                        <a href="${response[i]['image']}" data-lightbox="photos">
                           <img class="p_img " src="${response[i]['image']}" alt="Protfolio Image">
                        </a>
                        <a class="main-btn mt-2 mb-2" href="${response[i]['resource']}" target="new-tab">
                           Preview
                        </a>
                     </div>
                  </div>
						`);
					}
				}
			}
		});
	}


	const Services = () => {
		$.ajax({
			url: './src/repository/services.json',
			success: (response) => {
				if (response) {
					for (let i = 0; i < response.length; i++) {
						$('#renderService').append(`
                  <div class="col-md-4 col-sm-6">
                     <div class="service">
                        <div class="service-icon"><i class="${response[i]['icon']} fa-lg"></i></div>
                        <h4>${response[i]['title']}</h4>
                        <p>${response[i]['excerpt']}</p>
                     </div>
                  </div>
						`);
					}
				}
			}
		});
	}


	const Skills = () => {
		$.ajax({
			url: './src/repository/skills.json',
			success: (response) => {
				if (response) {
					for (let i = 0; i < response[0]['personal'].length; i++) {
						$('#renderPersonalSkills').append(`
                  <div class="progress-container">
                     <span class="percent" data-from="0" data-to="${response[0]['personal'][i]['percent']}" data-speed="1100" data-refresh-interval="50">0</span>
                     <h4>${response[0]['personal'][i]['title']}</h4>
                     <div class="progress">
                        <div class="progress-bar" role="progressbar" aria-valuenow="${response[0]['personal'][i]['percent']}" aria-valuemin="0" aria-valuemax="100"></div>
                     </div>
                  </div>
						`);
					}

					for (let i = 0; i < response[1]['professional'].length; i++) {
						$('#renderProfessionalSkills').append(`
                  <div class="progress-container">
                     <span class="percent" data-from="0" data-to="${response[1]['professional'][i]['percent']}" data-speed="1100" data-refresh-interval="50">0</span>
                     <h4>${response[1]['professional'][i]['title']}</h4>
                     <div class="progress">
                        <div class="progress-bar" role="progressbar" aria-valuenow="${response[1]['professional'][i]['percent']}" aria-valuemin="0" aria-valuemax="100"></div>
                     </div>
                  </div>
						`);
					}
				}
			}
		});
	}


	const Contact = () => {
		$.ajax({
			url: './src/repository/contact.json',
			success: (response) => {
				if (response) {
					for (let i = 0; i < response[0]['contact'].length; i++) {
						$('#renderContact').append(`
						<div class="col-sm-4">
							<div class="contact-box">
								<div class="title-box">
									<div class="icon-box"><i class="${response[0]['contact'][i]['icon']}"></i></div>
									<div class="name-box"><h4>${response[0]['contact'][i]['title']}</h4></div>
								</div>
								<div class="content-box"><p>${response[0]['contact'][i]['detail']}</p></div>
								<div class="number-box"><span>0${(i + 1)}.</span></div>
							</div>
						</div>
						`);
					}

					for (let i = 0; i < response[1]['social'].length; i++) {
						$('#renderSocial').append(`
                  <li>
                     <a href="${response[1]['social'][i]['url']}">
                        <i class="${response[1]['social'][i]['icon']}"></i>
                     </a>
                  </li>
						`);
					}
				}
			}
		});
	}


	Navigation();
	Protfolio();
	Services();
	Skills();
	Contact();

	
	// $("img").mousedown(function () {
	// 	return false;
	// });


	// $(document).on('contextmenu', function (e) {
	// 	return false;
	// });


	$(document).keydown(function (event) {
		if (event.keyCode == 123) {
			return false;
		} else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
			return false;
		} else if (event.keyCode == 18) {
			return false;
		}
	});
});

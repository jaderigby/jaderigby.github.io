function slidesLayout() {
	const xDiff = 2025;
	const yDiff = -1500;
	const zDiff = -2200;
	const baseXVal = -8400;
	const baseYVal = 1500;
	const baseZVal = 0;
	let currXAsInt = baseXVal;
	let currYAsInt = baseYVal;
	let currZAsInt = baseZVal;

	// var iOS = !!navigator.platform && iPad|iPhone|iPod/.test(navigator.platform);

	var iOS = true;

	if (iOS) {
		_$('#Navigation').css('display', 'block');
		_$('#touchControls').css('display', 'block');
	}

	const slidesNode = document.getElementById('slides');

	each(slides).dothis(function(_slide_) {

		let md = new Remarkable();
		md.set({
			html: true
		});
		let mdText = md.render(_slide_.content);

		// Calculate for X
		if (_slide_.i !== 0) {

			// if "deck", pause x,y and start using z
			if (_slide_.deck) {
				console.log("==========TRUE");
				currZAsInt = zDiff * (_slide_.deck - 1);
			}
			else if (_slide_.prev.set === _slide_.set) {
				currXAsInt = xDiff + currXAsInt;
			}
			else {
				currXAsInt = baseXVal;
			}

		}

		// Calculate for Y
		if (_slide_.i !== 0) {
			if (_slide_.prev.set !== _slide_.set) {
				currYAsInt = currYAsInt + yDiff;
			}
		}

		var siblingClass = '';
		var nextArrows = '';
		var arrows = '<div class="next-arrows"></div>';
		if (_slide_.next !== null) {
			if (_slide_.set === _slide_.next.set) {
				if (_slide_.next.deck && !("deck" in _slide_)) {
					let iter = 1;
					while (_slide_.up(iter) && "deck" in _slide_.up(iter) && _slide_.next.deck) {
						iter++;
					}
					if (_slide_.up(iter + 1) && _slide_.set === _slide_.up(iter + 1).set) {
					  siblingClass = 'sibling-right';
						nextArrows = arrows;
					}
					else if (_slide_.up(iter + 1) && _slide_.up(iter).set !== _slide_.up(iter + 1).set) {
					  siblingClass = '';
						currYAsInt = baseYVal;
					}
				}
				else if (_slide_.deck) {
					siblingClass = '';
					nextArrows = '';
				}
				else {
					siblingClass = 'sibling-right';
					nextArrows = arrows;
				}
			}
		}

		let template;
		if ("type" in _slide_) {
			template = `<div
	 id="${_slide_.idLabel}"
	 class="step panel ${_slide_.type} ${siblingClass}"
	 data-row="${_slide_.set}"
	 data-x="${currXAsInt}"
	 data-y="${currYAsInt}"
	 data-z="${currZAsInt}"
	 data-scale="1.3"
	>
		<div class="panel-inner">${mdText}</div>
		${nextArrows}
	</div>
	`
		}
		else {
			template = `<div
	 id="${_slide_.idLabel}"
	 class="step panel ${siblingClass}"
	 data-row="${_slide_.set}"
	 data-x="${currXAsInt}"
	 data-y="${currYAsInt}"
	 data-z="${currZAsInt}"
	 data-scale="1.3"
	>
		<div class="panel-inner">${mdText}</div>
		${nextArrows}
	</div>
	`
		}

		slidesNode.insertAdjacentHTML('beforeend', template);

		// reset for z, if no more in deck
		if (_slide_.deck) {
			if (_slide_.next) {
				if (!(_slide_.next.deck)) {
					currZAsInt = baseZVal;
				}
			}
		}

	});
}

slidesLayout();

(function() {
	let num = 0;
	let items = _$('.step').items;
	items.forEach(function (_item_) {
		let slide = _$(_item_).attr("id");
		let slideTitle = slide.replace(/-/g, ' ');
		_$('#sourceBar ul').append('<li><a href="#'+ slide +'">'+ (num === 0 ? '*' : num) +'</a></li><div class="desc"><div class="pointer"></div>'+ slideTitle +'</div>');
		num++;
	});

	const trigger = _$('#sourceBarTrigger').item;

	trigger.addEventListener('mouseenter', function(e) {
		_$('#sourceBar').addClass('active');
	});
	trigger.addEventListener('mouseleave', function(e) {
		_$('#sourceBar').removeClass('active');
	});

	document.getElementById('sidebarTrigger').onclick = function(e) {
		_$('#sourceBar').toggleClass('active');
	};

	// const bar = _$('#sourceBar').item;
	// _$(bar).delegate('mouseenter', 'li', () => {
	// 	_$(this).next('.desc').css({
	// 		display: 'block'
	// 	});
	// });
	//
	//
	//
	//
	//
	//
	// $('#sourceBar').delegate('li', {
	// 	// var myMarker = $(this).next('.desc');
	// 	mouseenter: function() {
	// 		$(this).next('.desc').css({
	// 			display: 'block'
	// 		});
	// 		$(this).next('.desc').animate({
	// 			opacity: 0.52,
	// 			marginLeft: '65px'
	// 		}, 250)
	// 	}, mouseleave: function() {
	// 		$(this).next('.desc').animate({
	// 			opacity: 0,
	// 			marginLeft: '45px'
	// 		}, 250, function() {
	// 			$(this).next('.desc').css('display', 'none')
	// 		})
	// 	}
	// });
}());

impress().init();

// Initialize
var currFrame = getFrame(window.location.href);
var trackOrder = 0;
// initShowHide();

var rootElement = document.getElementById( "impress" );
rootElement.addEventListener( "impress:stepleave", function(event) {
  var currentStep = event.target;
  var nextStep = event.detail.next;
	if (nextStep.id !== 'first') {
		_$('#title').addClass('minimize');
	}
	else {
		_$('#title').removeClass('minimize');
	}
});

window.addEventListener('hashchange', function(e) {
	currFrame = getFrame(window.location.href);
	assignVal('first', '#title', 'show');
});

// var rightArrow = 39;
// var leftArrow = 37;
// var upArrow = 38;
// var downArrow = 40;
const n_key = 78;
const d_key = 68;
const tab_key = 9;

document.getElementById('reveal').onclick = function(e) {
	if (currFrame === 'first') {
	}
		else {
			if (_$("#" + currFrame + ' .fade').items.length !== 0) {
				let items = _$("#" + currFrame + ' .show').items;
				let latest = 0;
				if (items.length > 0) {
					latest = items.length;
				}
				let showList = _$('#' + currFrame + ' .fade').items;
				let currShow = showList[latest];
				if (showList.length !== items.length) {
					show(currShow);
				}
			}
			else if (_$("#" + currFrame + ' .swap').items.length !== 0) {
				let latestSwap = 0;
				let showList = _$('#' + currFrame + ' .swap').items;
				console.log("showList: ", showList);
				for (let i = 0; i < showList.length; i++) {
					if (showList[i].classList.contains('show')) {
						latestSwap++;
						break;
					}
					else {
						latestSwap++;
					}
				}

				if (showList.length === latestSwap) {
					console.log("latestSwap: ", latestSwap);
					latestSwap = 0;
				}

				console.log("latestSwap: ", latestSwap);

				(showList).forEach( (_item_) => {
					hide(_item_);
				});
				show(showList[latestSwap]);
				handleSwapDots(currFrame);
			}
		}
}

document.getElementById('revealBack').onclick = function(e) {
	if (currFrame !== 'first') {
		if (_$("#" + currFrame + ' .fade').items.length !== 0) {
			let items = _$("#" + currFrame + ' .show').items;
			let latest = 0;
			if (items.length > 0) {
				latest = items.length - 1;
			}
			let showList = _$('#' + currFrame + ' .fade').items;
			let currShow = showList[latest];
			hide(currShow);
		}
		else if (_$("#" + currFrame + ' .swap').items.length !== 0) {
			let latestSwap = 0;
			let latestSwapReverse = 0;
			let showList = _$('#' + currFrame + ' .swap').items;
			for (let i = 0; i < showList.length; i++) {
				if (showList[i].classList.contains('show')) {
					latestSwap++;
					break;
				}
				else {
					latestSwap++;
				}
			}

			latestSwapReverse = ((latestSwap - 2) < 0) ? (showList.length - 1) : (latestSwap - 2);

			(showList).forEach( (_item_) => {
				hide(_item_);
			});
			show(showList[latestSwapReverse]);
			handleSwapDots(currFrame);
		}
	}
}

function initSwapDots() {
	_$(".swap-wrap").items.forEach(function(_item_) {
		const count = _$(_item_).item.children.length;
		let dots = "";

		for (let i = 0; i < count; i++) {
			dots += `<div class="dot" data-index="${i}"></div>`;
		}
		dots = `<div class="swap-dots">${dots}</div>`;
		_$(_item_.parentElement).append(dots);
	});
}

initSwapDots();

function handleSwapDots(par) {
	let activeItem = null;
	_$("#" + par + " .swap").items.forEach(function(_item_, _i_) {
		if (_item_.classList.contains('show')) {
			activeItem = _i_;
		}
	});
	_$("#" + par + " .swap-dots .dot").items.forEach(function(_item_) {
		if (parseInt(_$(_item_).attr('data-index')) === activeItem) {
			_$("#" + par + " .swap-dots .dot").removeClass('current');
			_$(_item_).addClass('current');
		}
	});
}

window.addEventListener('keydown', function(e) {
	// console.log("Key: ",e.keyCode);
	if (currFrame === 'first') {
	}
	else {
		if (e.shiftKey) {
			if (e.keyCode === d_key && _$("#" + currFrame + ' .fade').items.length !== 0) {
				let items = _$("#" + currFrame + ' .show').items;
				let latest = 0;
				if (items.length > 0) {
					latest = items.length - 1;
				}
				let showList = _$('#' + currFrame + ' .fade').items;
				let currShow = showList[latest];
				hide(currShow);
			}
			else if (e.keyCode === d_key && _$("#" + currFrame + ' .swap').items.length !== 0) {
				let latestSwap = 0;
				let latestSwapReverse = 0;
				let showList = _$('#' + currFrame + ' .swap').items;
				for (let i = 0; i < showList.length; i++) {
					if (showList[i].classList.contains('show')) {
						latestSwap++;
						break;
					}
					else {
						latestSwap++;
					}
				}

				latestSwapReverse = ((latestSwap - 2) < 0) ? (showList.length - 1) : (latestSwap - 2);

				(showList).forEach( (_item_) => {
					hide(_item_);
				});
				show(showList[latestSwapReverse]);
				handleSwapDots(currFrame);
			}
		}
		else {
			if ((e.keyCode === d_key) && _$("#" + currFrame + ' .fade').items.length !== 0) {
				let items = _$("#" + currFrame + ' .show').items;
				let latest = 0;
				if (items.length > 0) {
					latest = items.length;
				}
				let showList = _$('#' + currFrame + ' .fade').items;
				let currShow = showList[latest];
				if (showList.length !== items.length) {
					show(currShow);
				}
			}
			else if (e.keyCode === d_key && _$("#" + currFrame + ' .swap').items.length !== 0) {
				let latestSwap = 0;
				let showList = _$('#' + currFrame + ' .swap').items;
				console.log("showList: ", showList);
				for (let i = 0; i < showList.length; i++) {
					if (showList[i].classList.contains('show')) {
						latestSwap++;
						break;
					}
					else {
						latestSwap++;
					}
				}

				if (showList.length === latestSwap) {
					console.log("latestSwap: ", latestSwap);
					latestSwap = 0;
				}

				console.log("latestSwap: ", latestSwap);

				(showList).forEach( (_item_) => {
					hide(_item_);
				});
				show(showList[latestSwap]);
				handleSwapDots(currFrame);
			}
			else if (e.keyCode === n_key ) {
				window.location.href = '#first';
			}
		}
	}
});

function getFrame(currUrl) {
	var pat = /[a-zA-Z\-0-9]*$/g;
	return currUrl.match(pat)[0];
}

function assignVal(frameToWatch, elemToChange, newAttr) {
	if (currFrame === frameToWatch) {
		_$(elemToChange).addClass(newAttr);
	}
	else {
		_$(elemToChange).removeClass(newAttr);
	}
}

function show(myItem) {
	_$(myItem).css('height', 'auto');
	_$(myItem).addClass('show');
}

function hide(myItem) {
	_$(myItem).removeClass('show');
	_$(myItem).css('height', '0');
}

document.getElementById('moveLeft').onclick = function(e) {
	impress().prev();
};

document.getElementById('moveRight').onclick = function(e) {
	impress().next();
};

document.getElementById('homeBtn').onclick = function(e) {
	window.location.href = '#first';
};

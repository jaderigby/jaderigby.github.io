function slidesLayout() {
	const xDiff = 2025;
	const yDiff = -1500;
	const zDiff = -2200;
	const zFlowYDiff = 650;
	const zFlowFirstZDiff = -600;
	const zFlowZDiff = -1300;
	const xRotate = -90;
	const baseXVal = -8400;
	const baseYVal = 1500;
	const baseZVal = 0;
	const baseXRotation = 0;
	let currXAsInt = baseXVal;
	let currYAsInt = baseYVal;
	let currZAsInt = baseZVal;
	let currXRotationAsInt = baseXRotation;
	let trackZFlow = 0;

	// var iOS = !!navigator.platform && iPad|iPhone|iPod/.test(navigator.platform);

	var iOS = true;

	if (iOS) {
		_$('#Navigation').css('display', 'block');
		_$('#touchControls').css('display', 'block');
	}

	const slidesNode = document.getElementById('slides');

	each(slides).dothis(function(_slide_) {

		// console.log(_slide_);

		let md = new Remarkable();
		md.set({
			html: true
		});

		function processCenterMarkup(STRING) {
			const str = STRING.replace(/>>.*<</g, function(matched) {
				return matched.replace('>>', '<span class="markdown-center-justify">').replace('<<', '</span>');
			});
			return str;
		}

		function processSlideGroups(STRING) {
			const str = STRING.replace(/<key-slot>/g, '<div class="swap">').replace(/(<\/key-slot>|<\/key-group>)/g, '</div>').replace(/<key-slot show>/g, '<div class="swap show">')
			const groupFormattedStr = str.replace(/<(key-group|key-group [a-z\-]*)>/g, function(_match_) {
				const capturedType = _match_.replace('<key-group','').replace(' ', '').replace('>', '');
				// const finalStr = if 
				return _match_.replace(/<(key-group|key-group [a-z\-]*)>/g, '<div class="swap-wrap '+ capturedType +'">');
			});
			return groupFormattedStr;
		}

		const contentCenterProcessed = processCenterMarkup(_slide_.content);
		const contentSlideGroupProcessed = processSlideGroups(contentCenterProcessed);

		let mdText = md.render(contentSlideGroupProcessed);

		// Calculate for X
		if (_slide_.i !== 0) {

			// if "deck", pause x,y and start using z
			if (_slide_.deck) {
				currZAsInt = zDiff * (_slide_.deck - 1);
			}
			// else if (_slide_.flow && _slide_.flow === 'z') {
			// 	if (trackZFlow === 0) {
			// 		currXRotationAsInt = xRotate;
			// 		currYAsInt = zFlowYDiff + currYAsInt;
			// 		currZAsInt = zFlowFirstZDiff + currZAsInt;
			// 	}
			// 	else {
			// 		currZAsInt = zFlowZDiff + currZAsInt;
			// 	}
			// 	trackZFlow++;
			// }
			else if (_slide_.prev.set === _slide_.set) {
				currXAsInt = xDiff + currXAsInt;
			}
			else {
				currXAsInt = baseXVal;
			}

		}

		// Calculate for Y
		if (_slide_.i !== 0) {
			// console.log(_slide_);
			// console.log(currYAsInt);
			// console.log
			if (_slide_.prev.set !== _slide_.set) {
				currYAsInt = currYAsInt + yDiff;
			}
		}

		var siblingClass = '';
		var nextArrows = '';
		var arrows = '<div class="next-arrows"></div>';
		var arrowsAfterTheFact = '<div class="next-arrows after-the-fact"></div>';
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
						// currYAsInt = baseYVal;
					}
				}
				// else if (_slide_.next.flow && !("flow" in _slide_)) {
				// 	let iter = 1;
				// 	while (_slide_.up(iter) && "flow" in _slide_.up(iter) && _slide_.next.flow) {
				// 		iter++;
				// 	}
				// 	if (_slide_.up(iter + 1) && _slide_.set === _slide_.up(iter + 1).set) {
				// 	  siblingClass = 'sibling-right';
				// 		nextArrows = arrows;
				// 	}
				// 	else if (_slide_.up(iter + 1) && _slide_.up(iter).set !== _slide_.up(iter + 1).set) {
				// 	  siblingClass = '';
				// 	}
				// }
				else if (_slide_.deck || _slide_.flow) {
					siblingClass = '';
					nextArrows = '';
				}
				else {
					// siblingClass = 'sibling-right';
					nextArrows = arrows;
				}
			}
			else if (!_slide_.deck && _slide_.prev && _slide_.prev.deck) {
				// currYAsInt = baseYVal;
				nextArrows = arrowsAfterTheFact;
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
	 data-rotate-x="${currXRotationAsInt}"
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
	 data-z="${currZAsInt}"	 data-rotate-x="${currXRotationAsInt}"
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

		// reset for y,z, if no more in flow
		// if (_slide_.flow) {
		// 	if (_slide_.next) {
		// 		if (!(_slide_.next.flow)) {
		// 			currZAsInt = baseZVal;
		// 			currXRotationAsInt = 0;
		// 			currYAsInt = baseYVal;
		// 		}
		// 	}
		// }

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
		
		// normalize wipe slides
		_$('.swap-wrap.wipe').items.forEach(function(_group_) {
			_$(_group_.children).addClass('start');
		});
	});

	const trigger = _$('#sourceBarTrigger').item;

	trigger.addEventListener('mouseenter', (e) => {
		_$('#sourceBar').addClass('active');
	});
	trigger.addEventListener('mouseleave', (e) => {
		_$('#sourceBar').removeClass('active');
	});

	document.getElementById('sidebarTrigger').onclick = function(e) {
		_$('#sourceBar').toggleClass('active');
	};

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

window.addEventListener('hashchange', (e) => {
	currFrame = getFrame(window.location.href);
	assignVal('first', '#title', 'show');
});

const n_key = 'n';
const d_key = 'd';
const l_key = 'l';
const x_key = 'x';
const r_key = 'r';
const enter_key = 'Enter';

_$('#reveal').click((e) => {
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
			else if (_$('#' + currFrame + ' .fade-set li').items.length !== 0) {
				let items = _$("#" + currFrame + ' .show').items;
				let latest = 0;
				if (items.length > 0) {
					latest = items.length;
				}
				let showList = _$('#' + currFrame + ' .fade-set li').items;
				let currShow = showList[latest];
				if (showList.length !== items.length) {
					show(currShow);
				}
			}
			else if (_$('#' + currFrame + ' .fade-set p').items.length !== 0) {
				let items = _$("#" + currFrame + ' .show').items;
				let latest = 0;
				if (items.length > 0) {
					latest = items.length;
				}
				let showList = _$('#' + currFrame + ' .fade-set p').items;
				let currShow = showList[latest];
				if (showList.length !== items.length) {
					show(currShow);
				}
			}
			else if (_$("#" + currFrame + ' .swap').items.length !== 0) {
				let latestSwap = 0;
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

				if (showList.length === latestSwap) {
					latestSwap = 0;
				}

				(showList).forEach( (_item_) => {
					hide(_item_);
				});
				show(showList[latestSwap]);
				handleSwapDots(currFrame);
			}
		}
});

_$('#revealBack').click((e) => {
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
		else if (_$('#' + currFrame + ' .fade-set li').items.length !== 0) {
			let items = _$("#" + currFrame + ' .show').items;
			let latest = 0;
			if (items.length > 0) {
				latest = items.length - 1;
			}
			let showList = _$('#' + currFrame + ' .fade-set li').items;
			console.log(showList);
			let currShow = showList[latest];
			hide(currShow);
		}
		else if (_$('#' + currFrame + ' .fade-set p').items.length !== 0) {
			let items = _$("#" + currFrame + ' .show').items;
			let latest = 0;
			if (items.length > 0) {
				latest = items.length - 1;
			}
			let showList = _$('#' + currFrame + ' .fade-set > p').items;
			console.log(showList);
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
});

function initSwapDots() {
	_$(".swap-wrap").items.forEach(function(_item_) {
		const count = _$(_item_).item.children.length;
		let dots = "";
		let isShown = 0;

		if (_item_.children[0].classList.contains('show')) {
			isShown++;
		}
		
		for (let i = 0; i < count; i++) {
			if (i === 0 && isShown) {
				dots += `<div class="dot current" data-index="${i}"></div>`;
			}
			else {
				dots += `<div class="dot" data-index="${i}"></div>`;
			}
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

window.addEventListener('keydown', (e) => {
	if (currFrame === 'first') {
	}
	if (e.key === x_key) {
		_$('#touchControls').toggleClass('hide');
		_$('#Navigation').toggleClass('hide');
	}
	if (e.key === r_key) {
		window.location.reload(window.location.href);
	}
	else {
		if (e.shiftKey) {
			if ((e.key === d_key || e.key === enter_key) && _$("#" + currFrame + ' .fade').items.length !== 0) {
				let items = _$("#" + currFrame + ' .show').items;
				let latest = 0;
				if (items.length > 0) {
					latest = items.length - 1;
				}
				let showList = _$('#' + currFrame + ' .fade').items;
				let currShow = showList[latest];
				hide(currShow);
			}
			else if ((e.key === d_key || e.key === enter_key) && _$("#" + currFrame + ' .fade-set p, #' + currFrame + ' .fade-set li').items.length !== 0) {
				
				let items = _$("#" + currFrame + ' .show').items;
				let latest = 0;
				if (items.length > 0) {
					latest = items.length - 1;
				}
				let showList = _$('#' + currFrame + ' .fade-set p, #' + currFrame + ' .fade-set li').items;
				let currShow = showList[latest];
				hide(currShow);
			}
			else if ((e.key === d_key || e.key === enter_key) && _$("#" + currFrame + ' .swap').items.length !== 0) {
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
			if ((e.key === l_key)) {
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
					else if (_$('#' + currFrame + ' .fade-set li').items.length !== 0) {
						let items = _$("#" + currFrame + ' .show').items;
						let latest = 0;
						if (items.length > 0) {
							latest = items.length - 1;
						}
						let showList = _$('#' + currFrame + ' .fade-set li').items;
						console.log(showList);
						let currShow = showList[latest];
						hide(currShow);
					}
					else if (_$('#' + currFrame + ' .fade-set p').items.length !== 0) {
						let items = _$("#" + currFrame + ' .show').items;
						let latest = 0;
						if (items.length > 0) {
							latest = items.length - 1;
						}
						let showList = _$('#' + currFrame + ' .fade-set > p').items;
						console.log(showList);
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















			if ((e.key === d_key || e.key === enter_key) && _$("#" + currFrame + ' .fade').items.length !== 0) {
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
			else if ((e.key === d_key || e.key === enter_key) && _$('#' + currFrame + ' .fade-set li').items.length !== 0) {
				let items = _$("#" + currFrame + ' .show').items;
				let latest = 0;
				if (items.length > 0) {
					latest = items.length;
				}
				let showList = _$('#' + currFrame + ' .fade-set li').items;
				let currShow = showList[latest];
				if (showList.length !== items.length) {
					show(currShow);
				}
			}
			else if ((e.key === d_key || e.key === enter_key) && _$('#' + currFrame + ' .fade-set p').items.length !== 0) {
				let items = _$("#" + currFrame + ' .show').items;
				let latest = 0;
				if (items.length > 0) {
					latest = items.length;
				}
				let showList = _$('#' + currFrame + ' .fade-set p').items;
				let currShow = showList[latest];
				if (showList.length !== items.length) {
					show(currShow);
				}
			}
			else if ((e.key === d_key || e.key === enter_key) && _$("#" + currFrame + ' .swap').items.length !== 0) {
				let latestSwap = 0;
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

				if (showList.length === latestSwap) {
					latestSwap = 0;
				}

				(showList).forEach( (_item_) => {
					hide(_item_);
				});
				show(showList[latestSwap]);
				handleSwapDots(currFrame);
			}
			else if (e.key === n_key ) {
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
	if (_$(myItem).item.classList.contains('show')) {
		_$(myItem).removeClass('start');
		setTimeout(function() {
			_$(myItem).addClass('start');
		}, 500);
	}
	_$(myItem).removeClass('show');
	_$(myItem).css('height', '0');
}

_$('#moveLeft').click(() => {
	impress().prev();
});

_$('#moveRight').click(() => {
	impress().next();
});

_$('#homeBtn').click(() => {
	window.location.href = '#first';
});

_$('#title').item.innerHTML = title;

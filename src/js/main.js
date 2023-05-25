const offerBtnDesktop = document.querySelector('.offer-desktop-item')
const offerBtnDesktopChangeColor = document.querySelector('.offer-color')
const dropdownDesktopItem = document.querySelector('.desktop-offer-menu')
const arrowIconDesktopMenu = document.querySelector('.nav__arrow-icon')
const mediaBarFB = document.querySelector('.nav__fb-space')
const mediaBarIG = document.querySelector('.nav__ig-space')
const nav = document.querySelector('.nav')
const logoDesktop = document.querySelector('.nav__logo-bg')
const burgerBTN = document.querySelector('.nav__burger-btn')
const spanBTN1 = document.querySelector('.nav__burger-btn-span1')
const spanBTN2 = document.querySelector('.nav__burger-btn-span2')
const spanBTN3 = document.querySelector('.nav__burger-btn-span3')
const mobileMenu = document.querySelector('.nav__mobile-menu-container')
const logo = document.querySelector('.nav__logo-bg')
const showMobileMenuByOfferClick = document.querySelector('.mobile-menu-offer-item')
const showedMobileMenuByOfferClick = document.querySelector('.nav__mobile-menu-container-offer-submenu')
const submenuULitems1 = document.querySelector('.submenu-LI-link1')
const submenuULitems2 = document.querySelector('.submenu-LI-link2')
const submenuULitems3 = document.querySelector('.submenu-LI-link3')
const submenuULitems4 = document.querySelector('.submenu-LI-link4')
const submenuULitems5 = document.querySelector('.submenu-LI-link5')
const submenuBackBtn = document.querySelector('.nav__mobile-menu-items-back-btn')
const mediaBar = document.querySelector('.nav__media-bar')

const H3aboutmeOne = document.querySelector('.h3-education-one')
const H3aboutmeTwo = document.querySelector('.h3-education-two')
const H3aboutmeThree = document.querySelector('.h3-education-three')
const H3aboutmeFour = document.querySelector('.h3-education-four')
const H3aboutmeTextOne = document.querySelector('.education-list-one')
const H3aboutmeTextTwo = document.querySelector('.education-list-two')
const H3aboutmeTextThree = document.querySelector('.education-list-three')
const H3aboutmeTextFour = document.querySelector('.education-list-four')
const aboutmeIcon1 = document.querySelector('.aboutme__h3-education-svg-icon-one')
const aboutmeIcon2 = document.querySelector('.aboutme__h3-education-svg-icon-two')
const aboutmeIcon3 = document.querySelector('.aboutme__h3-education-svg-icon-three')
const aboutmeIcon4 = document.querySelector('.aboutme__h3-education-svg-icon-four')


//dropdown menu for "offer" item (desktop):
const showDekstopOfferMenu = () => {
	offerBtnDesktopChangeColor.style.color = '#d768b2'
	dropdownDesktopItem.classList.add('active')
	arrowIconDesktopMenu.classList.add('rotate')
	arrowIconDesktopMenu.classList.remove('rotate-rev')
}

const hideDekstopOfferMenu = () => {
	offerBtnDesktopChangeColor.style.color = '#333333'
	dropdownDesktopItem.classList.remove('active')
	arrowIconDesktopMenu.classList.remove('rotate')
	arrowIconDesktopMenu.classList.add('rotate-rev')
}

// media bar icon - changing to color:
const changeMediaIconsFB = () => {
	mediaBarFB.removeAttribute('src')
	mediaBarFB.setAttribute('src', 'dist/img/icon/fb-color.png')
}

const changeMediaIconsIG = () => {
	mediaBarIG.removeAttribute('src')
	mediaBarIG.setAttribute('src', 'dist/img/icon/ig-color.png')
}

const changeMediaIconsFBLeave = () => {
	mediaBarFB.removeAttribute('src')
	mediaBarFB.setAttribute('src', 'dist/img/icon/fb.png')
}

const changeMediaIconsIGLeave = () => {
	mediaBarIG.removeAttribute('src')
	mediaBarIG.setAttribute('src', 'dist/img/icon/ig.png')
}

// nav shadow
function addShadow() {
	if (window.scrollY < 1) {
		nav.classList.remove('nav-bottom-shadow')
		logoDesktop.classList.remove('resize-desktop-logo')
		logoDesktop.classList.add('resize-desktop-logo-rev')
	} else {
		nav.classList.add('nav-bottom-shadow')
		logoDesktop.classList.remove('resize-desktop-logo-rev')
		logoDesktop.classList.add('resize-desktop-logo')
	}
	
	if (window.scrollY > 500) {
		mediaBar.classList.remove('remove-media-bar-rev')
		mediaBar.classList.add('remove-media-bar')
	} else {
		mediaBar.classList.remove('remove-media-bar')
		mediaBar.classList.add('remove-media-bar-rev')
	}

}

const closeMobileMenu = () => {
    mobileMenu.classList.remove('mobile-menu-active')
    burgerBTN.classList.remove('burger-btn-border')
    spanBTN1.classList.remove('burger-span1')
    spanBTN2.classList.remove('burger-span2')
    spanBTN3.classList.remove('burger-span3')
    showedMobileMenuByOfferClick.classList.remove('mobile-menu-active')
}

const closeMobileMenuByClickElements = () => {
    const mobileMenuLinks1 = document.querySelector('.mobile-nav-links1')
    const mobileMenuLinks2 = document.querySelector('.mobile-nav-links2')
    const mobileMenuLinks3 = document.querySelector('.mobile-nav-links3')
    const mobileMenuLinks4 = document.querySelector('.mobile-nav-links4')
    const mobileMenuLinks5 = document.querySelector('.mobile-nav-links5')
    mobileMenuLinks1.addEventListener('click', showMobileMenu)
    mobileMenuLinks2.addEventListener('click', showMobileMenu)
    mobileMenuLinks3.addEventListener('click', showMobileMenu)
    mobileMenuLinks4.addEventListener('click', showMobileMenu)
    mobileMenuLinks5.addEventListener('click', showMobileMenu)
}

const closeSubmenuOffer = () => {
    showedMobileMenuByOfferClick.classList.remove('mobile-menu-active')
}

const showOfferSubmenu = () => {
    if (!showedMobileMenuByOfferClick.classList.contains('mobile-menu-active')) {
        showedMobileMenuByOfferClick.classList.add('mobile-menu-active')
        submenuULitems1.addEventListener('click', showMobileMenu)
        submenuULitems2.addEventListener('click', showMobileMenu)
        submenuULitems3.addEventListener('click', showMobileMenu)
        submenuULitems4.addEventListener('click', showMobileMenu)
        submenuULitems5.addEventListener('click', showMobileMenu)
        submenuBackBtn.addEventListener('click', closeSubmenuOffer)
    } else if ( showedMobileMenuByOfferClick.classList.contains('mobile-menu-active')) {
        showedMobileMenuByOfferClick.classList.remove('mobile-menu-active')
    }

   
}

const showMobileMenu = () => {
	if (!mobileMenu.classList.contains('mobile-menu-active')) {
        closeMobileMenuByClickElements()
		logo.addEventListener('click', closeMobileMenu)
        showMobileMenuByOfferClick.addEventListener('click', showOfferSubmenu)
		mobileMenu.classList.add('mobile-menu-active')
		burgerBTN.classList.add('burger-btn-border')
		spanBTN1.classList.add('burger-span1')
		spanBTN2.classList.add('burger-span2')
		spanBTN3.classList.add('burger-span3')
	} else if (mobileMenu.classList.contains('mobile-menu-active')) {
		mobileMenu.classList.remove('mobile-menu-active')
		burgerBTN.classList.remove('burger-btn-border')
		spanBTN1.classList.remove('burger-span1')
		spanBTN2.classList.remove('burger-span2')
		spanBTN3.classList.remove('burger-span3')
        showedMobileMenuByOfferClick.classList.remove('mobile-menu-active')
	}
}

// dropdown "offer" menu:
offerBtnDesktop.addEventListener('mouseover', showDekstopOfferMenu)
dropdownDesktopItem.addEventListener('mouseover', showDekstopOfferMenu)
offerBtnDesktop.addEventListener('mouseleave', hideDekstopOfferMenu)
dropdownDesktopItem.addEventListener('mouseleave', hideDekstopOfferMenu)
// media bar icon - changing to color:
mediaBarFB.addEventListener('mouseover', changeMediaIconsFB)
mediaBarIG.addEventListener('mouseover', changeMediaIconsIG)
mediaBarFB.addEventListener('mouseleave', changeMediaIconsFBLeave)
mediaBarIG.addEventListener('mouseleave', changeMediaIconsIGLeave)
// nav shadow & media bar:
window.addEventListener('scroll', addShadow)
// burger btn:
burgerBTN.addEventListener('click', showMobileMenu)
// aboutme:
H3aboutmeOne.addEventListener('click', function () {
	H3aboutmeTextOne.classList.toggle('close-education-list')
	aboutmeIcon1.classList.toggle('rotate-aboutme-education-icon')
})
H3aboutmeTwo.addEventListener('click', function () {
	H3aboutmeTextTwo.classList.toggle('close-education-list')
	aboutmeIcon2.classList.toggle('rotate-aboutme-education-icon')
})
H3aboutmeThree.addEventListener('click', function () {
	H3aboutmeTextThree.classList.toggle('show-education-list')
	aboutmeIcon3.classList.toggle('rotate-aboutme-education-icon')
})
H3aboutmeFour.addEventListener('click', function () {
	H3aboutmeTextFour.classList.toggle('show-education-list')
	aboutmeIcon4.classList.toggle('rotate-aboutme-education-icon')
})
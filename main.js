/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact-module.js":
/*!*******************************!*\
  !*** ./src/contact-module.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadContactPage: () => (/* binding */ loadContactPage)\n/* harmony export */ });\n/* harmony import */ var _assets_images_address_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/images/address.svg */ \"./assets/images/address.svg\");\n/* harmony import */ var _assets_images_phone_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/phone.svg */ \"./assets/images/phone.svg\");\n/* harmony import */ var _assets_images_map_snapshot_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/map-snapshot.png */ \"./assets/images/map-snapshot.png\");\n__webpack_require__.e(/*! import() */ \"src_contact_css\").then(__webpack_require__.bind(__webpack_require__, /*! ./contact.css */ \"./src/contact.css\"));\n\n\n\n\nfunction loadContactPage() {\n    // clear contents\n    const content = document.querySelector('#content');\n    while (content.firstChild) {\n        content.removeChild(content.firstChild);\n    }\n\n    const body = document.querySelector('body');\n    body.setAttribute('id', 'blur-bg');\n\n    const contactCard = document.createElement('div');\n    contactCard.setAttribute('class', 'contact-card');\n\n    // contact phone\n    const contactPhone = document.createElement('div');\n    contactPhone.setAttribute('class', 'contact-phone');\n\n    const phoneIcon = document.createElement('img');\n    phoneIcon.setAttribute('src', _assets_images_phone_svg__WEBPACK_IMPORTED_MODULE_1__);\n\n    const phoneDigits = document.createElement('div');\n    phoneDigits.textContent = \"Phone: +1 (555) 123-4567\";\n\n    // contactPhone.append(phoneIcon, phoneDigits);\n    contactPhone.appendChild(phoneDigits);\n\n    // contact address\n    const contactAddress = document.createElement('div');\n    contactAddress.setAttribute('class', 'contact-addy');\n\n    const addyIcon = document.createElement('img');\n    phoneIcon.setAttribute('src', _assets_images_address_svg__WEBPACK_IMPORTED_MODULE_0__);\n\n    const addy = document.createElement('div');\n    addy.textContent = \"Address: 123 Main Street, Springfield, USA\";\n\n    // contactAddress.append(addyIcon, addy);\n    contactAddress.appendChild(addy)\n\n    // map image\n    const mapImg = document.createElement('img');\n    mapImg.setAttribute('src', _assets_images_map_snapshot_png__WEBPACK_IMPORTED_MODULE_2__);\n\n    contactCard.append(contactPhone, contactAddress, mapImg);\n\n    content.appendChild(contactCard);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGFjdC1tb2R1bGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLHNKQUF3QjtBQUMrQjtBQUNMO0FBQ0U7O0FBRTdDO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0NBQWtDLHFEQUFROztBQUUxQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0NBQWtDLHVEQUFXOztBQUU3QztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLCtCQUErQiw0REFBRzs7QUFFbEM7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb250YWN0LW1vZHVsZS5qcz84MzRmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAoXCIuL2NvbnRhY3QuY3NzXCIpO1xuaW1wb3J0IGxvY2F0aW9uU1ZHIGZyb20gXCIuLi9hc3NldHMvaW1hZ2VzL2FkZHJlc3Muc3ZnXCI7XG5pbXBvcnQgcGhvbmVTVkcgZnJvbSBcIi4uL2Fzc2V0cy9pbWFnZXMvcGhvbmUuc3ZnXCI7XG5pbXBvcnQgbWFwIGZyb20gXCIuLi9hc3NldHMvaW1hZ2VzL21hcC1zbmFwc2hvdC5wbmdcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRDb250YWN0UGFnZSgpIHtcbiAgICAvLyBjbGVhciBjb250ZW50c1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgIHdoaWxlIChjb250ZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgYm9keS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2JsdXItYmcnKTtcblxuICAgIGNvbnN0IGNvbnRhY3RDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFjdENhcmQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjb250YWN0LWNhcmQnKTtcblxuICAgIC8vIGNvbnRhY3QgcGhvbmVcbiAgICBjb25zdCBjb250YWN0UGhvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWN0UGhvbmUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjb250YWN0LXBob25lJyk7XG5cbiAgICBjb25zdCBwaG9uZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBwaG9uZUljb24uc2V0QXR0cmlidXRlKCdzcmMnLCBwaG9uZVNWRyk7XG5cbiAgICBjb25zdCBwaG9uZURpZ2l0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBob25lRGlnaXRzLnRleHRDb250ZW50ID0gXCJQaG9uZTogKzEgKDU1NSkgMTIzLTQ1NjdcIjtcblxuICAgIC8vIGNvbnRhY3RQaG9uZS5hcHBlbmQocGhvbmVJY29uLCBwaG9uZURpZ2l0cyk7XG4gICAgY29udGFjdFBob25lLmFwcGVuZENoaWxkKHBob25lRGlnaXRzKTtcblxuICAgIC8vIGNvbnRhY3QgYWRkcmVzc1xuICAgIGNvbnN0IGNvbnRhY3RBZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFjdEFkZHJlc3Muc2V0QXR0cmlidXRlKCdjbGFzcycsICdjb250YWN0LWFkZHknKTtcblxuICAgIGNvbnN0IGFkZHlJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgcGhvbmVJY29uLnNldEF0dHJpYnV0ZSgnc3JjJywgbG9jYXRpb25TVkcpO1xuXG4gICAgY29uc3QgYWRkeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFkZHkudGV4dENvbnRlbnQgPSBcIkFkZHJlc3M6IDEyMyBNYWluIFN0cmVldCwgU3ByaW5nZmllbGQsIFVTQVwiO1xuXG4gICAgLy8gY29udGFjdEFkZHJlc3MuYXBwZW5kKGFkZHlJY29uLCBhZGR5KTtcbiAgICBjb250YWN0QWRkcmVzcy5hcHBlbmRDaGlsZChhZGR5KVxuXG4gICAgLy8gbWFwIGltYWdlXG4gICAgY29uc3QgbWFwSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgbWFwSW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgbWFwKTtcblxuICAgIGNvbnRhY3RDYXJkLmFwcGVuZChjb250YWN0UGhvbmUsIGNvbnRhY3RBZGRyZXNzLCBtYXBJbWcpO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWN0Q2FyZCk7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/contact-module.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _initial_page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initial-page-load */ \"./src/initial-page-load.js\");\n/* harmony import */ var _contact_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact-module */ \"./src/contact-module.js\");\n/* harmony import */ var _menu_module_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-module.js */ \"./src/menu-module.js\");\n__webpack_require__.e(/*! import() */ \"src_styles_css\").then(__webpack_require__.bind(__webpack_require__, /*! ./styles.css */ \"./src/styles.css\"));\n\n\n\n\n(0,_initial_page_load__WEBPACK_IMPORTED_MODULE_0__.loadHomePage)();\n\nconst home = document.querySelector ('#home');\nhome.addEventListener('click', () => {\n    (0,_initial_page_load__WEBPACK_IMPORTED_MODULE_0__.loadHomePage)();\n})\n\nconst menu = document.querySelector('#menu');\nmenu.addEventListener('click', () => {\n    (0,_menu_module_js__WEBPACK_IMPORTED_MODULE_2__.loadMenuPage)();\n})\n\nconst contact = document.querySelector('#contact');\ncontact.addEventListener('click', () => {\n    (0,_contact_module__WEBPACK_IMPORTED_MODULE_1__.loadContactPage)();\n})//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLG1KQUFzQjtBQUM2QjtBQUNBO0FBQ0g7O0FBRWhELGdFQUFZOztBQUVaO0FBQ0E7QUFDQSxJQUFJLGdFQUFZO0FBQ2hCLENBQUM7O0FBRUQ7QUFDQTtBQUNBLElBQUksNkRBQVk7QUFDaEIsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsSUFBSSxnRUFBZTtBQUNuQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0KFwiLi9zdHlsZXMuY3NzXCIpO1xuaW1wb3J0IHsgbG9hZEhvbWVQYWdlIH0gZnJvbSBcIi4vaW5pdGlhbC1wYWdlLWxvYWRcIjtcbmltcG9ydCB7IGxvYWRDb250YWN0UGFnZSB9IGZyb20gXCIuL2NvbnRhY3QtbW9kdWxlXCI7XG5pbXBvcnQgeyBsb2FkTWVudVBhZ2UgfSBmcm9tIFwiLi9tZW51LW1vZHVsZS5qc1wiO1xuXG5sb2FkSG9tZVBhZ2UoKTtcblxuY29uc3QgaG9tZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IgKCcjaG9tZScpO1xuaG9tZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBsb2FkSG9tZVBhZ2UoKTtcbn0pXG5cbmNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVudScpO1xubWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBsb2FkTWVudVBhZ2UoKTtcbn0pXG5cbmNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFjdCcpO1xuY29udGFjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBsb2FkQ29udGFjdFBhZ2UoKTtcbn0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/initial-page-load.js":
/*!**********************************!*\
  !*** ./src/initial-page-load.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadHomePage: () => (/* binding */ loadHomePage)\n/* harmony export */ });\n/* harmony import */ var _assets_images_restaurant_page_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/images/restaurant-page.jpg */ \"./assets/images/restaurant-page.jpg\");\n\n\nfunction clearPage() {\n    // clear contents\n    const body = document.querySelector('body');\n    const content = document.querySelector('#content');\n\n    if (content.firstChild) {\n        body.setAttribute('id', '');\n        while (content.firstChild) {\n            content.removeChild(content.firstChild);\n        }\n    }\n}\n\nfunction loadHomePage() {\n    clearPage();\n\n    const left = document.createElement('div');\n    left.setAttribute('id', 'left');\n\n    const img = document.createElement('img');\n    img.setAttribute('src', _assets_images_restaurant_page_jpg__WEBPACK_IMPORTED_MODULE_0__);\n    img.setAttribute('alt', 'savory haven');\n\n    left.appendChild(img);\n\n    const right = document.createElement('div');\n    right.setAttribute('id', 'right');\n\n    const text = document.createElement('div');\n    text.setAttribute('id', 'text');\n    const br = document.createElement('br');\n    const em = document.createElement('em');\n    const textContent = \"Your one-stop restaurant to taste 'em all!\";\n    text.textContent = textContent;\n\n    const order = document.createElement('button');\n    order.setAttribute('id', 'order');\n    order.textContent = \"Order online or visit us\";\n\n    right.append(text, order);\n\n    const pageContent = document.querySelector('#content');\n    pageContent.append(left, right);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5pdGlhbC1wYWdlLWxvYWQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBK0Q7O0FBRS9EO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDRCQUE0QiwrREFBVztBQUN2Qzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2luaXRpYWwtcGFnZS1sb2FkLmpzPzg1ZTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNhdm9yeUhhdmVuIGZyb20gXCIuLi9hc3NldHMvaW1hZ2VzL3Jlc3RhdXJhbnQtcGFnZS5qcGdcIjtcblxuZnVuY3Rpb24gY2xlYXJQYWdlKCkge1xuICAgIC8vIGNsZWFyIGNvbnRlbnRzXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuICAgIGlmIChjb250ZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgYm9keS5zZXRBdHRyaWJ1dGUoJ2lkJywgJycpO1xuICAgICAgICB3aGlsZSAoY29udGVudC5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQuZmlyc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkSG9tZVBhZ2UoKSB7XG4gICAgY2xlYXJQYWdlKCk7XG5cbiAgICBjb25zdCBsZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGVmdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2xlZnQnKTtcblxuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIHNhdm9yeUhhdmVuKTtcbiAgICBpbWcuc2V0QXR0cmlidXRlKCdhbHQnLCAnc2F2b3J5IGhhdmVuJyk7XG5cbiAgICBsZWZ0LmFwcGVuZENoaWxkKGltZyk7XG5cbiAgICBjb25zdCByaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJpZ2h0LnNldEF0dHJpYnV0ZSgnaWQnLCAncmlnaHQnKTtcblxuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0ZXh0LnNldEF0dHJpYnV0ZSgnaWQnLCAndGV4dCcpO1xuICAgIGNvbnN0IGJyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKTtcbiAgICBjb25zdCBlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2VtJyk7XG4gICAgY29uc3QgdGV4dENvbnRlbnQgPSBcIllvdXIgb25lLXN0b3AgcmVzdGF1cmFudCB0byB0YXN0ZSAnZW0gYWxsIVwiO1xuICAgIHRleHQudGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudDtcblxuICAgIGNvbnN0IG9yZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgb3JkZXIuc2V0QXR0cmlidXRlKCdpZCcsICdvcmRlcicpO1xuICAgIG9yZGVyLnRleHRDb250ZW50ID0gXCJPcmRlciBvbmxpbmUgb3IgdmlzaXQgdXNcIjtcblxuICAgIHJpZ2h0LmFwcGVuZCh0ZXh0LCBvcmRlcik7XG5cbiAgICBjb25zdCBwYWdlQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgcGFnZUNvbnRlbnQuYXBwZW5kKGxlZnQsIHJpZ2h0KTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/initial-page-load.js\n");

/***/ }),

/***/ "./src/menu-module.js":
/*!****************************!*\
  !*** ./src/menu-module.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadMenuPage: () => (/* binding */ loadMenuPage)\n/* harmony export */ });\n/* harmony import */ var _assets_images_sushi_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/images/sushi.jpg */ \"./assets/images/sushi.jpg\");\n/* harmony import */ var _assets_images_tacos_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/tacos.jpg */ \"./assets/images/tacos.jpg\");\n/* harmony import */ var _assets_images_pad_thai_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/pad-thai.jpg */ \"./assets/images/pad-thai.jpg\");\n/* harmony import */ var _assets_images_pizza_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images/pizza.jpg */ \"./assets/images/pizza.jpg\");\n/* harmony import */ var _assets_images_butter_chicken_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/images/butter-chicken.jpg */ \"./assets/images/butter-chicken.jpg\");\n/* harmony import */ var _assets_images_seafood_paella_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/images/seafood-paella.jpg */ \"./assets/images/seafood-paella.jpg\");\n__webpack_require__.e(/*! import() */ \"src_menu_css\").then(__webpack_require__.bind(__webpack_require__, /*! ./menu.css */ \"./src/menu.css\"));\n\n\n\n\n\n\n\nlet menuFoods = [\n    {\n        name: \"Sushi Platter (Japanese dish)\",\n        description: `An assortment of vinegared rice paired with fresh seafood, \n        vegetables, and seaweed, offering a harmonious blend of flavors and textures.`,\n        image: _assets_images_sushi_jpg__WEBPACK_IMPORTED_MODULE_0__,\n    },\n    {\n        name: \"Tacos (Mexican dish)\",\n        description: `Soft or crispy tortillas filled with seasoned meats, fresh vegetables, \n        and zesty sauces, embodying the vibrant flavors of Mexican street food.`,\n        image: _assets_images_tacos_jpg__WEBPACK_IMPORTED_MODULE_1__,\n    },\n    {\n        name: \"Pad Thai (Thailand dish)\",\n        description: `Stir-fried rice noodles tossed with shrimp or chicken, tofu, eggs, and \n        bean sprouts, all enveloped in a tangy tamarind sauce and garnished with crushed peanuts.`,\n        image: _assets_images_pad_thai_jpg__WEBPACK_IMPORTED_MODULE_2__,\n    },\n    {\n        name: \"Margherita Pizza (Italian dish)\",\n        description: `A classic Neapolitan pizza featuring a thin, crispy crust topped with fresh \n        tomatoes, mozzarella cheese, basil leaves, and a drizzle of olive oil.`,\n        image: _assets_images_pizza_jpg__WEBPACK_IMPORTED_MODULE_3__,\n    },\n    {\n        name: \"Butter Chicken (Indian Dish)\",\n        description: `Tender chicken pieces simmered in a rich, creamy tomato-based sauce infused with \n        aromatic spices, offering a mild yet flavorful curry experience.`,\n        image: _assets_images_butter_chicken_jpg__WEBPACK_IMPORTED_MODULE_4__,\n    },\n    {\n        name: \"Seafood Paella (Spanish dish)\",\n        description: `A vibrant saffron-infused rice dish cooked with an array of seafood like shrimp, \n        mussels, and clams, complemented by vegetables and aromatic herbs.`,\n        image: _assets_images_seafood_paella_jpg__WEBPACK_IMPORTED_MODULE_5__,\n    },\n];\n\nfunction clearPage() {\n    // clear contents\n    const body = document.querySelector('body');\n    const content = document.querySelector('#content');\n\n    if (content.firstChild) {\n        body.setAttribute('id', 'menu-display');\n        while (content.firstChild) {\n            content.removeChild(content.firstChild);\n        }\n    }\n}\n\nfunction loadMenuPage() {\n    clearPage();\n    const content = document.querySelector('#content');\n\n    // menu container\n    const menuContainer = document.createElement('div');\n    menuContainer.setAttribute('id', 'menu-container');\n\n    for (let i = 0; i < menuFoods.length; i++) {\n        let foodName = menuFoods[i].name;\n        let foodDesc = menuFoods[i].description;\n        let foodImgSrc = menuFoods[i].image;\n\n        const menuItem = document.createElement('div');\n        menuItem.setAttribute('class', 'menu-items');\n\n        const menuImg = document.createElement('img');\n        menuImg.setAttribute('src', foodImgSrc);\n\n        const menuName = document.createElement('div');\n        menuName.setAttribute('class', 'menu-names');\n        menuName.textContent = foodName;\n\n        const menuDesc = document.createElement('div');\n        menuDesc.setAttribute('class', 'menu-descriptions');\n        menuDesc.textContent = foodDesc;\n\n        menuItem.append(menuImg, menuName, menuDesc);\n        menuContainer.appendChild(menuItem);\n    }\n\n    content.append(menuContainer);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWVudS1tb2R1bGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDZJQUFxQjtBQUM2QjtBQUNBO0FBQ0s7QUFDSztBQUNPO0FBQ1A7O0FBRTVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHFEQUFRO0FBQ3ZCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUscURBQVE7QUFDdkIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSx3REFBVTtBQUN6QixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHFEQUFrQjtBQUNqQyxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLDhEQUFnQjtBQUMvQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLDhEQUFTO0FBQ3hCLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixzQkFBc0I7QUFDMUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL21lbnUtbW9kdWxlLmpzP2Q4ZGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IChcIi4vbWVudS5jc3NcIik7XG5pbXBvcnQgc3VzaGlJbWcgZnJvbSBcIi4uL2Fzc2V0cy9pbWFnZXMvc3VzaGkuanBnXCI7XG5pbXBvcnQgdGFjb3NJbWcgZnJvbSBcIi4uL2Fzc2V0cy9pbWFnZXMvdGFjb3MuanBnXCI7XG5pbXBvcnQgcGFkVGhhaUltZyBmcm9tIFwiLi4vYXNzZXRzL2ltYWdlcy9wYWQtdGhhaS5qcGdcIjtcbmltcG9ydCBtYXJnaGVyaXRhUGl6emFJbWcgZnJvbSBcIi4uL2Fzc2V0cy9pbWFnZXMvcGl6emEuanBnXCI7XG5pbXBvcnQgYnV0dGVyQ2hpY2tlbkltZyBmcm9tIFwiLi4vYXNzZXRzL2ltYWdlcy9idXR0ZXItY2hpY2tlbi5qcGdcIjtcbmltcG9ydCBwYWVsbGFJbWcgZnJvbSBcIi4uL2Fzc2V0cy9pbWFnZXMvc2VhZm9vZC1wYWVsbGEuanBnXCI7XG5cbmxldCBtZW51Rm9vZHMgPSBbXG4gICAge1xuICAgICAgICBuYW1lOiBcIlN1c2hpIFBsYXR0ZXIgKEphcGFuZXNlIGRpc2gpXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBgQW4gYXNzb3J0bWVudCBvZiB2aW5lZ2FyZWQgcmljZSBwYWlyZWQgd2l0aCBmcmVzaCBzZWFmb29kLCBcbiAgICAgICAgdmVnZXRhYmxlcywgYW5kIHNlYXdlZWQsIG9mZmVyaW5nIGEgaGFybW9uaW91cyBibGVuZCBvZiBmbGF2b3JzIGFuZCB0ZXh0dXJlcy5gLFxuICAgICAgICBpbWFnZTogc3VzaGlJbWcsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiVGFjb3MgKE1leGljYW4gZGlzaClcIixcbiAgICAgICAgZGVzY3JpcHRpb246IGBTb2Z0IG9yIGNyaXNweSB0b3J0aWxsYXMgZmlsbGVkIHdpdGggc2Vhc29uZWQgbWVhdHMsIGZyZXNoIHZlZ2V0YWJsZXMsIFxuICAgICAgICBhbmQgemVzdHkgc2F1Y2VzLCBlbWJvZHlpbmcgdGhlIHZpYnJhbnQgZmxhdm9ycyBvZiBNZXhpY2FuIHN0cmVldCBmb29kLmAsXG4gICAgICAgIGltYWdlOiB0YWNvc0ltZyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJQYWQgVGhhaSAoVGhhaWxhbmQgZGlzaClcIixcbiAgICAgICAgZGVzY3JpcHRpb246IGBTdGlyLWZyaWVkIHJpY2Ugbm9vZGxlcyB0b3NzZWQgd2l0aCBzaHJpbXAgb3IgY2hpY2tlbiwgdG9mdSwgZWdncywgYW5kIFxuICAgICAgICBiZWFuIHNwcm91dHMsIGFsbCBlbnZlbG9wZWQgaW4gYSB0YW5neSB0YW1hcmluZCBzYXVjZSBhbmQgZ2FybmlzaGVkIHdpdGggY3J1c2hlZCBwZWFudXRzLmAsXG4gICAgICAgIGltYWdlOiBwYWRUaGFpSW1nLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcIk1hcmdoZXJpdGEgUGl6emEgKEl0YWxpYW4gZGlzaClcIixcbiAgICAgICAgZGVzY3JpcHRpb246IGBBIGNsYXNzaWMgTmVhcG9saXRhbiBwaXp6YSBmZWF0dXJpbmcgYSB0aGluLCBjcmlzcHkgY3J1c3QgdG9wcGVkIHdpdGggZnJlc2ggXG4gICAgICAgIHRvbWF0b2VzLCBtb3p6YXJlbGxhIGNoZWVzZSwgYmFzaWwgbGVhdmVzLCBhbmQgYSBkcml6emxlIG9mIG9saXZlIG9pbC5gLFxuICAgICAgICBpbWFnZTogbWFyZ2hlcml0YVBpenphSW1nLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcIkJ1dHRlciBDaGlja2VuIChJbmRpYW4gRGlzaClcIixcbiAgICAgICAgZGVzY3JpcHRpb246IGBUZW5kZXIgY2hpY2tlbiBwaWVjZXMgc2ltbWVyZWQgaW4gYSByaWNoLCBjcmVhbXkgdG9tYXRvLWJhc2VkIHNhdWNlIGluZnVzZWQgd2l0aCBcbiAgICAgICAgYXJvbWF0aWMgc3BpY2VzLCBvZmZlcmluZyBhIG1pbGQgeWV0IGZsYXZvcmZ1bCBjdXJyeSBleHBlcmllbmNlLmAsXG4gICAgICAgIGltYWdlOiBidXR0ZXJDaGlja2VuSW1nLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcIlNlYWZvb2QgUGFlbGxhIChTcGFuaXNoIGRpc2gpXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBgQSB2aWJyYW50IHNhZmZyb24taW5mdXNlZCByaWNlIGRpc2ggY29va2VkIHdpdGggYW4gYXJyYXkgb2Ygc2VhZm9vZCBsaWtlIHNocmltcCwgXG4gICAgICAgIG11c3NlbHMsIGFuZCBjbGFtcywgY29tcGxlbWVudGVkIGJ5IHZlZ2V0YWJsZXMgYW5kIGFyb21hdGljIGhlcmJzLmAsXG4gICAgICAgIGltYWdlOiBwYWVsbGFJbWcsXG4gICAgfSxcbl07XG5cbmZ1bmN0aW9uIGNsZWFyUGFnZSgpIHtcbiAgICAvLyBjbGVhciBjb250ZW50c1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cbiAgICBpZiAoY29udGVudC5maXJzdENoaWxkKSB7XG4gICAgICAgIGJvZHkuc2V0QXR0cmlidXRlKCdpZCcsICdtZW51LWRpc3BsYXknKTtcbiAgICAgICAgd2hpbGUgKGNvbnRlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50LmZpcnN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZE1lbnVQYWdlKCkge1xuICAgIGNsZWFyUGFnZSgpO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG4gICAgLy8gbWVudSBjb250YWluZXJcbiAgICBjb25zdCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lbnUtY29udGFpbmVyJyk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1lbnVGb29kcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgZm9vZE5hbWUgPSBtZW51Rm9vZHNbaV0ubmFtZTtcbiAgICAgICAgbGV0IGZvb2REZXNjID0gbWVudUZvb2RzW2ldLmRlc2NyaXB0aW9uO1xuICAgICAgICBsZXQgZm9vZEltZ1NyYyA9IG1lbnVGb29kc1tpXS5pbWFnZTtcblxuICAgICAgICBjb25zdCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtZW51SXRlbS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtaXRlbXMnKTtcblxuICAgICAgICBjb25zdCBtZW51SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIG1lbnVJbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBmb29kSW1nU3JjKTtcblxuICAgICAgICBjb25zdCBtZW51TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtZW51TmFtZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtbmFtZXMnKTtcbiAgICAgICAgbWVudU5hbWUudGV4dENvbnRlbnQgPSBmb29kTmFtZTtcblxuICAgICAgICBjb25zdCBtZW51RGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtZW51RGVzYy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtZGVzY3JpcHRpb25zJyk7XG4gICAgICAgIG1lbnVEZXNjLnRleHRDb250ZW50ID0gZm9vZERlc2M7XG5cbiAgICAgICAgbWVudUl0ZW0uYXBwZW5kKG1lbnVJbWcsIG1lbnVOYW1lLCBtZW51RGVzYyk7XG4gICAgICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudUl0ZW0pO1xuICAgIH1cblxuICAgIGNvbnRlbnQuYXBwZW5kKG1lbnVDb250YWluZXIpO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/menu-module.js\n");

/***/ }),

/***/ "./assets/images/address.svg":
/*!***********************************!*\
  !*** ./assets/images/address.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "61a1b0e3b12a4d3077a7.svg";

/***/ }),

/***/ "./assets/images/butter-chicken.jpg":
/*!******************************************!*\
  !*** ./assets/images/butter-chicken.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "150b2a94584f972fc798.jpg";

/***/ }),

/***/ "./assets/images/map-snapshot.png":
/*!****************************************!*\
  !*** ./assets/images/map-snapshot.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "043e3b8f58904f94a0a7.png";

/***/ }),

/***/ "./assets/images/pad-thai.jpg":
/*!************************************!*\
  !*** ./assets/images/pad-thai.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "71565b1d365249a2621f.jpg";

/***/ }),

/***/ "./assets/images/phone.svg":
/*!*********************************!*\
  !*** ./assets/images/phone.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fae829d10e2a272d0d26.svg";

/***/ }),

/***/ "./assets/images/pizza.jpg":
/*!*********************************!*\
  !*** ./assets/images/pizza.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f6824b47e707e381a980.jpg";

/***/ }),

/***/ "./assets/images/restaurant-page.jpg":
/*!*******************************************!*\
  !*** ./assets/images/restaurant-page.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b314197b6f2f325f9ee5.jpg";

/***/ }),

/***/ "./assets/images/seafood-paella.jpg":
/*!******************************************!*\
  !*** ./assets/images/seafood-paella.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e5b3704cb80b99e555fe.jpg";

/***/ }),

/***/ "./assets/images/sushi.jpg":
/*!*********************************!*\
  !*** ./assets/images/sushi.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e71b4770ad977337a524.jpg";

/***/ }),

/***/ "./assets/images/tacos.jpg":
/*!*********************************!*\
  !*** ./assets/images/tacos.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "33b3d62b24eaa43c9d43.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".main.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		// data-webpack is not used as build has no uniqueName
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 		
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
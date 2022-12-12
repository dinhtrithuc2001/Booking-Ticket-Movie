import React from 'react'
import { getLocalStorage } from '../../utils/config'

export default function Dashboard() {
	const nameAdmin = getLocalStorage('USER')
	return (
		<>
			<h2 className='text-center font-bold text-2xl'>Hellu Admin: <span className='text-orange-600'>{nameAdmin.hoTen}</span></h2>
			<div className='flex justify-center items-center h-full'>
				<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{ margin: 'auto', background: '#fff', display: 'block' }} width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
					<g>
						<animateTransform attributeName="transform" type="rotate" values="360 50 50;0 50 50" keyTimes="0;1" dur="1s" repeatCount="indefinite" calcMode="spline" keySplines="0.5 0 0.5 1" begin="-0.1s" />
						<circle cx={50} cy={50} r="39.891" stroke="#ffc254" strokeWidth="14.4" fill="none" strokeDasharray="0 300">
							<animate attributeName="stroke-dasharray" values="15 300;55.1413599195142 300;15 300" keyTimes="0;0.5;1" dur="1s" repeatCount="indefinite" calcMode="linear" keySplines="0 0.4 0.6 1;0.4 0 1 0.6" begin="-0.046s" />
						</circle>
						<circle cx={50} cy={50} r="39.891" stroke="#fff1cf" strokeWidth="7.2" fill="none" strokeDasharray="0 300">
							<animate attributeName="stroke-dasharray" values="15 300;55.1413599195142 300;15 300" keyTimes="0;0.5;1" dur="1s" repeatCount="indefinite" calcMode="linear" keySplines="0 0.4 0.6 1;0.4 0 1 0.6" begin="-0.046s" />
						</circle>
						<circle cx={50} cy={50} r="32.771" stroke="#000000" strokeWidth={1} fill="none" strokeDasharray="0 300">
							<animate attributeName="stroke-dasharray" values="15 300;45.299378454348094 300;15 300" keyTimes="0;0.5;1" dur="1s" repeatCount="indefinite" calcMode="linear" keySplines="0 0.4 0.6 1;0.4 0 1 0.6" begin="-0.046s" />
						</circle>
						<circle cx={50} cy={50} r="47.171" stroke="#000000" strokeWidth={1} fill="none" strokeDasharray="0 300">
							<animate attributeName="stroke-dasharray" values="15 300;66.03388996804073 300;15 300" keyTimes="0;0.5;1" dur="1s" repeatCount="indefinite" calcMode="linear" keySplines="0 0.4 0.6 1;0.4 0 1 0.6" begin="-0.046s" />
						</circle>
					</g>
					<g>
						<animateTransform attributeName="transform" type="rotate" values="360 50 50;0 50 50" keyTimes="0;1" dur="1s" repeatCount="indefinite" calcMode="spline" keySplines="0.5 0 0.5 1" />
						<path fill="#ffc254" stroke="#000000" d="M97.2,50c0,6.1-1.2,12.2-3.5,17.8l-13.3-5.4c1.6-3.9,2.4-8.2,2.4-12.4" />
						<path fill="#fff1cf" transform="translate(0,-0.1)" d="M93.6,50c0,1.2,0,2.4-0.1,3.6L93,57.2c-0.4,2-2.3,3.3-4.2,2.8l-0.2-0.1c-1.8-0.5-3.1-2.3-2.7-3.9l0.4-3 c0.1-1,0.1-2,0.1-3" />
						<path fill="#ffc254" stroke="#000000" d="M85.4,62.5c-0.2,0.7-0.5,1.4-0.8,2.1c-0.3,0.7-0.6,1.4-0.9,2c-0.6,1.1-2,1.4-3.2,0.8v0c-1.1-0.7-1.7-2-1.2-2.9 c0.3-0.6,0.5-1.2,0.8-1.8c0.2-0.6,0.6-1.2,0.7-1.8" />
						<path fill="#ffc254" stroke="#000000" d="M94.5,65.7c-0.3,0.9-0.7,1.7-1,2.6c-0.4,0.8-0.7,1.7-1.1,2.5c-0.7,1.4-2.3,1.9-3.4,1.3l0,0 c-1.1-0.7-1.5-2.2-0.9-3.4c0.4-0.8,0.7-1.5,1-2.3c0.3-0.8,0.7-1.5,0.9-2.3" />
						<path fill="#ffc254" stroke="#000000" d="M85.6,67c0,0.8,0.1,1.6,0.3,2.4c0.6-0.5,1.1-1,1.4-1.7c0.2-0.7,0.2-1.5-0.1-2.2C86.5,64,85.6,66.3,85.6,67z" />
					</g>
					<g>
						<animateTransform attributeName="transform" type="rotate" values="360 50 50;0 50 50" keyTimes="0;1" dur="1s" repeatCount="indefinite" calcMode="spline" keySplines="0.5 0 0.5 1" begin="-0.1s" />
						<path fill="#fff1cf" stroke="#000000" d="M91,33.6l-10,4c-0.4-1.2-1.1-2.4-1.7-3.5c-0.2-0.5,0.3-1.1,0.9-1C83.6,32.9,87.4,32.9,91,33.6z" />
						<path fill="#fff1cf" stroke="#000000" d="M83.2,36.7l10-4c-0.6-1.7-1.5-3.3-2.3-4.9c-0.3-0.7-1.2-0.6-1.4,0.1C87.6,31.1,85.7,34,83.2,36.7z" />
						<path fill="#ffc254" stroke="#000000" transform="translate(0,0.2)" d="M82.8,50c0-3.4-0.5-6.8-1.5-10c-0.2-0.8-0.4-1.5-0.3-2.3c0.1-0.8,0.4-1.6,0.7-2.4c0.7-1.5,1.9-3.1,3.7-4l0,0 c1.8-0.9,3.7-1,5.6-0.3c0.9,0.4,1.7,1,2.4,1.8c0.7,0.8,1.3,1.7,1.7,2.8c1.5,4.6,2.2,9.5,2.2,14.4" />
						<path fill="#fff1cf" transform="translate(0,0.3)" d="M86.4,50l0-0.9l-0.1-0.9l-0.1-1.9c0-0.9,0.2-1.7,0.7-2.3c0.5-0.7,1.3-1.2,2.3-1.4l0.3,0c0.9-0.2,1.9,0,2.6,0.6 c0.7,0.5,1.3,1.4,1.4,2.4l0.2,2.2l0.1,1.1l0,1.1" />
						<path fill="#000000" d="M88.6,36.6c0.1,0.3-0.2,0.7-0.6,0.8c-0.5,0.2-0.9,0-1.1-0.3c-0.1-0.3,0.2-0.7,0.6-0.8C88,36.1,88.5,36.2,88.6,36.6z" />
						<path fill="none" stroke="#000000" d="M86,38.7c0.2,0.6,0.8,0.9,1.4,0.7c0.6-0.2,0.9-0.9,0.6-2.1c0.3,1.2,1,1.7,1.6,1.5c0.6-0.2,0.9-0.8,0.8-1.4" />
						<path fill="#ffc254" stroke="#000000" d="M86.8,42.2l0.4,2.2c0.1,0.4,0.1,0.7,0.2,1.1l0.1,1.1c0.1,1.2-0.9,2.3-2.2,2.3h0c-1.3,0-2.5-0.8-2.5-1.9l-0.1-1 c0-0.3-0.1-0.6-0.2-1l-0.3-1.9" />
						<path fill="#ffc254" stroke="#000000" d="M96.2,40.2l0.5,2.7c0.1,0.5,0.2,0.9,0.2,1.4l0.1,1.4c0.1,1.5-0.9,2.8-2.2,2.8c-1.3,0-2.5-1.1-2.6-2.4l-0.1-1.2 c0-0.4-0.1-0.8-0.2-1.2l-0.4-2.5" />
						<path fill="none" stroke="#000000" d="M90.9,36.4c1.1-1.1,2.7-1.6,4.3-1.9" />
						<path fill="none" stroke="#000000" d="M91.6,37.5c1.3-0.5,2.8-0.8,4.2-0.7" />
						<path fill="none" stroke="#000000" d="M91.7,38.8c0.2-0.1,0.4-0.1,0.7-0.1c1.2-0.1,2.5,0,3.8,0.3" />
						<path fill="none" stroke="#000000" d="M85,38.4c-1.6-0.1-3.1,0.6-4.6,1.2" />
						<path fill="none" stroke="#000000" d="M85,39.5c-1.4,0.3-2.8,0.9-4,1.6" />
						<path fill="none" stroke="#000000" d="M85.5,40.4c-0.2,0-0.4,0.1-0.7,0.2c-1.1,0.5-2.2,1.1-3.2,1.8" />
						<path fill="#ff7bac" d="M92.8,34.2c0.1,0.3-0.3,0.8-0.9,1c-0.6,0.2-1.2,0.1-1.4-0.2c-0.1-0.3,0.3-0.8,0.9-1 C92.1,33.8,92.7,33.9,92.8,34.2z" />
						<path fill="#ff7bac" d="M82.2,38.2c0.1,0.3,0.7,0.3,1.3,0.1c0.6-0.2,1-0.6,0.9-0.9c-0.1-0.3-0.7-0.3-1.3-0.1 C82.5,37.5,82,37.9,82.2,38.2z" />
						<path fill="#000000" d="M90,35.7L89.3,36l-0.3-0.7c-0.3-0.9,0.1-1.9,0.9-2.3l0.7-0.3l0.3,0.7C91.3,34.4,90.9,35.4,90,35.7z" />
						<path fill="#000000" d="M85.3,37.4l0.7-0.2l-0.2-0.6c-0.3-0.8-1.3-1.2-2.1-0.8L82.9,36l0.2,0.6C83.5,37.4,84.4,37.7,85.3,37.4z" />
					</g>
				</svg>
				<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{ margin: 'auto', background: '#fff', display: 'block' }} width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
					<g>
						<animateTransform attributeName="transform" type="rotate" values="360 50 50;0 50 50" keyTimes="0;1" dur="1s" repeatCount="indefinite" calcMode="spline" keySplines="0.5 0 0.5 1" begin="-0.1s" />
						<circle cx={50} cy={50} r="39.891" stroke="#6994b7" strokeWidth="14.4" fill="none" strokeDasharray="0 300">
							<animate attributeName="stroke-dasharray" values="15 300;55.1413599195142 300;15 300" keyTimes="0;0.5;1" dur="1s" repeatCount="indefinite" calcMode="linear" keySplines="0 0.4 0.6 1;0.4 0 1 0.6" begin="-0.046s" />
						</circle>
						<circle cx={50} cy={50} r="39.891" stroke="#eeeeee" strokeWidth="7.2" fill="none" strokeDasharray="0 300">
							<animate attributeName="stroke-dasharray" values="15 300;55.1413599195142 300;15 300" keyTimes="0;0.5;1" dur="1s" repeatCount="indefinite" calcMode="linear" keySplines="0 0.4 0.6 1;0.4 0 1 0.6" begin="-0.046s" />
						</circle>
						<circle cx={50} cy={50} r="32.771" stroke="#000000" strokeWidth={1} fill="none" strokeDasharray="0 300">
							<animate attributeName="stroke-dasharray" values="15 300;45.299378454348094 300;15 300" keyTimes="0;0.5;1" dur="1s" repeatCount="indefinite" calcMode="linear" keySplines="0 0.4 0.6 1;0.4 0 1 0.6" begin="-0.046s" />
						</circle>
						<circle cx={50} cy={50} r="47.171" stroke="#000000" strokeWidth={1} fill="none" strokeDasharray="0 300">
							<animate attributeName="stroke-dasharray" values="15 300;66.03388996804073 300;15 300" keyTimes="0;0.5;1" dur="1s" repeatCount="indefinite" calcMode="linear" keySplines="0 0.4 0.6 1;0.4 0 1 0.6" begin="-0.046s" />
						</circle>
					</g>
					<g>
						<animateTransform attributeName="transform" type="rotate" values="360 50 50;0 50 50" keyTimes="0;1" dur="1s" repeatCount="indefinite" calcMode="spline" keySplines="0.5 0 0.5 1" />
						<path fill="#6994b7" stroke="#000000" d="M97.2,50.1c0,6.1-1.2,12.2-3.5,17.9l-13.3-5.4c1.6-3.9,2.4-8.2,2.4-12.4" />
						<path fill="#eeeeee" d="M93.5,49.9c0,1.2,0,2.7-0.1,3.9l-0.4,3.6c-0.4,2-2.3,3.3-4.1,2.8l-0.2-0.1c-1.8-0.5-3.1-2.3-2.7-3.9l0.4-3 c0.1-1,0.1-2.3,0.1-3.3" />
						<path fill="#6994b7" stroke="#000000" d="M85.4,62.7c-0.2,0.7-0.5,1.4-0.8,2.1c-0.3,0.7-0.6,1.4-0.9,2c-0.6,1.1-2,1.4-3.2,0.8c-1.1-0.7-1.7-2-1.2-2.9 c0.3-0.6,0.5-1.2,0.8-1.8c0.2-0.6,0.6-1.2,0.7-1.8" />
						<path fill="#6994b7" stroke="#000000" d="M94.5,65.8c-0.3,0.9-0.7,1.7-1,2.6c-0.4,0.9-0.7,1.7-1.1,2.5c-0.7,1.4-2.3,1.9-3.4,1.3h0 c-1.1-0.7-1.5-2.2-0.9-3.4c0.4-0.8,0.7-1.5,1-2.3c0.3-0.8,0.7-1.5,0.9-2.3" />
					</g>
					<g>
						<animateTransform attributeName="transform" type="rotate" values="360 50 50;0 50 50" keyTimes="0;1" dur="1s" repeatCount="indefinite" calcMode="spline" keySplines="0.5 0 0.5 1" begin="-0.1s" />
						<path fill="#eeeeee" stroke="#000000" d="M86.9,35.3l-6,2.4c-0.4-1.2-1.1-2.4-1.7-3.5c-0.2-0.5,0.3-1.1,0.9-1C82.3,33.8,84.8,34.4,86.9,35.3z" />
						<path fill="#eeeeee" stroke="#000000" d="M87.1,35.3l6-2.4c-0.6-1.7-1.5-3.3-2.3-4.9c-0.3-0.7-1.2-0.6-1.4,0.1C88.8,30.6,88.2,33,87.1,35.3z" />
						<path fill="#6994b7" stroke="#000000" d="M82.8,50.1c0-3.4-0.5-6.8-1.6-10c-0.2-0.8-0.4-1.5-0.3-2.3c0.1-0.8,0.4-1.6,0.7-2.4c0.7-1.5,1.9-3.1,3.7-4l0,0 c1.8-0.9,3.7-1.1,5.6-0.3c0.9,0.4,1.7,1,2.4,1.8c0.7,0.8,1.3,1.7,1.7,2.8c1.5,4.6,2.2,9.5,2.3,14.4" />
						<path fill="#eeeeee" d="M86.3,50.2l0-0.9l-0.1-0.9l-0.1-1.9c0-0.9,0.2-1.7,0.7-2.3c0.5-0.7,1.3-1.2,2.3-1.4l0.3,0 c0.9-0.2,1.9,0,2.6,0.6c0.7,0.5,1.3,1.4,1.4,2.4l0.2,2.2l0.1,1.1l0,1.1" />
						<path fill="#ff9922" d="M93.2,34.6c0.1,0.4-0.3,0.8-0.9,1c-0.6,0.2-1.2,0.1-1.4-0.2c-0.1-0.3,0.3-0.8,0.9-1 C92.4,34.2,93,34.3,93.2,34.6z" />
						<path fill="#ff9922" d="M81.9,38.7c0.1,0.3,0.7,0.3,1.3,0.1c0.6-0.2,1-0.6,0.9-0.9c-0.1-0.3-0.7-0.3-1.3-0.1 C82.2,38,81.8,38.4,81.9,38.7z" />
						<path fill="#000000" d="M88.5,36.8c0.1,0.3-0.2,0.7-0.6,0.8c-0.5,0.2-0.9,0-1.1-0.3c-0.1-0.3,0.2-0.7,0.6-0.8C87.9,36.3,88.4,36.4,88.5,36.8z" />
						<path stroke="#000000" d="M85.9,38.9c0.2,0.6,0.8,0.9,1.4,0.7c0.6-0.2,0.9-0.9,0.6-2.1c0.3,1.2,1,1.7,1.6,1.5c0.6-0.2,0.9-0.8,0.8-1.4" />
						<path fill="#6994b7" stroke="#000000" d="M86.8,42.3l0.4,2.2c0.1,0.4,0.1,0.7,0.2,1.1l0.1,1.1c0.1,1.2-0.9,2.3-2.2,2.3c-1.3,0-2.5-0.8-2.5-1.9l-0.1-1 c0-0.3-0.1-0.6-0.2-1l-0.3-1.9" />
						<path fill="#6994b7" stroke="#000000" d="M96.2,40.3l0.5,2.7c0.1,0.5,0.2,0.9,0.2,1.4l0.1,1.4c0.1,1.5-0.9,2.8-2.2,2.9h0c-1.3,0-2.5-1.1-2.6-2.4 L92.1,45c0-0.4-0.1-0.8-0.2-1.2l-0.4-2.5" />
						<path fill="#000000" d="M91.1,34.1c0.3,0.7,0,1.4-0.7,1.6c-0.6,0.2-1.3-0.1-1.6-0.7c-0.2-0.6,0-1.4,0.7-1.6C90.1,33.1,90.8,33.5,91.1,34.1z" />
						<path fill="#000000" d="M85.5,36.3c0.2,0.6-0.1,1.2-0.7,1.5c-0.6,0.2-1.3,0-1.5-0.6C83,36.7,83.4,36,84,35.8C84.6,35.5,85.3,35.7,85.5,36.3z" />
					</g>
				</svg>
				<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{ margin: 'auto', background: '#fff', display: 'block' }} width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
					<g>
						<animateTransform attributeName="transform" type="rotate" values="360 50 50;0 50 50" keyTimes="0;1" dur="1s" repeatCount="indefinite" calcMode="spline" keySplines="0.5 0 0.5 1" begin="-0.1s" />
						<circle cx={50} cy={50} r="39.891" stroke="#dec17a" strokeWidth="14.4" fill="none" strokeDasharray="0 300">
							<animate attributeName="stroke-dasharray" values="15 300;55.1413599195142 300;15 300" keyTimes="0;0.5;1" dur="1s" repeatCount="indefinite" calcMode="linear" keySplines="0 0.4 0.6 1;0.4 0 1 0.6" begin="-0.046s" />
						</circle>
						<circle cx={50} cy={50} r="39.891" stroke="#ffffff" strokeWidth="7.2" fill="none" strokeDasharray="0 300">
							<animate attributeName="stroke-dasharray" values="15 300;55.1413599195142 300;15 300" keyTimes="0;0.5;1" dur="1s" repeatCount="indefinite" calcMode="linear" keySplines="0 0.4 0.6 1;0.4 0 1 0.6" begin="-0.046s" />
						</circle>
						<circle cx={50} cy={50} r="32.771" stroke="#000000" strokeWidth={1} fill="none" strokeDasharray="0 300">
							<animate attributeName="stroke-dasharray" values="15 300;45.299378454348094 300;15 300" keyTimes="0;0.5;1" dur="1s" repeatCount="indefinite" calcMode="linear" keySplines="0 0.4 0.6 1;0.4 0 1 0.6" begin="-0.046s" />
						</circle>
						<circle cx={50} cy={50} r="47.171" stroke="#000000" strokeWidth={1} fill="none" strokeDasharray="0 300">
							<animate attributeName="stroke-dasharray" values="15 300;66.03388996804073 300;15 300" keyTimes="0;0.5;1" dur="1s" repeatCount="indefinite" calcMode="linear" keySplines="0 0.4 0.6 1;0.4 0 1 0.6" begin="-0.046s" />
						</circle>
					</g>
					<g>
						<animateTransform attributeName="transform" type="rotate" values="360 50 50;0 50 50" keyTimes="0;1" dur="1s" repeatCount="indefinite" calcMode="spline" keySplines="0.5 0 0.5 1" />
						<path fill="#dec17a" stroke="#000000" d="M97.2,49.3c0.1,6.3-1.1,12.6-3.4,18.4l-13.4-5.4c1.6-4,2.5-8.4,2.4-12.8" />
						<path fill="#ffffff" d="M93.6,49.3l-0.1,3.7l-0.4,3.7c-0.4,2.1-2.3,3.4-4.1,2.9l-0.2-0.1c-1.9-0.5-3-2.3-2.7-4l0.4-3.1l0.1-3.1" />
						<path fill="#dec17a" stroke="#000000" d="M85.5,62.3c-0.2,0.7-0.5,1.4-0.8,2.1l-0.9,2.1c-0.6,1.1-2,1.5-3.2,0.8c-1.1-0.7-1.7-2-1.1-2.9l0.8-1.8 c0.3-0.6,0.5-1.2,0.7-1.9" />
						<path fill="#dec17a" stroke="#000000" d="M94.6,65.5c-0.3,0.9-0.6,1.8-1,2.7l-1.1,2.6c-0.8,1.4-2.3,2-3.5,1.3v0c-1.1-0.7-1.5-2.2-0.9-3.4l1-2.4 c0.3-0.8,0.7-1.6,0.9-2.4" />
					</g>
					<g>
						<animateTransform attributeName="transform" type="rotate" values="360 50 50;0 50 50" keyTimes="0;1" dur="1s" repeatCount="indefinite" calcMode="spline" keySplines="0.5 0 0.5 1" begin="-0.1s" />
						<path fill="#dec17a" transform="translate(0,0.2)" stroke="#000000" d="M97.2,50.1c0-5-0.8-10-2.4-14.8c-0.4-1.2-1-2.2-1.8-3c-0.7-0.8-1.7-1.4-2.7-1.8c0,0.6-0.3,1.2-0.8,1.5 c-0.8,0.3-1.7,0-2.1-0.8l-0.5-1c-0.6,0.1-1.2,0.3-1.8,0.7c-0.6,0.3-1.1,0.7-1.6,1.2l0.4,0.9c0.4,0.7,0,1.6-0.8,2 c-0.6,0.3-1.2,0.2-1.6-0.1c-0.4,0.8-0.5,1.7-0.7,2.5c-0.1,0.9,0,1.7,0.3,2.5c1,3.3,1.6,6.8,1.6,10.2" />
						<path fill="#ffffff" transform="translate(0,0.3)" d="M86.4,50.1c0-1.3-0.1-2.6-0.2-3.8c-0.3-1.7,1-3.4,2.9-3.8l0.3,0c1.9-0.4,3.7,1,4,3.1c0.1,1.5,0.2,3.1,0.2,4.6" />
						<path fill="#ff9922" d="M93.1,34.1c0.1,0.4-0.3,0.8-0.9,1.1c-0.6,0.2-1.2,0.1-1.4-0.2c-0.1-0.3,0.3-0.8,0.9-1.1 C92.4,33.6,93,33.7,93.1,34.1z" />
						<path fill="#ff9922" d="M81.9,38.3c0.1,0.3,0.7,0.3,1.3,0.1c0.6-0.2,1-0.6,0.9-0.9c-0.1-0.3-0.7-0.3-1.3-0.1 C82.2,37.6,81.8,38,81.9,38.3z" />
						<path fill="#ff9922" stroke="#000000" d="M87.5,38.5l0.2,0.7c0.1,0.4,0.5,0.7,1,0.6c0.4-0.1,0.7-0.6,0.6-1L89,38" />
						<path d="M88.5,36.3c0.1,0.3-0.2,0.7-0.6,0.9c-0.5,0.2-0.9,0-1.1-0.3c-0.1-0.3,0.2-0.7,0.6-0.9C87.9,35.8,88.4,36,88.5,36.3z" />
						<path fill="none" stroke="#000000" d="M85.8,38c0.2,0.5,0.8,0.9,1.4,0.7c0.6-0.2,1.1-0.4,0.6-1.6c0.4,1.2,0.9,1.1,1.5,0.9c0.6-0.2,0.9-0.8,0.7-1.5" />
						<path fill="#dec17a" stroke="#000000" d="M86.8,42.1c0.2,0.7,0.2,1.5,0.4,2.2c0.1,0.8,0.3,1.5,0.3,2.3c0.1,1.3-0.9,2.3-2.3,2.3h0 c-1.3,0-2.5-0.8-2.5-1.9c0-0.7-0.2-1.3-0.3-2c-0.1-0.7-0.2-1.3-0.3-2" />
						<path fill="#dec17a" stroke="#000000" d="M96.1,40.1c0.2,0.9,0.3,1.9,0.5,2.8c0.1,0.9,0.3,1.9,0.4,2.8c0.1,1.6-0.9,2.9-2.2,2.9c-1.3,0-2.5-1.1-2.5-2.5 c0-0.9-0.2-1.7-0.3-2.5c-0.1-0.8-0.2-1.7-0.4-2.5" />
						<path fill="#000000" d="M90.9,33.7c0.2,0.6,0,1.3-0.6,1.5c-0.5,0.2-1.2-0.1-1.4-0.7c-0.2-0.6,0-1.2,0.6-1.5C90,32.7,90.6,33,90.9,33.7z" />
						<path fill="#000000" d="M85.3,35.9c0.2,0.5-0.1,1.1-0.6,1.3c-0.5,0.2-1.1,0-1.3-0.5c-0.2-0.5,0.1-1.1,0.6-1.3C84.5,35.1,85.1,35.4,85.3,35.9z" />
						<path fill="#8f722f" stroke="#000000" d="M83.2,34.9c0.8-0.3,1.1-1.2,0.8-2L83.5,32c-0.9,0.8-1.5,1.7-2,2.7C82,35.1,82.6,35.2,83.2,34.9z" />
						<path fill="#8f722f" stroke="#000000" d="M89.6,32c0.6-0.3,0.9-0.8,0.8-1.5c-1.1-0.4-2.3-0.5-3.4-0.3l0.5,1C87.8,32,88.8,32.3,89.6,32z" />
					</g>
				</svg>
				<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{ margin: 'auto', background: '#fff', display: 'block' }} width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
					<g>
						<animateTransform attributeName="transform" type="rotate" values="360 50 50;0 50 50" keyTimes="0;1" dur="1s" repeatCount="indefinite" calcMode="spline" keySplines="0.5 0 0.5 1" begin="-0.1s" />
						<circle cx={50} cy={50} r="39.891" stroke="#fac8dd" strokeWidth="14.4" fill="none" strokeDasharray="0 300">
							<animate attributeName="stroke-dasharray" values="15 300;55.1413599195142 300;15 300" keyTimes="0;0.5;1" dur="1s" repeatCount="indefinite" calcMode="linear" keySplines="0 0.4 0.6 1;0.4 0 1 0.6" begin="-0.046s" />
						</circle>
						<circle cx={50} cy={50} r="39.891" stroke="#ffffff" strokeWidth="7.2" fill="none" strokeDasharray="0 300">
							<animate attributeName="stroke-dasharray" values="15 300;55.1413599195142 300;15 300" keyTimes="0;0.5;1" dur="1s" repeatCount="indefinite" calcMode="linear" keySplines="0 0.4 0.6 1;0.4 0 1 0.6" begin="-0.046s" />
						</circle>
						<circle cx={50} cy={50} r="32.771" stroke="#000000" strokeWidth={1} fill="none" strokeDasharray="0 300">
							<animate attributeName="stroke-dasharray" values="15 300;45.299378454348094 300;15 300" keyTimes="0;0.5;1" dur="1s" repeatCount="indefinite" calcMode="linear" keySplines="0 0.4 0.6 1;0.4 0 1 0.6" begin="-0.046s" />
						</circle>
						<circle cx={50} cy={50} r="47.171" stroke="#000000" strokeWidth={1} fill="none" strokeDasharray="0 300">
							<animate attributeName="stroke-dasharray" values="15 300;66.03388996804073 300;15 300" keyTimes="0;0.5;1" dur="1s" repeatCount="indefinite" calcMode="linear" keySplines="0 0.4 0.6 1;0.4 0 1 0.6" begin="-0.046s" />
						</circle>
					</g>
					<g>
						<animateTransform attributeName="transform" type="rotate" values="360 50 50;0 50 50" keyTimes="0;1" dur="1s" repeatCount="indefinite" calcMode="spline" keySplines="0.5 0 0.5 1" />
						<path fill="#fac8dd" stroke="#000000" d="M97.2,50c0,6.2-1.2,12.3-3.6,18l-13.3-5.5c1.6-4,2.5-8.2,2.5-12.5" />
						<path fill="#ffffff" d="M93.6,50c0,1.2,0,2.4-0.1,3.7L93,57.3c-0.4,2.1-2.3,3.3-4.2,2.8L88.6,60c-1.9-0.5-3-2.3-2.7-3.9l0.4-3 c0.1-1,0.1-2,0.1-3.1" transform="translate(0,-0.2)" />
						<path fill="none" stroke="#000000" d="M87.1,65.4c-0.1,0.3-0.2,0.9-0.4,1.2c-0.2,0.2-0.5,0.4-0.8,0.3c-0.1,0-0.3-0.1-0.4-0.2 c-0.1-0.2-0.1-0.4,0.1-0.6c0.2-0.2,0.4-0.3,0.6-0.2c0.1,0.1,0.2,0.2,0.3,0.3c0.2,0.3,0.3,0.8,0.1,1.2c-0.1,0.4-0.5,0.7-0.9,0.8" />
						<path fill="#fac8dd" stroke="#000000" d="M85.4,62.7c-0.2,0.7-0.5,1.4-0.8,2.1c-0.3,0.7-0.6,1.4-0.9,2c-0.3,0.5-1,1.2-1.5,1.3c-1.1,0.2-0.7-0.8-1.3-1.1 h0c-0.6-0.3-1.2,0.4-1.6-0.6c-0.2-0.5-0.1-1.3,0.2-1.8c0.3-0.6,0.5-1.2,0.8-1.8c0.2-0.6,0.6-1.2,0.7-1.8" />
						<path fill="#fac8dd" stroke="#000000" d="M94.4,65.9c-0.3,0.9-0.7,1.7-1,2.6c-0.4,0.9-0.7,1.7-1.1,2.6c-0.4,0.7-1.1,1.5-1.8,1.7 c-1.2,0.4-0.7-0.9-1.3-1.2v0c-0.6-0.3-1.4,0.7-1.7-0.5c-0.2-0.6,0.1-1.6,0.4-2.2c0.4-0.8,0.7-1.5,1-2.3c0.3-0.8,0.7-1.5,0.9-2.3" />
					</g>
					<g>
						<animateTransform attributeName="transform" type="rotate" values="360 50 50;0 50 50" keyTimes="0;1" dur="1s" repeatCount="indefinite" calcMode="spline" keySplines="0.5 0 0.5 1" begin="-0.1s" />
						<path fill="#ffffff" stroke="#000000" d="M88.9,30.8c0-0.5-0.2-1-0.2-1.5c0-0.5,0.2-1.1,0.6-1.3c0.4-0.2,0.8-0.1,1.2,0c0.6,0.2,1.2,0.5,1.8,0.9 c0.1,0.1,0.2,0.2,0.3,0.3c0.1,0.2,0,0.3,0,0.5c-0.1,0.5-0.2,1-0.3,1.5c-0.1,0.5-0.1,1-0.1,1.5C91.1,31.9,90,31.4,88.9,30.8z" />
						<path fill="#ffffff" stroke="#000000" d="M82.8,33.8c-0.4-0.3-0.7-0.6-1-0.8c-0.4-0.2-0.9-0.3-1.3-0.1c-0.4,0.2-0.6,0.6-0.7,0.9 c-0.2,0.5-0.4,1.1-0.5,1.6c0,0.1,0,0.2,0,0.3c0.1,0.1,0.2,0.1,0.4,0.2c0.4,0.1,0.8,0.2,1.2,0.4c0.4,0.2,0.7,0.4,1,0.6 C82.2,35.9,82.5,34.9,82.8,33.8z" />
						<path fill="#fac8dd" stroke="#000000" transform="translate(0,0.3)" d="M97.2,50c0-4.9-0.8-9.8-2.3-14.5c-0.4-1.1-1-2.1-1.8-3c-0.4-0.4-0.8-0.8-1.2-1.1c-0.4-0.3-0.9-0.5-1.4-0.7 c-1.1-0.4-2.3-0.5-3.4-0.3c-0.6,0.1-1.3,0.3-1.8,0.7c-0.6,0.3-1.1,0.7-1.6,1.1c-0.9,0.8-1.5,1.7-2,2.7c-0.2,0.4-0.3,0.8-0.4,1.2 c-0.1,0.4-0.2,0.8-0.3,1.3c-0.1,0.8,0,1.7,0.3,2.4c1,3.3,1.5,6.6,1.6,10" />
						<path fill="#ffffff" transform="translate(0,0.3)" d="M86.4,50c0-0.6,0-1.3-0.1-1.9l-0.1-1.9c0-0.4,0-0.8,0.1-1.2c0.1-0.4,0.3-0.8,0.6-1.1c0.5-0.7,1.3-1.2,2.3-1.4 l0.3,0c0.9-0.2,1.9,0,2.6,0.6c0.4,0.3,0.7,0.6,0.9,1c0.3,0.4,0.4,0.9,0.4,1.4l0.2,2.2c0.1,0.7,0.1,1.5,0.1,2.3" />
						<path fill="#fac8dd" stroke="#000000" d="M86.8,42.2l0.4,2.2l0.2,1.1l0.1,1.1c0,0.6-0.2,1.5-0.6,1.9c-0.8,0.8-1.1-0.3-1.7-0.2c-0.7,0-0.8,1-1.7,0.4 c-0.5-0.3-0.8-1.1-0.8-1.6l-0.1-1l-0.2-1l-0.3-1.9" />
						<path fill="#fac8dd" stroke="#000000" d="M96.2,40.2l0.5,2.8l0.2,1.4l0.1,1.4c0.1,0.8-0.1,1.9-0.5,2.4c-0.8,1-1.1-0.4-1.7-0.3h0c-0.7,0-0.8,1.3-1.7,0.5 c-0.5-0.4-0.8-1.4-0.9-2.1l-0.1-1.3l-0.2-1.2l-0.4-2.5" />
						<path fill="#dbc08e" stroke="#000000" d="M89.7,36.7c0.3,0.8-0.4,1.8-1.4,2.1c-1,0.3-2-0.1-2.2-0.9c-0.3-0.7,0.3-1.6,1.2-2 C88.4,35.5,89.4,35.9,89.7,36.7z" />
						<line stroke="#000000" x1="87.5" y1="37.3" x2="87.6" y2="37.6" />
						<line stroke="#000000" x1="88.4" y1={37} x2="88.5" y2="37.3" />
						<path fill="#ff7bac" d="M92.4,33.9c0.1,0.3-0.3,0.8-0.9,1c-0.6,0.2-1.2,0.1-1.4-0.2c-0.1-0.3,0.3-0.8,0.9-1 C91.6,33.4,92.3,33.5,92.4,33.9z" />
						<path fill="#ff7bac" d="M82.3,37.7c0.1,0.3,0.7,0.3,1.3,0.1c0.6-0.2,1-0.6,0.9-0.9c-0.1-0.3-0.7-0.3-1.3-0.1 C82.6,37,82.2,37.4,82.3,37.7z" />
						<path fill="#000000" d="M84.9,35.6c0.2,0.5-0.1,1-0.6,1.2c-0.5,0.2-1,0-1.2-0.5c-0.2-0.4,0.1-1,0.6-1.2C84.2,35,84.7,35.2,84.9,35.6z" />
						<path fill="#000000" d="M90.7,33.2c0.2,0.5,0,1.1-0.5,1.3c-0.5,0.2-1.1-0.1-1.3-0.6c-0.2-0.5,0-1.1,0.5-1.3C89.9,32.4,90.5,32.7,90.7,33.2z" />
					</g>
				</svg>
			</div>
		</>

	)
}

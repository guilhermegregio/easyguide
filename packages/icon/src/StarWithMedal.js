import React from 'react'
import enhancer from './Icon.hoc'

const StarWithMedal = props => (
  <svg viewBox="0 0 16 16" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
    <defs>
      <path
        d="M2.71.796H2.4V0h.962l.022-.004V0H13.6v.796h-.321l-1.13 6.407 3.051.438-3.6 3.465.85 4.894L8 13.69 3.55 16l.85-4.894L.8 7.641l3.04-.437L2.71.796zm.815 0l1.11 6.294 1.14-.163L8 2.474l2.225 4.453 1.13.162 1.11-6.293h-8.94zm4.479 12.053l3.482 1.792-.665-3.794 2.817-2.687-3.893-.554-1.741-3.452-1.741 3.452-3.893.554 2.817 2.687-.665 3.794 3.482-1.792z"
        id="a"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="b" fill="#fff">
        <use xlinkHref="#a" />
      </mask>
      <use fill={props.color} xlinkHref="#a" />
      <g mask="url(#b)" fill={props.color}>
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default enhancer(StarWithMedal)

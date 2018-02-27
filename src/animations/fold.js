import React from 'react'
import { CSSTransition } from 'react-transition-group'

import './styles.css'

export const FoldAndFade = ({ children, ...props }) => (
  <CSSTransition {...props} classNames="fade">
    {children}
  </CSSTransition>
)

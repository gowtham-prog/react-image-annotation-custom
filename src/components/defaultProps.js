import React from 'react'

import Point from './Point'
import Editor from './Editor'
import FancyRectangle from './FancyRectangle'
import Rectangle from './Rectangle'
import Oval from './Oval'
import Content from './Content'
import Overlay from './Overlay'
import Freehand from './FreeHand'

import {
  RectangleSelector,
  PointSelector,
  OvalSelector,
  FreeHandSelector
} from '../selectors'


export default {
  innerRef: () => {},
  onChange: () => {},
  onSubmit: () => {},
  type: FreeHandSelector.TYPE,
  selectors: [
    RectangleSelector,
    PointSelector,
    OvalSelector,
    FreeHandSelector
  ],
  disableAnnotation: false,
  disableSelector: false,
  disableEditor: false,
  disableOverlay: false,
  activeAnnotationComparator: (a, b) => a === b,
  renderSelector: ({ annotation }) => {
    switch (annotation.geometry.type) {
      case RectangleSelector.TYPE:
        return (
          <FancyRectangle
            annotation={annotation}
          />
        )
      case PointSelector.TYPE:
        return (
          <Point
            annotation={annotation}
          />
        )
      case OvalSelector.TYPE:
        return (
          <Oval
            annotation={annotation}
          />
        )
      case FreeHandSelector.TYPE:
        return (
          <Freehand
            annotation={annotation}
          />
        )
      default:
        return null
    }
  },
  renderEditor: ({ annotation, onChange, onSubmit }) => (
    <Editor
      annotation={annotation}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  ),
  renderHighlight: ({ key, annotation, active }) => {
    switch (annotation.geometry.type) {
      case RectangleSelector.TYPE:
        return (
          <Rectangle
            key={key}
            annotation={annotation}
            active={active}
          />
        )
      case PointSelector.TYPE:
        return (
          <Point
            key={key}
            annotation={annotation}
            active={active}
          />
        )
      case OvalSelector.TYPE:
        return (
          <Oval
            key={key}
            annotation={annotation}
            active={active}
          />
        )
      case FreeHandSelector.TYPE:
        return (
          <Freehand
            key={key}
            annotation={annotation}
            active={active}
          />
        )
      default:
        return null
    }
  },
  renderContent: ({ key, annotation }) => (
    <Content
      key={key}
      annotation={annotation}
    />
  ),
  renderOverlay: ({ type, annotation }) => {
    switch (type) {
      case PointSelector.TYPE:
        return (
          <Overlay>
            Click to Annotate
          </Overlay>
        )
      default:
        return (
          <Overlay>
            Click and Drag to Annotate
          </Overlay>
        )
    }
  }
}

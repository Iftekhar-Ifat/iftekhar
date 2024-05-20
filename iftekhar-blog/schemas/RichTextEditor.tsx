import React from 'react'

export function HighlightDecorator(props: any) {
  return <span style={{backgroundColor: 'yellow'}}>{props.children}</span>
}

export function LatexDetector(props: any) {
  return <code style={{backgroundColor: '#F5F5F5'}}>{props.children}</code>
}

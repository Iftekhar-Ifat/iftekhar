import React from 'react'

export function HighlightDecorator(props: any) {
  return <span style={{backgroundColor: 'yellow'}}>{props.children}</span>
}

export function LatexDetector(props: any) {
  return <code style={{backgroundColor: '#F5F5F5'}}>{props.children}</code>
}

export function PublicationDecorator(props: any) {
  return <div style={{backgroundColor: '#fca5a5'}}>{props.children}</div>
}

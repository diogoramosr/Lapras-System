import { useRouter } from 'next/router'
import Link, { LinkProps } from 'next/link'
import React, { useState, useEffect, ReactElement, Children } from 'react'

type ActiveLinkProps = LinkProps & {
  children: ReactElement
  activeClassName: string
}

const ActiveLink = ({
  children,
  activeClassName,
  ...props
}: ActiveLinkProps) => {
  const { asPath, isReady } = useRouter()

  const child = Children.only(children)
  const childClassName = child.props.className || ''
  const [className, setClassName] = useState(childClassName)

  useEffect(() => {
    // Verifica se os campos do roteador estão atualizados do lado do cliente
    if (isReady) {
      // A rota dinâmica será correspondida via props.as
      // A rota estática será correspondida via props.href
      const linkPathname = new URL(
        (props.as || props.href) as string,
        location.href
      ).pathname

      // Usando URL().pathname para se livrar de query e hash
      const activePathname = new URL(asPath, location.href).pathname

      const newClassName =
        linkPathname === activePathname
          ? `${childClassName} ${activeClassName}`.trim()
          : childClassName

      if (newClassName !== className) {
        setClassName(newClassName)
      }
    }
  }, [
    asPath,
    isReady,
    props.as,
    props.href,
    childClassName,
    activeClassName,
    setClassName,
    className,
  ])

  return (
    <Link {...props}>
      {React.cloneElement(child, {
        className: className || null,
      })}
    </Link>
  )
}

export default ActiveLink
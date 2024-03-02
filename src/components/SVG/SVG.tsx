type SVGProps = {
    icon: string,
    className: string
}

export default function SVG({icon, className} : SVGProps) {
    return (
        <svg className={className}>
        <use xlinkHref={`img/icon/sprite.svg#${icon}`}></use>
      </svg>
    )
}
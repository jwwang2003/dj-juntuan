export default function Template({children}: {children: JSX.Element | JSX.Element[]}): JSX.Element {
  return (
    <div className="home-page-template">
      {children}
    </div>
  )
}
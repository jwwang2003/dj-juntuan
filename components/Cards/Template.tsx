export default function Template({children}: {children: JSX.Element}): JSX.Element {
  return (
    <div className="flex justify-center min-h-screen p-4">
      {children}
    </div>
  )
}
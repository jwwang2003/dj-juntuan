export default function Template({children}: {children: JSX.Element}): JSX.Element {
  return (
    <div className="flex justify-center min-h-screen p-8 even:bg-opacity-50 even:bg-neutral-900">
      {children}
    </div>
  )
}
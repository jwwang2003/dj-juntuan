import CardTemplate from '../Template'

export default function Contact(): JSX.Element {
  return (
    <CardTemplate>
      <div className="flex flex-col md:flex-row my-auto">
        <section className="mb-4 md:mr-4 md:mb-0">
          <img
            className="max-w-sm md:max-w-md"
            src="/logo.png"
            alt="DJ clan logo"
            />
        </section>
        <section className="mt-4 md:ml-4 md:mt-0 w-md">
          <article>
            <h1 className="text-3xl">Announcements</h1>
            <p>This is part of the announcements</p>
            <p>This is part of the announcements</p>
            <p>This is part of the announcements</p>
            <p>This is part of the announcements</p>
            <p>This is part of the announcements</p>
          </article>
          <article>
            <h1 className="text-3xl">Announcements</h1>
            <p>This is part of the announcements</p>
            <p>This is part of the announcements</p>
            <p>This is part of the announcements</p>
            <p>This is part of the announcements</p>
            <p>This is part of the announcements</p>
            <p>This is part of the announcements</p>
            <p>This is part of the announcements</p>
            <p>This is part of the announcements</p>
            <p>This is part of the announcements</p>
            <p>This is part of the announcements</p>
          </article>
        </section>
      </div>
    </CardTemplate>
  )
}
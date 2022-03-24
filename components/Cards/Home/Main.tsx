import CardTemplate from "../Template"

export default function Contact(): JSX.Element {
  return (
    <CardTemplate>
      <div className="flex flex-col md:flex-row my-auto">
        <section className="relative animated-logo mb-4 md:mr-4 md:mb-0">
          <video 
            loop
            autoPlay
            muted preload="metadata">
            <source src="/0001-0060.webm#t=0" type="video/mp4" />
          </video>
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
  );
}
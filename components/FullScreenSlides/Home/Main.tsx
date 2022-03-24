import CardTemplate from "../Template"

export default function Contact(): JSX.Element {
  return (
    <CardTemplate>
      <div>
        <section className="relative animated-logo mb-4 md:mr-4 md:mb-0">
          <video 
            loop
            autoPlay
            muted preload="metadata">
            <source src="/0001-0060.webm#t=0" type="video/webM" />
          </video>
        </section>
        <section className="!my-auto md:ml-4 w-72">
          <article className="mb-4">
            <h1 className="text-3xl text-center p-2 mb-2 rounded border border-white border-opacity-60 hover:border-opacity-100 transition-all">欢迎来到DJ军团</h1>
            <p>This is part of the announcements</p>
            <p>This is part of the announcements</p>
          </article>
          <article>
            <h1 className="text-3xl text-center p-2 mb-2 border-b border-white border-opacity-25 hover:border-opacity-100 transition-all">公告</h1>
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
import BlogLink from "@/components/BlogLink";

export default function AdviceForNewDevelopers() {
  return (
    <article className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
      <section>
        <h2>Work Habits</h2>

        <h3>10,000-Hour Rule</h3>
        <p>
          Maximizing your working hours is in your best interest. The 10,000-hour rule applies to software development too. The faster you fill those hours, the faster you'll advance in your career.
        </p>

        <h3>Regular Work</h3>
        <p>
          Work regularly every day. The real learning happens during sleep, so don't skip days.
        </p>

        <h3>Pomodoro Technique</h3>
        <p>
          Instead of working until you're exhausted, use the Pomodoro technique. By taking breaks before getting tired, you can work longer hours without excessive fatigue.
        </p>
      </section>

      <section>
        <h2>Core Skills</h2>

        <h3>Find Your Passion</h3>
        <p>
          You need to enjoy doing software development. You need to enjoy spending long hours at the computer and solving problems. If you get bored easily, software development is probably not for you.
        </p>
        <p>
          You can certainly work without loving it and without dedicating time to self-improvement. But you won't have a very bright career.
        </p>

        <h3>Programming Language Choice</h3>
        <p>
          Which language you learn often doesn't matter. Still, choose languages that are in demand. <a href="https://survey.stackoverflow.co/" target="_blank" rel="noopener noreferrer">Stack Overflow surveys</a> can be a good guide.
        </p>

        <h3>Terminal and Git</h3>
        <p>
          Use CLI tools. The terminal will be your closest friend.
        </p>
        <p>
          Learn Git from day one. You can read my <BlogLink href="/blog/beginner-git-usage">Basic Git Usage</BlogLink> post.
        </p>

        <h3>English</h3>
        <p>
          English is essential for following trends and learning. You need to know enough to understand what you read and hear.
        </p>
      </section>

      <section>
        <h2>Practical Experience</h2>

        <h3>School and Major</h3>
        <p>
          Important in the early years, but loses significance later. Studying software engineering is not mandatory. Try to gain your first work experiences with dedication.
        </p>

        <h3>Side Projects</h3>
        <p>
          Find a topic that excites you. See a need in your surroundings and start a project.
        </p>

        <h3>Open Source</h3>
        <p>
          Contribute to a project. You can search on <a href="https://www.perplexity.ai/" target="_blank" rel="noopener noreferrer">Perplexity</a> with queries like "research an open-source .NET project related to xyz topic."
        </p>
      </section>

      <section>
        <h2>System Design and Technology Knowledge</h2>
        <p>
          Research technologies you'll encounter: Redis, RabbitMQ, MongoDB, etc. Understand what they do, what problems they solve, what alternatives exist. Ask AI, watch short videos like "RabbitMQ in 100 seconds."
        </p>
        <p>
          An application for 1000 person vs. 1 million people has different design considerations. Knowing these technologies will give you an advantage. I'm not saying spend tons of time, but dedicate at least some.
        </p>
        <p>
          Videos from the <a href="https://www.youtube.com/@ByteByteGo/shorts" target="_blank" rel="noopener noreferrer">ByteByteGo</a> channel are useful. Learn system design bit by bit. Check out roadmaps at <a href="https://roadmap.sh" target="_blank" rel="noopener noreferrer">roadmap.sh</a>.
        </p>
      </section>

      <section>
        <h2>Using Artificial Intelligence</h2>

        <h3>Follow the Tools</h3>
        <p>
          Keep track of which AI tools are popular. If it's hyped, there's a reason for it. Try it if you have the opportunity.
        </p>

        <h3>Be Careful While Learning</h3>
        <p>
          While learning software development, write code by thinking for yourself. AI can make you lazy. Turn off autocomplete.
        </p>
        <p>
          However, AI has changed the way we work. Those who don't use AI will fall behind. You need to maintain balance during the learning process.
        </p>

        <h3>Efficient Usage</h3>
        <p>
          If you're using AI through a browser, it's not efficient. Use tools like Claude Code, Cursor, Windsurf, Cline in your working environment. This way you can benefit from features like AI memory and MCP servers.
        </p>

        <h3>Hybrid Work</h3>
        <p>
          Write code yourself first. When you get stuck, stage your code in Git, then have AI complete it. Review the AI's changes in Git changes, understand which part made it work.
          You can read <BlogLink href="/blog/beginner-git-usage">this blog post about Git</BlogLink>.
        </p>

        <h3>Use It to Learn</h3>
        <p>
          Don't just have code written. Ask questions: "Why did we add this code?", "What was the alternative?", "What would happen if we refactored it?". Ask a question after every code generation. Even if you can't find one, ask anyway.
        </p>
      </section>
    </article>
  );
}

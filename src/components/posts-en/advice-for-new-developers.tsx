import BlogLink from "@/components/BlogLink";

export default function AdviceForNewDevelopers() {
  return (
    <article className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
      <p>
        Maximizing your working hours is in your best interest. I can't tell you exactly how many hours to work, but the 10,000-hour rule applies here too. The faster you fill those hours, the faster you'll advance in your career.
      </p>
      <p>
        Work every other day, or work regularly every day. The real learning happens during sleep. If you skip days, you waste that valuable sleep time too.
      </p>
      <p>
        Give the Pomodoro technique a try. Normally, you work until you're exhausted, then take a break. By using the Pomodoro technique, you take breaks before getting tired, so you can work longer hours without excessive fatigue.
      </p>
      <p>
        You need to enjoy doing software development. You need to enjoy spending long hours at the computer and solving problems. If you get bored easily, software development is probably not for you.
        You can certainly work after learning specific technologies without further self-improvement, but you won't have a very bright career. That's why you primarily need to love your work and dedicate time to self-improvement outside of work hours. Move forward with this awareness.
      </p>
      <p>
        Which language you learn often doesn't matter. Each language has a specific potential market. However, it still makes sense to choose languages that are in high demand.
        You can check <a href="https://survey.stackoverflow.co/">surveys like Stackoverflow</a> to see which languages are more in demand.
      </p>
      <p>
        Try to use CLI tools. The terminal is your closest friend.
      </p>
      <p>
        Whichever language you learn, start using git with its basic features from day one. You can read my blog post titled <BlogLink href="/blog/beginner-git-usage">Basic Git Usage</BlogLink>.
      </p>
      <p>
        The school and major you attend matter in the early years of your career, but lose importance after working at a few jobs. It's not mandatory to study software or computer engineering. Even if you do study them, it doesn't guarantee you'll get a job.
        If you didn't study them, yes, you have a disadvantage at first. Try to gain your first work experiences with some dedication.
      </p>
      <p>
        Build side projects. Find a topic that excites you. See a need in your surroundings and start a project related to it.
      </p>
      <p>
        Try to contribute to an open-source project. You can search on <a href="https://www.perplexity.ai/" target="_blank" rel="noopener noreferrer">Perplexity</a> with queries like "research an open-source dotnet project related to xyz topic."
      </p>
      <p>
        Yes, English is important. I mainly follow English sources on YouTube to follow trends and learn new things. You need to know enough English to understand what you read and hear.
      </p>
      <section>
        <h2>Using Artificial Intelligence</h2>
        <p>
          Just as you need to learn the technology itself, you need to dedicate time to learning how to use artificial intelligence tools. At the very least, you should regularly follow which tools are being used more.
          If a tool is hyped, there's a reason for it. If you have the opportunity, you should try it yourself.
        </p>
        <p>
          During your self-improvement process, you should use artificial intelligence within certain limits. To learn software development, you need to write code by thinking for yourself. Artificial intelligence makes you lazy. To learn, you should turn off autocomplete and write your code yourself.
          On the other hand, artificial intelligence has changed the way we work. Those who don't use AI tools in their development will fall behind in the long run. Therefore, you need to integrate artificial intelligence into your processes. So you need to maintain a certain balance between these two during the learning process.
        </p>
        <p>
          If you're using artificial intelligence through a browser, you're not using it very efficiently. You should use artificial intelligence in your working environment using tools like Claude code, codex cli, cursor, windsurf, cline, roocode, kilocode.
          This way, you can use local markdown files as AI memory, use MCP servers when needed, and use additional features depending on the tool you're using.
        </p>
        <p>
          How can you work in a hybrid way with AI? First, try to write the code yourself, and when you get stuck, stage your written code on git. Then have the AI complete the code.
          Then review the changes made by the AI in the git changes section, i.e., the unstaged changes, and try to understand which part of the AI's code made it work.
        </p>
        <p>
          Don't just have the AI write code. Ask questions to understand the code too: "Why did we add this code?", "How would we do it differently if we didn't use this?", "What would happen if we refactored this code?" etc. In other words, use AI not just to reach the result, but also to learn.
          Make it a habit to always ask a question after having code written. If you can't find a question, ask a silly one.
        </p>
      </section>
    </article>
  );
}

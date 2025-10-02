import ToolTip from "@/components/ToolTip";

export default function CommitBestPractices() {
  return (
    <article className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
      <header>
        <h1>Big Gains with Small Commits: Good Habits in Development Process</h1>
      </header>

      <p>
        One of the most common mistakes we make in software development is writing code for days and then trying to make one big <ToolTip keyName="git-commit">commit</ToolTip> at once. But why is this so wrong and how can we do better?
      </p>

      <section>
        <h2>Small Commits, Big Benefits</h2>
        <p>
          Instead of writing code for 5-6 days without making any <ToolTip keyName="git-commit">commits</ToolTip>, it makes much more sense to progress in small steps. Here&apos;s the ideal process:
        </p>
        <ul>
          <li>Make a small development</li>
          <li>Test it, make sure it works</li>
          <li><ToolTip keyName="git-commit">Commit</ToolTip></li>
          <li>Start your next development with a clean <ToolTip keyName="git-commit">commit</ToolTip> state</li>
        </ul>
        <p>
          This approach has many advantages. First of all, you know exactly what you changed at each step. When there&apos;s an error, you can easily find which <ToolTip keyName="git-commit">commit</ToolTip> it started in. Code review processes also become much easier.
        </p>
      </section>

      <section>
        <h2>Pre-Commit Checklist</h2>
        <p>Following these steps before committing is very beneficial:</p>
        <ol>
          <li><strong>Check <ToolTip keyName="git-status">git status</ToolTip></strong> - See which files you&apos;ve changed</li>
          <li><strong>Review <ToolTip keyName="git-diff">diffs</ToolTip></strong> - Go through each change</li>
          <li><strong>Clean up unnecessary code</strong> - Check if there are test codes, debug lines you added during development</li>
          <li><strong>Make sure you haven&apos;t deviated from your purpose</strong> - Only the changes you planned should be in that <ToolTip keyName="git-commit">commit</ToolTip></li>
        </ol>
      </section>

      <section>
        <h2>TODO Comments: The Secret to Staying Focused</h2>
        <p>
          It happens to us very often during development: while fixing one thing, we notice another problem and want to fix it immediately. At this point, we need to restrain ourselves.
        </p>
        <p>
          You&apos;ve made a development, you&apos;re getting ready to <ToolTip keyName="git-commit">commit</ToolTip>, but suddenly you decide you want to make another development. This is exactly where TODO comments come into play. If you see another problem while developing, don&apos;t try to fix it right away. Instead:
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
          <code className="text-sm">
            {`// TODO: This part should be optimized - performance issue`}
          </code>
        </pre>
        <p>
          Add a comment like this and clean up your current <ToolTip keyName="git-commit">commit</ToolTip>. Then tackle that problem as a separate task. This way, each <ToolTip keyName="git-commit">commit</ToolTip> has a single purpose and your code history becomes much more readable.
        </p>
      </section>

      <section>
        <h2>Working with AI CLI Tools</h2>
        <p>In modern development process, we frequently use AI <ToolTip keyName="cli-tools">CLI tools</ToolTip>. We can apply similar disciplines when working with these tools:</p>
        <ul>
          <li>Starting a new AI conversation after each important development step gives cleaner and more focused results</li>
          <li>Prevents AI from being affected by previous context and provides more stable performance</li>
          <li>You get a fresh start for each new task</li>
        </ul>
      </section>

      <section>
        <h2>Conclusion</h2>
        <p>
          Making small <ToolTip keyName="git-commit">commits</ToolTip> is not just a technical habit, it actually changes your way of thinking. You develop the habit of breaking problems into small pieces, checking each step, and writing clean code.
        </p>
        <p>
          Remember: every <ToolTip keyName="git-commit">commit</ToolTip> should tell a story. And the best stories are short, concise, and understandable.
        </p>
      </section>
    </article>
  );
}
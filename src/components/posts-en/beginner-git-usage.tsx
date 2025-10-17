export default function BeginnerGitUsage() {
  return (
    <article className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
      <header>
        <h1>Beginner Git Usage</h1>
      </header>

      <p>
        Git version control system is a tool you will use continuously throughout your software career. If you start using Git with just a few hours of basic training, it will also contribute to your software learning process.
        Take some time to sharpen your axe before entering the forest.
      </p>
      <p>
        Most IDEs have a graphical interface for Git. You can use this interface for beginners.
        I will briefly mention basic concepts through Visual Studio Code without going into too much detail.
      </p>
      <p>
        No matter what project you do, use Git from day one. Git is a local-first version control tool. You can use it without connecting to a repository like Github.
      </p>
      <p>
        At any point in your project, you can create a git repository with the "Initialize Repository" button in the Source Control panel in Visual Studio Code.
        Now you can save the changes you make in the project with Git.
      </p>
      <p>
        Although we can use Git through the graphical interface, we need to know the CLI commands as we can only run some commands from the terminal.
        We can also do add and commit commands from the interface.
        <ul>
          <li>git status: Displays the status of your project.</li>
          <li>git add . : Stages all changes.</li>
          <li>git add FILE_NAME: Stages the changes of a specific file.</li>
          <li>git commit: Saves the changes.</li>
          <li>git revert COMMIT_HASH_ID: Reverts the changes.</li>
        </ul>
      </p>
      <p>
        Especially if you are working alone on the project, you do not need to use branches much in the beginning.
      </p>
      <p>
        Make it a habit to commit after small developments. When writing your commit message, clearly state what you changed. Keep your commits small.
        You will need to make a lot of changes in the code while developing. If there are few changes in git changes, it will be easier to review your code.
        Also, if you need to cancel the changes you made, it will be easy to cancel with a single command and return to the last working state.
      </p>
      <p>
        Review your code from the changes section before each commit.
      </p>
      <p>
        Test your developments. Make sure it works before committing.
      </p>
      <p>
        If you see another problem while developing a feature, do not try to fix it immediately. Instead, add a //TODO comment and try to fix it later.
      </p>
      <p>
        Especially when using artificial intelligence, if you have reached a certain point and then you will have the artificial intelligence fix the code, follow such a flow.
        <ul>
          <li>Stage your code but do not commit. </li>
          <li>Have the artificial intelligence fix your code. Let the code work.</li>
          <li> Review the unstaged changes in the Changes panel. Review the changes made by artificial intelligence. </li>
          <li>If you think it is appropriate, you can commit by staging the new developments. Otherwise, you can revert only the changes made by artificial intelligence with Discard Changes without reverting the code you wrote yourself.</li>
        </ul>
      </p>
    </article>
  );
}

import ToolTip from "@/components/ToolTip";
import Code from "@/components/Code";

export default function BeginnerGitUsage() {
  return (
    <article className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
      <p>
        <ToolTip keyName="git">Git</ToolTip> is one of the most important tools you will use continuously throughout your software career.
        Starting to use Git with just a few hours of basic training will greatly contribute to your software learning process.
        Take some time to sharpen your axe before entering the forest.
      </p>

      <h2>Start with a Visual Interface</h2>
      <p>
        Most <ToolTip keyName="ide">IDEs</ToolTip> have a graphical interface for Git.
        In this article, I will explain the basic concepts through Visual Studio Code without going into too much detail.
      </p>

      <h2>Use Git from Day One</h2>
      <p>
        No matter what project you do, start using Git from day one.
        Git is a local-first version control system; you can use it without connecting to a remote repository like GitHub.
      </p>
      <p>
        At any stage of your project, you can create a Git <ToolTip keyName="git-repository">repository</ToolTip> by clicking the
        "Initialize Repository" button in the Source Control panel in Visual Studio Code.
        Now you can save the changes you make in the project with Git.
      </p>

      <h2>Basic Git Commands</h2>
      <p>
        Although we can use Git through the graphical interface, we can only run some commands from the terminal.
        That's why we need to learn <ToolTip keyName="cli">CLI</ToolTip> commands as well.
        Knowing the following basic commands will be sufficient:
      </p>
      <ul>
        <li><Code>git status</Code>: Displays the current status of your project</li>
        <li><Code>git add .</Code>: Stages all changes to the <ToolTip keyName="git-staging-area">staging area</ToolTip></li>
        <li><Code>git add FILE_NAME</Code>: Stages changes of a specific file to the staging area</li>
        <li><Code>git commit -m "message"</Code>: Records changes with a message</li>
        <li><Code>git revert COMMIT_HASH</Code>: Reverts a specific commit</li>
      </ul>

      <h2>Using Branches</h2>
      <p>
        Especially if you are working alone on the project, you don't need to use <ToolTip keyName="git-branch">branches</ToolTip> in the beginning.
        In the future, you will see the importance of branches in team collaborations.
      </p>

      <h2>Commit Habits</h2>
      <p>
        Make it a habit to <ToolTip keyName="git-commit">commit</ToolTip> after small developments.
        Here are things to pay attention to when committing:
      </p>
      <ul>
        <li><strong>Make small commits:</strong> Each commit should contain a single logical change</li>
        <li><strong>Write descriptive messages:</strong> Clearly state what you changed</li>
        <li><strong>Review your code:</strong> Review your code from the changes section before each commit</li>
        <li><strong>Test:</strong> Make sure your code works before committing</li>
      </ul>

      <p>
        Advantages of small commits:
      </p>
      <ul>
        <li>It becomes easier to review code changes</li>
        <li>If you make a mistake, you can return to the working state by just reverting the last commit</li>
        <li>Commit history becomes more understandable</li>
      </ul>

      <h2>Things to Pay Attention to During Development</h2>
      <p>
        If you see another problem while developing a feature, do not try to fix it immediately.
        Instead, add a <Code>{"//TODO"}</Code> comment to take notes and try to fix it later.
        This approach maintains your focus and keeps your commits logically separate.
      </p>

      <h2>Using Git While Working with AI</h2>
      <p>
        When developing code with AI assistance, it is important to manage changes in a controlled manner.
        Follow this flow:
      </p>
      <ol>
        <li>Stage your current code but do not commit</li>
        <li>Have the AI fix your code and make it work</li>
        <li>Review the unstaged changes in the Changes panel</li>
        <li>Carefully examine the changes made by the AI</li>
        <li>
          If the changes are appropriate, stage the new developments and commit.
          If not appropriate, you can revert only the changes made by the AI with "Discard Changes" -
          your own code stays safe in the staging area
        </li>
      </ol>

      <p>
        With this approach, you can safely try AI suggestions,
        and easily revert changes you don't like.
      </p>
    </article>
  );
}

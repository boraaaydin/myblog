import ToolTip from "@/components/ToolTip";
import Code from "@/components/Code";
import Terminal, { TerminalCommand, TerminalResult } from "@/components/Terminal";
import BlogLink from "../BlogLink";

export default function AICodingBestPractices() {
  return (
    <article className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
      <p>
        AI-powered coding tools have become an essential part of modern software development. However, to use these tools effectively, you need to understand the <ToolTip keyName="vibe-coding">vibe coding</ToolTip> approach, <ToolTip keyName="context-window">context window</ToolTip> management, and proper workflow strategies. In this guide, you&apos;ll learn the fundamental principles of working efficiently with <ToolTip keyName="llm">LLM</ToolTip>-based coding assistants.
      </p>

      <h2>Context Window: The AI&apos;s Memory Limit</h2>
      <p>
        One of the most important limitations you&apos;ll encounter when using AI coding assistants is the <ToolTip keyName="context-window">context window</ToolTip> constraint. So what does this mean?
      </p>
      <p>
        <ToolTip keyName="llm">LLM</ToolTip> models work in a <ToolTip keyName="stateless">stateless</ToolTip> manner—meaning they don&apos;t actually remember you. With each new query, your entire conversation history is resent to the AI server and processed. This makes the AI appear to &quot;know&quot; the context of the conversation. However, this system has a cost: memory limitation.
      </p>
      <p>
        When the context window fills up, the AI:
      </p>
      <ul>
        <li>Starts to &quot;forget&quot; information from the beginning of the conversation</li>
        <li>Becomes prone to <ToolTip keyName="hallucination">hallucination</ToolTip></li>
        <li>May provide inconsistent responses</li>
        <li>May ignore previous instructions</li>
      </ul>

      <h2>Why Is It Hard to Build an Application with a Single Prompt?</h2>
      <p>
        Many developers try to write one very detailed, long <ToolTip keyName="prompt">prompt</ToolTip> to the AI and have it build the entire application. However, this approach has a low success rate. Here&apos;s why:
      </p>

      <h3>1. Context Window Limitation</h3>
      <p>
        No matter how detailed it is, building a complex application with a single prompt is difficult. As the project grows and the conversation lengthens, the context window starts to fill up and quality degrades.
      </p>

      <h3>2. Error Accumulation</h3>
      <p>
        Small mistakes made in a single long session accumulate and turn into bigger problems in subsequent steps. Detecting and fixing these errors becomes increasingly difficult.
      </p>

      <h3>3. Context Loss</h3>
      <p>
        In long conversations, the AI may &quot;forget&quot; your project&apos;s initial requirements or constraints and produce inconsistent code.
      </p>

      <h2>Solution: Divide and Conquer Strategy</h2>
      <p>
        The most effective method for successful <ToolTip keyName="vibe-coding">vibe coding</ToolTip> is to break your project into logical parts and focus on one task at a time. Here&apos;s the step-by-step approach:
      </p>

      <h3>1. Break the Main Task into Subtasks</h3>
      <p>
        Divide a large feature into small, manageable parts. For example, a user authentication system can be broken down into these subtasks:
      </p>
      <ul>
        <li>Create user data model</li>
        <li>Write registration API endpoint</li>
        <li>Write login API endpoint</li>
        <li>Add token management</li>
        <li>Create frontend forms</li>
        <li>Implement error handling</li>
      </ul>

      <h3>2. Start a New Context for Each Task</h3>
      <p>
        After completing each subtask, start a new conversation. The advantages of this approach:
      </p>
      <ul>
        <li>You start with a clean, empty context window</li>
        <li>AI focuses only on relevant information</li>
        <li>Error accumulation is prevented</li>
        <li>You get the best performance for each task</li>
      </ul>

      <h3>3. Context Transfer Between Tasks</h3>
      <p>
        For each new task, provide the AI with:
      </p>
      <ul>
        <li>The main project&apos;s purpose</li>
        <li>What was done in previous tasks</li>
        <li>How this task relates to the main goal</li>
        <li>Technology and architectural decisions to be used</li>
      </ul>

      <h2>Efficiency with Workflow Framework</h2>
      <p>
        Modern AI coding tools support <ToolTip keyName="workflow">workflow</ToolTip>-based work. This approach works as follows:
      </p>

      <h3>Task File Approach</h3>
      <p>
        Work by creating separate task files within the same repository:
      </p>

      <Terminal title="Project Structure">
        <TerminalCommand>ls tasks/</TerminalCommand>
        <TerminalResult>01-create-user-model.md</TerminalResult>
        <TerminalResult>02-setup-authentication.md</TerminalResult>
        <TerminalResult>03-build-api-endpoints.md</TerminalResult>
        <TerminalResult>04-create-frontend-forms.md</TerminalResult>
      </Terminal>

      <p>
        Each task file should contain:
      </p>
      <ul>
        <li><strong>Task definition</strong>: What needs to be done?</li>
        <li><strong>Context</strong>: What is the main project goal?</li>
        <li><strong>Acceptance criteria</strong>: When is the task considered complete?</li>
        <li><strong>Checkpoints</strong>: What needs to be tested?</li>
      </ul>

      <h3>Advanced Workflow Frameworks</h3>
      <p>
        Some developers prefer more structured approaches. <a href="https://github.com/github/spec-kit" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Spec-Kit</a> is a toolset that encourages creating executable specifications before writing code. <a href="https://github.com/bmad-code-org/BMAD-METHOD" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">BMAD-METHOD</a> is a comprehensive framework with 19+ specialized agents and 50+ <ToolTip keyName="workflow">workflows</ToolTip>. Such tools are powerful but may be over-engineering for some projects—simple task management may be sufficient based on your own needs.
      </p>

      <h2>Let AI Add Checkpoints</h2>
      <p>
        When creating tasks, you can ask the AI to perform checks at each stage. An example <ToolTip keyName="prompt">prompt</ToolTip> structure:
      </p>

      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
        <p className="font-mono text-sm">
          &quot;After completing this task:
          <br />1. Run unit tests
          <br />2. Check if build is successful
          <br />3. Look for linting errors
          <br />4. If you made frontend changes, let me know if visual inspection is possible in the browser
          <br />5. If all checks pass, give me a summary and let&apos;s move on to the next task&quot;
        </p>
      </div>

      <h2>Tips for Context Window Management</h2>
      <p>
        To optimize <ToolTip keyName="context-window">context window</ToolTip> management:
      </p>

      <h3>1. Don&apos;t Share Unnecessary Information</h3>
      <p>
        For each task, share only relevant files and information. Showing the entire codebase every time unnecessarily fills the context.
      </p>

      <h3>2. Use Summary Information</h3>
      <p>
        When referring to previous tasks, use summaries instead of detailed code:
      </p>
      <ul>
        <li>Good: &quot;User model was created with <Code>email</Code>, <Code>password</Code>, <Code>createdAt</Code> fields&quot;</li>
        <li>Bad: [Pasting the entire model code]</li>
      </ul>

      <h3>3. Track Your Context Window Usage</h3>
      <p>
        Modern AI coding tools allow you to view your context window usage. This way you can see how much capacity remains and adjust your strategy accordingly:
      </p>
      <ul>
        <li>In <ToolTip keyName="claude-code">Claude Code</ToolTip>: You can view your current context usage with the <Code>/context</Code> command</li>
        <li>In Gemini CLI: You can check context status with the <Code>/memory</Code> command</li>
        <li>Consider starting a new conversation when the context window is getting full</li>
        <li>Reset context more frequently for critical tasks to start fresh</li>
      </ul>

      <h3>4. Optimize MCP Usage</h3>
      <p>
        <ToolTip keyName="mcp">MCP</ToolTip> (Model Context Protocol) servers provide powerful capabilities to your AI tools but also consume your context window. When each MCP server starts, schema information is loaded into the context and this space is constantly occupied.
      </p>
      <p>
        To use your context window efficiently:
      </p>
      <ul>
        <li>Load MCP servers only when you need them</li>
        <li>Disable MCP servers you&apos;re not using</li>
        <li>If you have multiple projects, use different MCP configurations for each project</li>
        <li>Load MCP servers with lazy loading (on demand)</li>
      </ul>
      <p>
        For detailed information on efficient MCP server usage, you can read my article <BlogLink href="/blog/mcp-servers-efficient-usage">Efficient MCP Server Usage</BlogLink>.
      </p>

      <h2>Keys to Success in Vibe Coding</h2>
      <p>
        To work efficiently with <ToolTip keyName="vibe-coding">vibe coding</ToolTip>:
      </p>

      <h3>1. Manage Context Window as a Resource</h3>
      <p>
        Context space is a limited resource. Evaluate whether each piece of information is truly necessary.
      </p>

      <h3>2. Keep Tasks Atomic</h3>
      <p>
        Each task should focus on a single responsibility. Instead of &quot;user system and payment integration,&quot; make these two separate tasks.
      </p>

      <h3>3. Don&apos;t Skip Testing and Validation</h3>
      <p>
        Run tests at the end of each task. AI-generated code may not always be correct.
      </p>

      <h3>4. Develop Good Prompt Writing Skills</h3>
      <p>
        Write clear, specific, and contextual <ToolTip keyName="prompt">prompts</ToolTip>:
      </p>
      <ul>
        <li>Bad: &quot;Make an API&quot;</li>
        <li>Good: &quot;Using Express.js, create a POST /api/register endpoint for user registration. Validate email and password. Hash password with bcrypt. Return JWT token.&quot;</li>
      </ul>

      <h3>5. Use Version Control</h3>
      <p>
        <ToolTip keyName="git-commit">Commit</ToolTip> after completing each task. This way:
      </p>
      <ul>
        <li>You can revert incorrect changes</li>
        <li>You can track progress</li>
        <li>You can perform code reviews</li>
      </ul>

      <h2>Common Mistakes and How to Prevent Them</h2>

      <h3>Mistake 1: Too Long Conversations</h3>
      <p>
        <strong>Problem:</strong> Trying to add too many features within a single conversation.
        <br />
        <strong>Solution:</strong> Start a new conversation after 50-100 messages or refresh at important milestones.
      </p>

      <h3>Mistake 2: Lack of Context</h3>
      <p>
        <strong>Problem:</strong> Not telling the AI the general purpose of the project when starting a new task.
        <br />
        <strong>Solution:</strong> Start each new conversation with a 2-3 sentence project summary.
      </p>

      <h3>Mistake 3: Uncontrolled Progress</h3>
      <p>
        <strong>Problem:</strong> Moving to the next task without testing.
        <br />
        <strong>Solution:</strong> Run at least the build and basic tests at the end of each task.
      </p>

      <h2>Conclusion: Think Strategically, Code Efficiently</h2>
      <p>
        AI-powered coding tools are powerful, but effective use requires strategy. <ToolTip keyName="context-window">Context window</ToolTip> management, proper task division, and systematic checks form the foundation of successful <ToolTip keyName="vibe-coding">vibe coding</ToolTip>.
      </p>
      <p>
        Remember: AI is a tool, not a magic wand. The best results emerge when you combine AI&apos;s power with good software engineering practices.
      </p>
    </article>
  );
}

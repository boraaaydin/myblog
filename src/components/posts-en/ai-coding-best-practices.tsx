import ToolTip from "@/components/ToolTip";
import Code from "@/components/Code";
import Terminal, { TerminalCommand, TerminalClaude } from "@/components/Terminal";
import BlogLink from "../BlogLink";

export default function AICodingBestPractices() {
  return (
    <article className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
      <p>
        AI-powered coding tools have transformed modern software development. Tools like <ToolTip keyName="claude-code">Claude Code</ToolTip>, GitHub Copilot, and Cursor have multiplied developer productivity. However, to maximize these tools, you must understand the <ToolTip keyName="vibe-coding">vibe coding</ToolTip> approach, <ToolTip keyName="context-window">context window</ToolTip> management, and proper workflow strategies. This guide explains the fundamental principles of working professionally with <ToolTip keyName="llm">LLM</ToolTip>-based coding assistants.
      </p>

      <h2>Context Window: AI&apos;s Short-Term Memory</h2>
      <p>
        The most critical limitation of AI coding assistants is <ToolTip keyName="context-window">context window</ToolTip> size. Understanding what this means is the first step to efficient work.
      </p>
      <p>
        <ToolTip keyName="llm">LLM</ToolTip> models work in a <ToolTip keyName="stateless">stateless</ToolTip> manner—they don&apos;t remember you. With each new query, the entire conversation history is resent to the AI server. The context window includes not just messages, but all operation data like file reads, terminal outputs, lint results, and web searches. This makes the AI appear to &quot;remember&quot; conversation context—but it&apos;s an illusion.
      </p>
      <p>
        Performance drops as the context window approaches fullness. Proactive management is essential before it fills up.
      </p>

      <h3>What Happens When Context Window Fills?</h3>
      <ul>
        <li>Information from the beginning of the conversation gets lost</li>
        <li><ToolTip keyName="hallucination">Hallucination</ToolTip> rate increases</li>
        <li>Inconsistent and erroneous responses are given</li>
        <li>Previous instructions are ignored</li>
        <li>Code quality decreases</li>
      </ul>

      <h2>Why Can&apos;t You Write the Entire App with One Prompt?</h2>
      <p>
        A common mistake: writing a very detailed, long <ToolTip keyName="prompt">prompt</ToolTip> to the AI and asking it to create the entire application in one go. This approach almost always fails.
      </p>

      <h3>1. Context Window Limit</h3>
      <p>
        While not impossible, writing a complex application in a single prompt is highly inefficient. As the project grows, context fills up, performance drops, errors increase.
      </p>

      <h3>2. Error Cumulative Effect</h3>
      <p>
        Small mistakes made in long sessions cause chain reactions. A 5-line error at step one can turn into a 500-line rewrite at step 50.
      </p>

      <h3>3. Context Erosion</h3>
      <p>
        In long conversations, AI &quot;forgets&quot; the project&apos;s initial requirements. You request Next.js at the start, 50 messages later it&apos;s writing a React app.
      </p>

      <h2>Solution: Task-Based Workflow Approach</h2>
      <p>
        The secret to successful <ToolTip keyName="vibe-coding">vibe coding</ToolTip>: divide project into logical tasks, focus on each task, keep context clean.
      </p>

      <h3>1. Break Large Tasks into Atomic Parts</h3>
      <p>
        Each task should focus on a single responsibility. Example: User authentication system
      </p>
      <ul>
        <li><strong>Task 1:</strong> User model and database schema</li>
        <li><strong>Task 2:</strong> POST /api/register endpoint (validation + bcrypt)</li>
        <li><strong>Task 3:</strong> POST /api/login endpoint (JWT token)</li>
        <li><strong>Task 4:</strong> Token refresh mechanism</li>
        <li><strong>Task 5:</strong> Frontend register/login forms</li>
        <li><strong>Task 6:</strong> Error handling and security headers</li>
      </ul>

      <h3>2. Each Task = New Context Window</h3>
      <p>
        When a task is complete, start a new conversation. Advantages:
      </p>
      <ul>
        <li>Clean, optimized context</li>
        <li>Only relevant information (previous task results)</li>
        <li>Zero risk of error chaining</li>
        <li>Maximum AI performance</li>
      </ul>

      <h3>3. Transfer Context for Each New Task</h3>
      <p>
        In the new conversation, specify:
      </p>
      <ul>
        <li><strong>Project summary:</strong> &quot;E-commerce site with Next.js 14&quot;</li>
        <li><strong>Completed tasks:</strong> &quot;User model and register endpoint ready&quot;</li>
        <li><strong>Current task:</strong> &quot;We&apos;ll add login endpoint&quot;</li>
        <li><strong>Technology stack:</strong> &quot;TypeScript, Prisma, JWT, bcrypt&quot;</li>
      </ul>

      <h3>Spec Driven Development: More Structured Approach</h3>
      <p>
        Some developers prefer a method similar to test-driven development (TDD): <strong>Spec Driven Development</strong>. Write an executable specification first, then have the AI write code that adheres to this spec.
      </p>
      <p>
        Popular tools:
      </p>
      <ul>
        <li><a href="https://github.com/buildermethods/agent-os" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Agent OS</a> - Spec-driven AI agent operating system</li>
        <li><a href="https://github.com/bmad-code-org/BMAD-METHOD" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">BMAD</a> - 19+ agents, 50+ <ToolTip keyName="workflow">workflows</ToolTip></li>
        <li><a href="https://github.com/github/spec-kit" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Spec Kit</a> - GitHub&apos;s specification tool</li>
        <li><a href="https://github.com/Fission-AI/OpenSpec" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Open Spec</a> - Open source spec management</li>
      </ul>
      <p>
        <strong>Warning:</strong> May be over-engineering for small projects. A simple task list is often sufficient.
      </p>

      <h2>Context Window Optimization Strategies</h2>
      <p>
        Think of context as a CPU—a limited resource. Use it efficiently with these strategies:
      </p>

      <h3>1. Maximum Results with Minimal Messages</h3>
      <p>
        Each <ToolTip keyName="prompt">prompt</ToolTip> and response fills the context. Use 1 well-written prompt instead of a 10-message conversation.
      </p>
      <p>
        <strong>Bad approach:</strong>
      </p>
      <ul>
        <li>&quot;Make API&quot;</li>
        <li>&quot;Add user&quot;</li>
        <li>&quot;Add password&quot;</li>
        <li>&quot;Add validation&quot;</li>
      </ul>
      <p>
        <strong>Good approach:</strong>
      </p>
      <p>
        &quot;Write Express.js POST /api/register endpoint. Validate email/password, hash with bcrypt, return JWT token, save to PostgreSQL with Prisma.&quot;
      </p>

      <h3>2. Context Refresh Commands</h3>
      <p>
        When context fills up or performance drops:
      </p>
      <Terminal title="Context Management">
        <TerminalClaude>/clear</TerminalClaude>
        <TerminalClaude>/compact Project uses Next.js 14, TypeScript, Prisma</TerminalClaude>
      </Terminal>
      <ul>
        <li><Code>/clear</Code> - Start completely new conversation</li>
        <li><Code>/compact</Code> - Get conversation summary, start new session</li>
        <li>Re-specify important info (stack, architectural decisions) in new session</li>
      </ul>

      <h3>3. Monitor Context Usage</h3>
      <p>
        AI tools display context fill rate. Track proactively for management:
      </p>
      <Terminal title="Context Monitoring">
        <TerminalClaude>/context</TerminalClaude>
      </Terminal>
      <ul>
        <li><ToolTip keyName="claude-code">Claude Code</ToolTip>: <Code>/context</Code> command</li>
        <li>Gemini CLI: <Code>/memory</Code> command</li>
        <li>Consider new conversation at 70-80% fullness</li>
        <li>Reset more frequently for critical tasks</li>
      </ul>

      <h3>4. Use MCP Servers Wisely</h3>
      <p>
        <ToolTip keyName="mcp">MCP</ToolTip> servers give AI superpowers but also consume context. When each MCP server starts, schema information loads into context and stays there permanently.
      </p>
      <p>
        <strong>Efficient MCP usage:</strong>
      </p>
      <ul>
        <li>Only load MCPs you use</li>
        <li>Disable unused servers</li>
        <li>Use different MCP configs per project</li>
        <li>Prefer lazy loading (load on demand)</li>
      </ul>
      <p>
        <strong>Detailed info:</strong> <BlogLink href="/blog/mcp-servers-efficient-usage">Efficient MCP Server Usage Guide</BlogLink>
      </p>

      <h2>5 Golden Rules for Vibe Coding Success</h2>

      <h3>1. Manage Context Like RAM</h3>
      <p>
        Context is a limited resource. Every file read, web search, terminal output consumes context. Don&apos;t load unnecessary info.
      </p>

      <h3>2. Single Responsibility: One Task One Job</h3>
      <p>
        ❌ &quot;Build user system and payment integration&quot;
        <br />
        ✅ Task 1: &quot;User system&quot;, Task 2: &quot;Payment integration&quot;
      </p>

      <h3>3. Test Before Moving Forward</h3>
      <p>
        Test after each task completes. AI code isn&apos;t 100% correct. Run build, lint, unit tests.
      </p>
      <Terminal title="After Each Task">
        <TerminalCommand>npm run build</TerminalCommand>
        <TerminalCommand>npm run lint</TerminalCommand>
        <TerminalCommand>npm test</TerminalCommand>
      </Terminal>

      <h3>4. Prompt Engineering: Few Words, Much Info</h3>
      <p>
        Write clear, specific, contextual <ToolTip keyName="prompt">prompts</ToolTip>:
      </p>
      <ul>
        <li>❌ &quot;Make an API&quot;</li>
        <li>✅ &quot;Express.js, user registration, POST /api/register, email+password validation, bcrypt hash, return JWT token, Prisma PostgreSQL&quot;</li>
      </ul>

      <h3>5. One Commit Per Task</h3>
      <p>
        Task completed → <ToolTip keyName="git-commit">commit</ToolTip>. Small commits = easy rollback, clear history.
      </p>
      <Terminal title="Git Workflow">
        <TerminalCommand>git add .</TerminalCommand>
        <TerminalCommand>git commit -m &quot;feat: add user registration endpoint&quot;</TerminalCommand>
      </Terminal>
      <p>
        Detailed info: <BlogLink href="/blog/big-gains-with-small-commits">Big Gains with Small Commits</BlogLink>
      </p>

      <h2>3 Critical Mistakes and Solutions</h2>

      <h3>❌ Mistake 1: Marathon Conversation</h3>
      <p>
        <strong>Problem:</strong> Writing the entire project in a 100+ message conversation
      </p>
      <p>
        <strong>Solution:</strong> Refresh every 50-100 messages. Start new conversation per feature.
      </p>

      <h3>❌ Mistake 2: Context-Free Start</h3>
      <p>
        <strong>Problem:</strong> Saying &quot;Make login endpoint&quot; in new conversation (How would AI know?)
      </p>
      <p>
        <strong>Solution:</strong> Give mini brief in each new session: &quot;Next.js 14, TypeScript, Prisma, PostgreSQL. User model ready. Now adding login endpoint.&quot;
      </p>

      <h3>❌ Mistake 3: Test-Free Coding</h3>
      <p>
        <strong>Problem:</strong> AI wrote code, continuing without testing
      </p>
      <p>
        <strong>Solution:</strong> Don&apos;t move to new task without running build + lint + test. Errors not caught early become cascading disasters.
      </p>

      <h2>Conclusion: AI is a Tool, Not a Magic Wand</h2>
      <p>
        AI coding assistants have democratized software development. But strategy is essential for maximum efficiency:
      </p>
      <ul>
        <li><strong>Manage context window wisely</strong> - It&apos;s a limited resource</li>
        <li><strong>Break tasks into atomic parts</strong> - Each task = 1 responsibility</li>
        <li><strong>Test, commit, refresh</strong> - Prevent error accumulation</li>
        <li><strong>Learn prompt engineering</strong> - Few messages, much info</li>
        <li><strong>Optimize MCPs</strong> - Don&apos;t load unnecessary servers</li>
      </ul>
      <p>
        <strong>Golden rule:</strong> AI + Good software engineering practices = 10x productivity. AI alone isn&apos;t enough—you must think strategically.
      </p>
      <p>
        <strong>More resources:</strong>
      </p>
      <ul>
        <li><BlogLink href="/blog/mcp-servers-efficient-usage">Efficient MCP Server Usage</BlogLink></li>
        <li><BlogLink href="/blog/big-gains-with-small-commits">Big Gains with Small Commits</BlogLink></li>
        <li><BlogLink href="/blog/beginner-git-usage">Beginner-Level Git Usage</BlogLink></li>
      </ul>
    </article>
  );
}

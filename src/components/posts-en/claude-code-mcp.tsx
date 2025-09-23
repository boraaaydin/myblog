import ToolTip from "@/components/ToolTip";

export default function MCPServersGuide() {
  return (
    <article className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
      <header>
        <h1>Using AI Efficiently: MCP Servers</h1>
      </header>

      <p>
        We can add additional features to AI with <ToolTip keyName="mcp-server">MCP servers</ToolTip>. However, as the MCP servers we use increase, the <ToolTip keyName="context-window">context window</ToolTip> starts to decrease. <ToolTip keyName="claude-code">Claude Code</ToolTip> allows us to parametrically select the MCP servers we will use in each session.
      </p>

      <section>
        <h2>Context Window Problem</h2>
        <p>
          For AI tools like <ToolTip keyName="claude-code">Claude Code</ToolTip> to work successfully, it is critical that the <ToolTip keyName="context-window">context window</ToolTip> is as empty as possible. When context fills up:
        </p>
        <ul>
          <li>AI starts hallucinating</li>
          <li>Forgets topics from previous conversations</li>
          <li>Gives inconsistent answers</li>
          <li>Performance decreases</li>
        </ul>
        <p>
          <ToolTip keyName="mcp-server">MCP servers</ToolTip> solve this problem with special modules that are loaded on demand.
        </p>
      </section>

      <section>
        <h2>How to Use?</h2>

        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
          <code className="text-sm">
            {`claude --mcp-config {servername}.json`}
          </code>
        </pre>

        <p>
          The biggest advantage: "You can load a single MCP server before any session" this way you use context efficiently.
        </p>

      </section>
      <p>
        You can check this GitHub repository to use the MCP you need in each session with Claude Code. <a href="https://github.com/boraaaydin/mcp" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">https://github.com/boraaaydin/mcp</a>
      </p>
      <section>
        <h2>Conclusion</h2>
        <p>
          MCP servers offer a practical solution to the context window problem of AI tools. Especially when working with Claude Code, preloading appropriate MCPs for each project both improves performance and allows you to get more consistent results.
        </p>
        <p>
          Remember: Clean context is the key to quality AI responses.
        </p>
      </section>
    </article>
  );
}
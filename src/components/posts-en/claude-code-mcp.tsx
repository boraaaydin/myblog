import ToolTip from "@/components/ToolTip";
import Terminal, { TerminalClaude, TerminalCommand, TerminalInfo, TerminalResult } from "../Terminal";

export default function MCPServersGuide() {
  return (
    <article className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
      <header>
        <h1>Using AI Efficiently: MCP Servers</h1>
      </header>

      <p>
        We can add additional features to AI with <ToolTip keyName="mcp-server">MCP servers</ToolTip>. However, as the MCP servers we use increase, the <ToolTip keyName="context-window">context window</ToolTip> starts to decrease. <ToolTip keyName="claude-code">Claude Code</ToolTip> allows us to parametrically select the MCP servers we will use in each session.
      </p>
      <Terminal title="Claude Code with MCP Server">
        <TerminalCommand>claude --mcp-config github.json</TerminalCommand>
        <TerminalResult>✻ Welcome to Claude Code! </TerminalResult>
      </Terminal>
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
        <h2>How is window context if don't use MCP servers?</h2>
        <Terminal title="Claude Code with MCP Server">
          <TerminalCommand>claude</TerminalCommand>
          <TerminalResult>✻ Welcome to Claude Code! </TerminalResult>
          <TerminalClaude>/context</TerminalClaude>
          <TerminalResult>Context Usage</TerminalResult>
          <TerminalResult>claude-sonnet-4-20250514 • 17k/200k tokens (9%)</TerminalResult>
          <TerminalResult>⛶ Free space: 185.4k (92.7%)</TerminalResult>
        </Terminal>

        <h2>What if we want to use multiple MCP servers?</h2>

        <Terminal title="Claude Code with MCP Server">
          <TerminalCommand>claude --mcp-config server/context7.json --mcp-config server/playwright.json  --mcp-config server/sequential-thinking.json --mcp-config server/github.json --mcp-config server/supabase.json</TerminalCommand>
          <TerminalResult>✻ Welcome to Claude Code! </TerminalResult>
          <TerminalClaude>/context</TerminalClaude>
          <TerminalResult>Context Usage</TerminalResult>
          <TerminalResult>claude-sonnet-4-20250514 • 53k/200k tokens (26%)</TerminalResult>
          <TerminalResult>⛁ MCP tools: 37.9k tokens (19.0%)</TerminalResult>
          <TerminalResult>⛶ Free space: 147.0k (73.5%)</TerminalResult>
        </Terminal>
        <p>
          As you can see, even without using 5 MCP servers, when we load them, the context window drops from 92.7% to 73.5%. 
          Loading MCP servers whenever we want provides great benefits. Use them when you need them and use AI more efficiently.
        </p>

      </section>
      <p>
        You can check this GitHub repository to use the MCP' s easily. <a href="https://github.com/boraaaydin/mcp" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">https://github.com/boraaaydin/mcp</a>
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
import ToolTip from "@/components/ToolTip";
import Terminal, { TerminalClaude, TerminalCommand, TerminalResult } from "../Terminal";

export default function MCPServersGuide() {
  return (
    <article className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
      <header>
        <h1>Claude Code MCP Servers Guide: Optimize AI Context Window & Performance</h1>
      </header>

      <p>
        <ToolTip keyName="claude-code">Claude Code</ToolTip> is a powerful AI coding assistant, and <ToolTip keyName="mcp-server">MCP servers</ToolTip> (Model Context Protocol) extend its capabilities significantly. However, managing multiple MCP servers efficiently requires understanding how they impact your <ToolTip keyName="context-window">context window</ToolTip>. This comprehensive guide shows you how to optimize Claude Code performance by strategically loading MCP servers only when needed.
      </p>
      <section>
        <h2>How to Launch Claude Code with Specific MCP Servers</h2>
        <p>
          The basic syntax for launching Claude Code with MCP server configurations is straightforward:
        </p>
        <Terminal title="Claude Code with MCP Server">
          <TerminalCommand>claude --mcp-config github.json</TerminalCommand>
          <TerminalResult>✻ Welcome to Claude Code! </TerminalResult>
        </Terminal>
        <p>
          This command launches Claude Code with only the GitHub MCP server loaded, giving you GitHub-specific capabilities while preserving maximum context space.
        </p>

        <h3>Common MCP Server Use Cases</h3>
        <p>Here are practical examples for different development scenarios:</p>

        <h4>Web Development with Playwright Testing</h4>
        <Terminal title="Web Development Setup">
          <TerminalCommand>claude --mcp-config playwright.json</TerminalCommand>
          <TerminalResult>✻ Claude Code ready with Playwright support</TerminalResult>
        </Terminal>

        <h4>Backend Development with Database Access</h4>
        <Terminal title="Backend Development Setup">
          <TerminalCommand>claude --mcp-config supabase.json</TerminalCommand>
          <TerminalResult>✻ Claude Code ready with Supabase integration</TerminalResult>
        </Terminal>

        <h4>Full-Stack Development (Multiple Servers)</h4>
        <Terminal title="Full-Stack Setup">
          <TerminalCommand>claude --mcp-config github.json --mcp-config supabase.json</TerminalCommand>
          <TerminalResult>✻ Claude Code ready with GitHub and Supabase support</TerminalResult>
        </Terminal>
      </section>
      <section>
        <h2>Understanding the Context Window Problem in Claude Code</h2>
        <p>
          The <ToolTip keyName="context-window">context window</ToolTip> is the amount of information <ToolTip keyName="claude-code">Claude Code</ToolTip> can process at once. Managing this efficiently is crucial for optimal AI performance. When your context window fills up with too many MCP server configurations, you&apos;ll experience:
        </p>
        <ul>
          <li><strong>AI hallucinations</strong>: Incorrect or fabricated responses</li>
          <li><strong>Memory loss</strong>: Forgets earlier conversation context</li>
          <li><strong>Inconsistent outputs</strong>: Contradictory answers to similar questions</li>
          <li><strong>Degraded performance</strong>: Slower response times and reduced accuracy</li>
        </ul>
        <p>
          The solution? Load <ToolTip keyName="mcp-server">MCP servers</ToolTip> parametrically—only activate the ones you need for each specific coding session. This keeps your context window clean and Claude Code performing at its best.
        </p>
      </section>

      <section>
        <h2>Baseline: Claude Code Context Window Without MCP Servers</h2>
        <p>
          Let&apos;s start by examining how much context window space is available when running Claude Code without any MCP server configurations:
        </p>
        <Terminal title="Claude Code with MCP Server">
          <TerminalCommand>claude</TerminalCommand>
          <TerminalResult>✻ Welcome to Claude Code! </TerminalResult>
          <TerminalClaude>/context</TerminalClaude>
          <TerminalResult>Context Usage</TerminalResult>
          <TerminalResult>claude-sonnet-4-20250514 • 17k/200k tokens (9%)</TerminalResult>
          <TerminalResult>⛶ Free space: 185.4k (92.7%)</TerminalResult>
        </Terminal>
        <p>
          With no MCP servers loaded, you have <strong>92.7% free context space</strong>—plenty of room for your code and conversations.
        </p>

        <h2>The Impact of Loading Multiple MCP Servers</h2>
        <p>
          Now let&apos;s see what happens when we load multiple MCP servers simultaneously. This example demonstrates loading 5 popular MCP configurations:
        </p>
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
          Notice the dramatic difference: your available context window dropped from <strong>92.7% to 73.5%</strong>—a loss of nearly 20% just from loading the MCP configurations, even before you start using them!
        </p>
        <p>
          This is why <strong>parametric MCP loading</strong> is essential. By selectively loading only the MCP servers you need for each task, you maintain maximum context space for your actual work, resulting in better AI performance and more accurate responses.
        </p>

        <h2>Best Practices for MCP Server Management</h2>
        <ul>
          <li><strong>Load on demand</strong>: Only activate MCP servers when you need their specific functionality</li>
          <li><strong>Use project-specific configs</strong>: Create different MCP configuration files for different types of projects</li>
          <li><strong>Monitor context usage</strong>: Regularly check <code>/context</code> to ensure you&apos;re not wasting space</li>
          <li><strong>Unload when done</strong>: Restart Claude Code without MCP configs when you finish MCP-specific tasks</li>
        </ul>

      </section>

      <section>
        <h2>Quick Start: Installing and Configuring MCP Servers</h2>
        <p>
          Ready to optimize your Claude Code workflow? Check out this curated collection of MCP server configurations that you can use immediately:
        </p>
        <p>
          <a href="https://github.com/boraaaydin/mcp" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">View MCP Server Configuration Repository →</a>
        </p>
        <p>
          The repository includes ready-to-use configurations for popular tools like GitHub, Supabase, Playwright, and more. Simply clone the repo and reference the configs you need using the <code>--mcp-config</code> flag.
        </p>
      </section>

      <section>
        <h2>Frequently Asked Questions About Claude Code MCP Servers</h2>

        <h3>What are MCP servers in Claude Code?</h3>
        <p>
          MCP servers (Model Context Protocol servers) are extensions that add specialized capabilities to Claude Code. They enable integration with external tools and services like GitHub, Supabase, Playwright, and more. Each MCP server provides specific functionality such as database access, API integration, or testing frameworks.
        </p>

        <h3>How do MCP servers affect Claude Code performance?</h3>
        <p>
          MCP servers consume context window space even when not actively in use. Loading multiple MCP servers can reduce your available context from 92.7% to 73.5% or lower. This reduction impacts AI performance, potentially causing hallucinations, memory loss, and inconsistent responses.
        </p>

        <h3>How many MCP servers should I load at once?</h3>
        <p>
          Load only the MCP servers you need for your current task. For most projects, 1-2 MCP servers provide optimal balance between functionality and context preservation. Avoid loading all available servers simultaneously, as this significantly reduces AI performance.
        </p>

        <h3>Can I switch MCP servers during a Claude Code session?</h3>
        <p>
          No, MCP server configurations are loaded at startup. To use different MCP servers, you need to restart Claude Code with the new configuration flags. Plan your MCP usage before starting each session to maximize efficiency.
        </p>

        <h3>Where can I find MCP server configuration files?</h3>
        <p>
          You can create custom MCP configuration files or use pre-built configurations. The official Claude Code documentation provides MCP setup guides, and community repositories like <a href="https://github.com/boraaaydin/mcp" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">github.com/boraaaydin/mcp</a> offer ready-to-use configurations for popular tools.
        </p>

        <h3>What is the context window in Claude Code?</h3>
        <p>
          The context window is the total amount of information Claude Code can process simultaneously, measured in tokens. A larger free context window allows for better AI responses, longer conversations, and more accurate code assistance. Managing context efficiently is crucial for optimal performance.
        </p>

        <h3>How do I check my current context window usage?</h3>
        <p>
          Use the <code>/context</code> command in Claude Code to view your current context usage. This displays total tokens used, MCP tools overhead, and available free space, helping you monitor and optimize your context window utilization.
        </p>
      </section>

      <section>
        <h2>Conclusion: Maximize Claude Code Efficiency with Smart MCP Management</h2>
        <p>
          <ToolTip keyName="mcp-server">MCP servers</ToolTip> transform <ToolTip keyName="claude-code">Claude Code</ToolTip> from a capable AI assistant into a powerhouse development tool. However, the key to unlocking their full potential lies in strategic management of your <ToolTip keyName="context-window">context window</ToolTip>.
        </p>
        <p>
          By loading MCP servers parametrically—activating only what you need, when you need it—you ensure:
        </p>
        <ul>
          <li><strong>Optimal AI performance</strong>: More context space means better, more accurate responses</li>
          <li><strong>Reduced hallucinations</strong>: Clean context prevents AI from generating incorrect information</li>
          <li><strong>Improved consistency</strong>: Claude Code maintains conversation context throughout your session</li>
          <li><strong>Faster development</strong>: Efficient context usage leads to quicker, more reliable assistance</li>
        </ul>
        <p>
          Remember: A clean context window is the foundation of quality AI-assisted development. Master MCP server management, and you&apos;ll master Claude Code.
        </p>
      </section>
    </article>
  );
}
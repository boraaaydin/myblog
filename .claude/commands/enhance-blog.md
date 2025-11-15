## Instructions

This command accepts a blog post component file path as a parameter (e.g., `src/components/posts-tr/ai-coding-best-practices.tsx`).

It enhances existing blog posts to improve SEO, readability, and user experience for developers at all skill levels.

### Objectives:

1. **SEO Optimization**:
   - Improve content structure for better search engine visibility
   - Enhance titles, headings, and meta descriptions
   - Optimize keyword placement naturally within the content

2. **Content Enhancement**:
   - Rewrite content with a professional yet approachable tone
   - Target software developers, including those with varying technical backgrounds
   - Ensure clarity and accessibility for both junior and senior developers
   - Add practical examples and real-world use cases where appropriate

3. **Component Usage**:

   **Code Component** - For inline code snippets (variables, function names, short code):
   ```tsx
   import Code from "@/components/Code";

   <Code>git status</Code>
   <Code>useState</Code>
   <Code>npm install</Code>
   ```

   **Terminal Component** - For CLI commands and terminal outputs:
   ```tsx
   import Terminal, { TerminalCommand, TerminalResult, TerminalError, TerminalInfo, TerminalClaude } from "@/components/Terminal";

   <Terminal title="Git Commands">
     <TerminalCommand>git status</TerminalCommand>
     <TerminalResult>On branch main</TerminalResult>
     <TerminalError>fatal: not a git repository</TerminalError>
     <TerminalInfo>Changes not staged for commit</TerminalInfo>
     <TerminalClaude>claude code mcp install</TerminalClaude>
   </Terminal>
   ```

   **BlogLink Component** - For internal blog post references:
   ```tsx
   import BlogLink from "@/components/BlogLink";

   <BlogLink href="/blog/beginner-git-usage">Git kullanım rehberi</BlogLink>
   ```
   Note: Automatically handles language routing (adds /tr or /en prefix)

   **ToolTip Component** - For technical terms unfamiliar to readers:
   ```tsx
   import ToolTip from "@/components/ToolTip";

   <ToolTip keyName="git-commit">commit</ToolTip>
   <ToolTip keyName="mcp-server">MCP sunucusu</ToolTip>
   ```

   **ToolTip Rules**:
   - Add tooltips to `src/lib/tooltip-content.ts` with both Turkish and English translations
   - Use English for tooltip key names (e.g., "git-commit", "mcp-server")
   - Don't add tooltips to headers if the same term appears with tooltip in the text
   - Check existing tooltips first before creating new ones

4. **Tag Management**:
   - Review existing tags in `src/lib/tags.ts`
   - Add relevant tags that accurately categorize the enhanced content
   - Ensure tags align with SEO strategy and content topics

### Writing Guidelines:

- **Tone**: Professional yet conversational, avoiding overly complex jargon
- **Structure**: Use clear headings, short paragraphs, and bullet points for readability
- **Examples**: Include practical code examples and real-world scenarios
- **Accessibility**: Explain technical concepts in a way that junior developers can understand while keeping senior developers engaged
- **Brevity**: Keep content concise - skip over well-known concepts quickly, focus on valuable insights
- **Length**: Avoid making the post too long - be direct and to the point

### Important Rules:

- **Single Language Only**: Only enhance the blog post in the language specified by the file path
  - DO NOT translate to the other language
  - DO NOT modify the corresponding file in the other language folder
  - Work only on the file provided as parameter
- **Conciseness**: Don't over-explain commonly known concepts - readers are developers and understand basics 
interface CodeProps {
  children: React.ReactNode;
}

export default function Code({ children }: CodeProps) {
  return (
    <code
      className="px-1.5 py-0.5 rounded text-sm font-mono"
      style={{
        backgroundColor: 'var(--code-bg, #f3f4f6)',
        color: 'var(--code-text, #000000)'
      }}
    >
      {children}
    </code>
  );
}

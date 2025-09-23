interface TerminalProps {
  children: React.ReactNode;
  title?: string;
}

interface TerminalCommandProps {
  children: React.ReactNode;
}

interface TerminalInfoProps {
  children: React.ReactNode;
}

interface TerminalResultProps {
  children: React.ReactNode;
}

interface TerminalErrorProps {
  children: React.ReactNode;
}

export function TerminalClaude({ children }: TerminalCommandProps) {
  return (
    <div className="flex items-center">
      <span className="text-gray-500 mr-2">&gt;</span>
      <span className="text-green-400">{children}</span>
    </div>
  );
}

export function TerminalCommand({ children }: TerminalCommandProps) {
  return (
    <div className="flex items-center">
      <span className="text-gray-500 mr-2">$</span>
      <span className="text-green-400">{children}</span>
    </div>
  );
}

export function TerminalInfo({ children }: TerminalInfoProps) {
  return (
    <div className="mt-2 text-blue-400">
      {children}
    </div>
  );
}

export function TerminalResult({ children }: TerminalResultProps) {
  return (
    <div className="text-gray-300">
      {children}
    </div>
  );
}

export function TerminalError({ children }: TerminalErrorProps) {
  return (
    <div className="text-red-400">
      {children}
    </div>
  );
}

export default function Terminal({ children, title = "Terminal" }: TerminalProps) {
  return (
    <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden my-6">
      <div className="bg-gray-800 px-4 py-2 flex items-center space-x-2">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <span className="text-gray-400 text-sm ml-4">{title}</span>
      </div>
      <div className="p-4 font-mono text-sm text-green-400 bg-gray-900 overflow-x-auto space-y-1">
        {children}
      </div>
    </div>
  );
}
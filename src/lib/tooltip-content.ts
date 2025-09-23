export const tooltipContent: Record<string, string> = {
  "mcp-server": `MCP (Model Context Protocol) sunucuları, Claude Code'un yeteneklerini genişleten özel yapılandırmalardır. Her biri belirli bir görevi optimize eder ve sadece ihtiyaç duyulduğunda context'e dahil olur. Bu sayede context window'u verimli kullanarak AI'nin performansını artırır.`,
  "context-window": `Context window, AI'nin aynı anda işleyebileceği metin miktarını belirler. Context dolduğunda AI halüsinasyon görmeye başlar, önceki konuları unutur ve tutarsız cevaplar verir. Bu nedenle context'i temiz tutmak kritik öneme sahiptir.`,
  "claude-code": `Claude Code, Anthropic'in resmi CLI aracıdır. Kod yazma, debugging ve geliştirme süreçlerinde AI destekli yardım sağlar. MCP sunucuları ile genişletilebilir ve projelerinizin ihtiyaçlarına göre özelleştirilebilir.`,
};

export function getTooltipContent(key: string): string | undefined {
  return tooltipContent[key];
}
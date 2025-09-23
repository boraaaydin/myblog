export const tooltipContent: Record<string, string> = {
  "mcp-server": `MCP (Model Context Protocol) sunucusu, AI uygulamaları ile çeşitli veri kaynaklarını güvenli bir şekilde bağlamak için tasarlanmış bir protokoldür. Claude gibi AI modellerinin harici kaynaklara (dosya sistemleri, veritabanları, API'ler, web siteleri vb.) erişebilmesini sağlayan bir arayüz görevi görür. Sunucu, AI'nın ihtiyaç duyduğu verileri standart bir protokol üzerinden sunar ve güvenlik kontrollerini yönetir. Bu sayede AI asistanları daha geniş bilgi kaynaklarına erişebilir ve daha işlevsel hale gelir.`,
  "context-window": `AI context window, yapay zekanın bir sohbet sırasında aynı anda "hatırlayabildiği" metin miktarının sınırıdır. Token cinsinden ölçülür ve model ne kadar önceki mesajları, talimatları ve bilgileri aktif olarak göz önünde bulundurabileceğini belirler. Context window dolduğunda, model en eski bilgileri "unutur" ve sadece en güncel kısmı işleyebilir. Örneğin 128K token'lık bir context window, yaklaşık 100 sayfalık metni aynı anda işleyebilir anlamına gelir.`,
  "claude-code": `Claude Code, Anthropic'in resmi CLI aracıdır. Kod yazma, debugging ve geliştirme süreçlerinde AI destekli yardım sağlar. MCP sunucuları ile genişletilebilir ve projelerinizin ihtiyaçlarına göre özelleştirilebilir.`,
};

export function getTooltipContent(key: string): string | undefined {
  return tooltipContent[key];
}
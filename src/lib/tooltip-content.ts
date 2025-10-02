export const tooltipContent: Record<string, Record<string, string>> = {
  "mcp-server": {
    tr: `MCP (Model Context Protocol) sunucusu, AI uygulamaları ile çeşitli veri kaynaklarını güvenli bir şekilde bağlamak için tasarlanmış bir protokoldür. Claude gibi AI modellerinin harici kaynaklara (dosya sistemleri, veritabanları, API'ler, web siteleri vb.) erişebilmesini sağlayan bir arayüz görevi görür. Sunucu, AI'nın ihtiyaç duyduğu verileri standart bir protokol üzerinden sunar ve güvenlik kontrollerini yönetir. Bu sayede AI asistanları daha geniş bilgi kaynaklarına erişebilir ve daha işlevsel hale gelir.`,
    en: `MCP (Model Context Protocol) server is a protocol designed to securely connect AI applications with various data sources. It acts as an interface that allows AI models like Claude to access external resources (file systems, databases, APIs, websites, etc.). The server provides the data needed by AI through a standard protocol and manages security controls. This enables AI assistants to access broader information sources and become more functional.`,
  },
  "context-window": {
    tr: `AI context window, yapay zekanın bir sohbet sırasında aynı anda "hatırlayabildiği" metin miktarının sınırıdır. Token cinsinden ölçülür ve model ne kadar önceki mesajları, talimatları ve bilgileri aktif olarak göz önünde bulundurabileceğini belirler. Context window dolduğunda, model en eski bilgileri "unutur" ve sadece en güncel kısmı işleyebilir. Örneğin 128K token'lık bir context window, yaklaşık 100 sayfalık metni aynı anda işleyebilir anlamına gelir.`,
    en: `AI context window is the limit of the amount of text that an AI can "remember" at once during a conversation. It is measured in tokens and determines how many previous messages, instructions, and information the model can actively consider. When the context window fills up, the model "forgets" the oldest information and can only process the most recent part. For example, a 128K token context window means it can process approximately 100 pages of text simultaneously.`,
  },
  "claude-code": {
    tr: `Claude Code, Anthropic'in resmi CLI aracıdır. Kod yazma, debugging ve geliştirme süreçlerinde AI destekli yardım sağlar. MCP sunucuları ile genişletilebilir ve projelerinizin ihtiyaçlarına göre özelleştirilebilir.`,
    en: `Claude Code is Anthropic's official CLI tool. It provides AI-powered assistance in code writing, debugging, and development processes. It can be extended with MCP servers and customized according to your project needs.`,
  },
  "git-commit": {
    tr: `Commit, Git versiyon kontrol sisteminde kod değişikliklerinin kaydedilmesi işlemidir. Her commit, yapılan değişikliklerin bir fotoğrafını çeker ve projenin o anki durumunu saklar. Commit'ler bir mesaj ile birlikte kaydedilir ve gerektiğinde önceki sürümlere dönüş yapılabilmesini sağlar. İyi commit alışkanlıkları, kod geçmişinin anlaşılır ve yönetilebilir olmasını sağlar.`,
    en: `Commit is the process of recording code changes in the Git version control system. Each commit takes a snapshot of the changes made and stores the current state of the project. Commits are saved with a message and allow reverting to previous versions when needed. Good commit habits ensure that code history is understandable and manageable.`,
  },
  "git-status": {
    tr: `Git status komutu, çalışma dizinindeki değişikliklerin durumunu gösterir. Hangi dosyaların değiştirildiğini, hangi değişikliklerin staged (sahneye alınmış) olduğunu ve hangi dosyaların Git tarafından izlenmediğini listeler. Commit yapmadan önce git status ile değişiklikleri kontrol etmek, yanlış dosyaların commit edilmesini önler.`,
    en: `Git status command shows the state of changes in the working directory. It lists which files have been modified, which changes are staged, and which files are not tracked by Git. Checking changes with git status before committing prevents wrong files from being committed.`,
  },
  "git-diff": {
    tr: `Diff, iki dosya veya kod versiyonu arasındaki farkları gösteren bir araçtır. Git'te 'git diff' komutu ile kullanılır ve hangi satırların eklendiğini, silindiğini veya değiştirildiğini satır satır gösterir. Commit yapmadan önce diff'leri incelemek, istenmeyen değişikliklerin fark edilmesini sağlar ve kod kalitesini artırır.`,
    en: `Diff is a tool that shows the differences between two files or code versions. In Git, it is used with the 'git diff' command and shows line by line which lines were added, deleted, or modified. Reviewing diffs before committing helps detect unwanted changes and improves code quality.`,
  },
  "cli-tools": {
    tr: `CLI (Command Line Interface) araçları, komut satırı üzerinden çalışan programlardır. Terminal veya konsol üzerinden metin komutları ile kullanılır. Git, npm, ve Claude Code gibi araçlar CLI araçlarına örnektir. CLI araçları genellikle otomasyona uygun, hızlı ve güçlü özellikler sunar. Modern geliştirmede AI destekli CLI araçları da yaygınlaşmıştır.`,
    en: `CLI (Command Line Interface) tools are programs that run through the command line. They are used with text commands through a terminal or console. Tools like Git, npm, and Claude Code are examples of CLI tools. CLI tools generally offer automation-friendly, fast, and powerful features. AI-powered CLI tools have also become widespread in modern development.`,
  },
};

export function getTooltipContent(key: string, lang: string = "tr"): string | undefined {
  return tooltipContent[key]?.[lang];
}
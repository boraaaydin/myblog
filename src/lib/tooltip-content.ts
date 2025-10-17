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
  "git": {
    tr: `Git, dağıtık versiyon kontrol sistemidir. Yazılım projelerinde yapılan değişiklikleri takip eder, geçmişi saklar ve birden fazla kişinin aynı proje üzerinde çalışmasını kolaylaştırır. Her geliştiricinin bilgisayarında projenin tam bir kopyası bulunur. Git sayesinde kodda yaptığınız değişiklikleri kaydedebilir, önceki sürümlere dönebilir ve farklı özellikler üzerinde paralel çalışabilirsiniz.`,
    en: `Git is a distributed version control system. It tracks changes made in software projects, stores history, and makes it easy for multiple people to work on the same project. Each developer has a complete copy of the project on their computer. With Git, you can record changes in your code, revert to previous versions, and work in parallel on different features.`,
  },
  "ide": {
    tr: `IDE (Integrated Development Environment), yazılım geliştirme için tasarlanmış kapsamlı bir araçtır. Kod editörü, debugger, derleyici ve diğer geliştirme araçlarını tek bir arayüzde birleştirir. Visual Studio Code, IntelliJ IDEA, ve Eclipse gibi popüler IDE'ler geliştiricilerin daha verimli çalışmasını sağlar. IDE'ler kod tamamlama, hata yakalama ve proje yönetimi gibi özellikler sunar.`,
    en: `IDE (Integrated Development Environment) is a comprehensive tool designed for software development. It combines a code editor, debugger, compiler, and other development tools in a single interface. Popular IDEs like Visual Studio Code, IntelliJ IDEA, and Eclipse help developers work more efficiently. IDEs offer features like code completion, error detection, and project management.`,
  },
  "git-repository": {
    tr: `Git repository (depo), Git tarafından yönetilen bir projedir. Proje dosyalarınızın tüm versiyonlarını, değişiklik geçmişini ve meta verilerini içerir. Repository iki türlü olabilir: local (bilgisayarınızda) veya remote (GitHub, GitLab gibi platformlarda). Her repository, projenin bağımsız ve tam bir kopyasını içerir. 'git init' komutu ile yeni bir repository oluşturabilir veya 'git clone' ile mevcut bir repository'yi kopyalayabilirsiniz.`,
    en: `Git repository is a project managed by Git. It contains all versions of your project files, change history, and metadata. Repositories can be of two types: local (on your computer) or remote (on platforms like GitHub, GitLab). Each repository contains an independent and complete copy of the project. You can create a new repository with 'git init' command or copy an existing repository with 'git clone'.`,
  },
  "cli": {
    tr: `CLI (Command Line Interface), kullanıcıların bilgisayarla metin komutları aracılığıyla etkileşime girdiği arayüzdür. Terminal veya konsol olarak da bilinir. CLI, grafik arayüze göre daha hızlı ve otomasyon için daha uygundur. Git, npm ve Claude Code gibi birçok geliştirme aracı CLI üzerinden kullanılır. CLI araçları genellikle otomasyona uygun, hızlı ve güçlü özellikler sunar. Modern geliştirmede AI destekli CLI araçları da yaygınlaşmıştır.`,
    en: `CLI (Command Line Interface) is an interface where users interact with the computer through text commands. Also known as terminal or console. CLI is faster than graphical interface and more suitable for automation. Many development tools like Git, npm, and Claude Code are used through CLI. CLI tools generally offer automation-friendly, fast, and powerful features. AI-powered CLI tools have also become widespread in modern development.`,
  },
  "cli-tools": {
    tr: `CLI (Command Line Interface) araçları, komut satırı üzerinden çalışan programlardır. Terminal veya konsol üzerinden metin komutları ile kullanılır. Git, npm, ve Claude Code gibi araçlar CLI araçlarına örnektir. CLI araçları genellikle otomasyona uygun, hızlı ve güçlü özellikler sunar. Modern geliştirmede AI destekli CLI araçları da yaygınlaşmıştır.`,
    en: `CLI (Command Line Interface) tools are programs that run through the command line. They are used with text commands through a terminal or console. Tools like Git, npm, and Claude Code are examples of CLI tools. CLI tools generally offer automation-friendly, fast, and powerful features. AI-powered CLI tools have also become widespread in modern development.`,
  },
  "git-staging-area": {
    tr: `Staging area (hazırlama alanı veya index), Git'te commit yapılacak değişikliklerin hazırlandığı geçici bir alandır. Çalışma dizininizdeki değişiklikleri 'git add' komutu ile staging area'ya alırsınız. Bu alan, hangi değişikliklerin bir sonraki commit'e dahil edileceğini kontrol etmenizi sağlar. Staging area sayesinde dosyaların sadece bir kısmını commit edebilir, diğer değişiklikleri daha sonraya bırakabilirsiniz.`,
    en: `Staging area (also called index) is a temporary area in Git where changes to be committed are prepared. You add changes from your working directory to the staging area with the 'git add' command. This area allows you to control which changes will be included in the next commit. Thanks to the staging area, you can commit only part of the files and leave other changes for later.`,
  },
  "git-branch": {
    tr: `Branch (dal), Git'te bağımsız bir geliştirme hattıdır. Ana koddan ayrılarak yeni özellikler geliştirmenize veya hata düzeltmeleri yapmanıza olanak tanır. Her repository varsayılan olarak 'main' veya 'master' isimli bir branch ile başlar. Yeni bir branch oluşturarak ana kodu etkilemeden deneyler yapabilir, hazır olduğunda değişikliklerinizi ana branch ile birleştirebilirsiniz. Branch'ler takım çalışmasında çok önemlidir.`,
    en: `Branch is an independent line of development in Git. It allows you to develop new features or make bug fixes by branching off from the main code. Each repository starts with a default branch named 'main' or 'master'. By creating a new branch, you can experiment without affecting the main code and merge your changes with the main branch when ready. Branches are very important in team collaboration.`,
  },
};

export function getTooltipContent(key: string, lang: string = "tr"): string | undefined {
  return tooltipContent[key]?.[lang];
}
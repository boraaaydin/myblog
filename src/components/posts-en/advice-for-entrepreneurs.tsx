import ToolTip from "@/components/ToolTip";

export default function AdviceForEntrepreneurs() {
  return (
    <article className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
      <p>
        I collected the answers I gave to a young person interested in entrepreneurship as a list of short points. Direct advice that comes out of my own experience.
      </p>

      <section>
        <h2>Entrepreneurship Is a Marathon</h2>
        <ul>
          <li>Don&apos;t look at entrepreneurship in the short term. Don&apos;t get overly ambitious and say &quot;I&apos;ll push this to the very end.&quot;</li>
          <li>The average age of the most successful entrepreneurs is 45. So entrepreneurship is not a 100-meter sprint, it&apos;s a marathon.</li>
          <li>When my money ran out, I went back to working. I worked somewhere for most of my life. You need to do entrepreneurship alongside your main job.</li>
          <li>If you&apos;re very young, your network is small and your software and devops knowledge is limited. You need to mature in many areas.</li>
        </ul>
      </section>

      <section>
        <h2>Be Systematic</h2>
        <ul>
          <li>Write down all your ideas with their dates, even the bad ones.</li>
          <li>Do a rough <ToolTip keyName="swot-analysis">SWOT analysis</ToolTip> of every idea and write out the flow.</li>
          <li>Come back to those notes after some time has passed and add to them.</li>
          <li>When you see someone in a video who is facing that exact problem, note it down along with the timestamp.</li>
          <li>Bookmark sites you think could be useful with tags, using apps like Raindrop.</li>
        </ul>
      </section>

      <section>
        <h2>Become an Entrepreneurial Developer</h2>
        <ul>
          <li>In an era where artificial intelligence is this advanced, the best thing you can do is to become an entrepreneurial developer.</li>
          <li>Spend time understanding who uses AI and how. Watch videos.</li>
          <li>Sharpening the axe before entering the forest is always the better strategy.</li>
          <li>
            Study how people run parallel work with approaches like <ToolTip keyName="git-worktree">Git worktree</ToolTip>.
          </li>
          <li>Don&apos;t adopt everything they do. Build a flow that suits you and prepare your own <ToolTip keyName="prompt">prompts</ToolTip> to get more done in less time.</li>
        </ul>
      </section>

      <section>
        <h2>Be a Good Observer</h2>
        <ul>
          <li>
            Having <ToolTip keyName="domain-knowledge">domain</ToolTip> knowledge is important.
          </li>
          <li>Experiencing a problem first-hand, or seeing those who experience it, and also being the one who brings the idea to life is very valuable. That&apos;s when your venture&apos;s chance of success increases.</li>
          <li>Whenever you get the chance, talk to people from different fields about their work and try to understand what they go through.</li>
        </ul>
      </section>

      <section>
        <h2>Product First, Money Later</h2>
        <ul>
          <li>If your short-term goal is to make money, you may end up disappointed.</li>
          <li>Your primary goal should be to create a product that people actually use.</li>
          <li>You can even give it away for free at first. For example, you might only charge for the server and domain cost.</li>
          <li>As the application gets used, extra needs will appear. Try to charge something for those, even a small amount.</li>
          <li>Your aim is to get them to pay you, however little. But that money won&apos;t support you.</li>
        </ul>
      </section>

      <section>
        <h2>Finding the Right Idea</h2>
        <ul>
          <li>Research the needs of people who have money and use technology. Don&apos;t only look at your immediate surroundings, think of someone anywhere in the world.</li>
          <li>Create <ToolTip keyName="persona">personas</ToolTip> in your head and try to figure out what that person might need. You can think of a real person around you too, but have a few personas.</li>
          <li>You can build something that very few people need. For example, a site listing accessories for luxury motorcycle brands.</li>
          <li>Think of the small version of your idea in your own country: go to luxury motorcycle stores, talk to the store owner.</li>
          <li>If you have a hobby, there could be an application around it.</li>
          <li>You can use forums like Reddit to understand needs.</li>
          <li>Research a lot, generate ideas and take notes. Once you have a few ideas, compare them, find the one that makes money with the least effort, and start.</li>
          <li>The value of an idea ranges between 1 and -1. You add zeros next to it as you progress. Since a bad idea goes toward the negative, spend a lot of time finding the right one.</li>
        </ul>
      </section>

      <section>
        <h2>Ask the Right Questions</h2>
        <p>
          <a href="https://www.youtube.com/watch?v=2c-ANeLEhno" target="_blank" rel="noopener noreferrer">İlker Canikligil</a> built a nice application because he had the capability to solve his own need. But most people can&apos;t do that.
        </p>
        <ul>
          <li>You need to find people like him and draw those needs out of them. This is another reason why having domain knowledge matters.</li>
          <li>Ask without leading them. For example: &quot;Speakers leave gaps, they pause with an &apos;uhh&apos;. What kind of problems does this cause for you and what do you do to solve it?&quot;</li>
          <li>Don&apos;t ask yes/no questions. Ask questions that get the other person talking.</li>
          <li>Even though there are plenty of ideas around and ideas themselves aren&apos;t very valuable, you still need to invest in the right idea and spend time finding it.</li>
        </ul>
      </section>
    </article>
  );
}

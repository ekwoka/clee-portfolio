import Markdown from 'markdown-to-jsx';
import aboutContent from '../../../content/pages/about.md';
import Hero from '../../components/hero';
import { getMD, pageMDOptions } from '../../data/utils';

const [details, body] = getMD(aboutContent);

export default function About() {
  return (
    <main class="w-full pt-24">
      <Hero img={details.image} className="max-h-[50vh]" />
      {body.length > 5 && (
        <Markdown
          class="prose prose-neutral mx-auto py-8 px-4"
          options={pageMDOptions}>
          {body}
        </Markdown>
      )}
    </main>
  );
}
